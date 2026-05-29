import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

// Custom plugin to serve plakat.png from root and copy to dist on build
const servePlakatPlugin = () => ({
  name: 'serve-plakat-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const pathname = req.url ? req.url.split('?')[0] : '';
      if (pathname === '/plakat.png') {
        const filePath = path.resolve(process.cwd(), 'plakat.png');
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
    const srcPath = path.resolve(process.cwd(), 'plakat.png');
    const destPath = path.resolve(process.cwd(), 'dist/plakat.png');
    if (fs.existsSync(srcPath)) {
      if (!fs.existsSync(path.dirname(destPath))) {
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
      }
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied plakat.png to dist/');
    }
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
