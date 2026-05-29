import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Custom plugin to serve plakat.png and instapost.png from root and copy to dist on build
const servePlakatPlugin = () => ({
  name: 'serve-plakat-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const pathname = req.url ? req.url.split('?')[0] : '';
      if (pathname === '/plakat.png' || pathname === '/instapost.png' || pathname === '/faltflyer.png') {
        const filename = pathname.substring(1); // 'plakat.png' or 'instapost.png' or 'faltflyer.png'
        const filePath = path.resolve(process.cwd(), filename);
        if (fs.existsSync(filePath)) {
          res.setHeader('Content-Type', 'image/png');
          res.statusCode = 200;
          res.write(fs.readFileSync(filePath));
          res.end();
          return;
        }
      }
      next();
    });
  },
  closeBundle() {
    ['plakat.png', 'instapost.png', 'faltflyer.png'].forEach(filename => {
      const srcPath = path.resolve(process.cwd(), filename);
      const destPath = path.resolve(process.cwd(), `dist/${filename}`);
      if (fs.existsSync(srcPath)) {
        if (!fs.existsSync(path.dirname(destPath))) {
          fs.mkdirSync(path.dirname(destPath), { recursive: true });
        }
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${filename} to dist/`);
      }
    });
  }
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), servePlakatPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
