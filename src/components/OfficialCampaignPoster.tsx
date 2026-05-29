import React from 'react';
import { Download } from 'lucide-react';

interface OfficialCampaignPosterProps {
  onDownloadClick?: (fileName: string) => void;
}

export default function OfficialCampaignPoster({ onDownloadClick }: OfficialCampaignPosterProps) {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/plakat.png';
    downloadLink.download = 'plakat.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    if (onDownloadClick) {
      onDownloadClick('plakat.png');
    }
  };

  return (
    <div id="campaign-poster-framework" className="w-full max-w-4xl mx-auto space-y-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#FAF7F0] p-6 rounded-3xl border border-church-border text-left">
        <div>
          <span className="text-xs font-mono uppercase bg-church-navy text-church-gold px-3.5 py-1 rounded-full font-bold">
            Original Kampagnenplakat
          </span>
          <h3 className="font-serif text-2xl font-bold text-church-navy mt-1.5">
            Kampagnenmotiv: „Mehr als du denkst.“
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mt-1">
            Offizielles Motiv der Kampagne zum Anzeigen und Herunterladen.
          </p>
        </div>
        <button
          onClick={handleDownload}
          className="px-6 py-3 bg-church-navy hover:bg-church-navy/95 text-white hover:text-church-gold font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center space-x-2 shrink-0 transition-all cursor-pointer shadow-md shadow-church-navy/10 border-none group"
        >
          <Download className="h-4.5 w-4.5 text-church-gold group-hover:scale-110 transition-transform" />
          <span>Plakat herunterladen</span>
        </button>
      </div>

      {/* Frame displaying the exact uploaded image */}
      <div className="w-full bg-[#FAF7F0] rounded-[32px] overflow-hidden shadow-2xl border border-church-border p-3 max-w-[850px] mx-auto relative">
        <div className="absolute inset-0 bg-[#fbf9f5] opacity-10 pointer-events-none mix-blend-multiply" />
        <img 
          src="/plakat.png" 
          alt="Original Kampagnenplakat" 
          referrerPolicy="no-referrer"
          className="w-full h-auto select-none pointer-events-auto rounded-[20px] transition-transform duration-300 hover:scale-[1.01]"
        />
      </div>
    </div>
  );
}
