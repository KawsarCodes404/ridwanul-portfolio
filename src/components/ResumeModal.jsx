import React, { useEffect } from 'react';
import { ArrowUpRight, Download, FileText, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const { personal } = portfolioData;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="resume-title" className="resume-modal relative w-full max-w-5xl h-[92vh] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d14] shadow-2xl flex flex-col" onClick={(event) => event.stopPropagation()}>
        <header className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-white/10 bg-[#0d0d14]">
          <div className="flex items-center gap-3 min-w-0"><span className="p-2 rounded-lg bg-blue-500/10 text-blue-300"><FileText className="w-5 h-5" /></span><div className="min-w-0"><h2 id="resume-title" className="text-sm sm:text-base font-bold text-white">Résumé preview</h2><p className="text-[11px] text-zinc-400 truncate">{personal.name} · {personal.title}</p></div></div>
          <div className="flex items-center gap-2 shrink-0">
            <a href={personal.resumeUrl} download className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600"><Download className="w-3.5 h-3.5" /><span className="hidden sm:inline">Download PDF</span></a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" aria-label="Open résumé in a new tab" className="p-2 rounded-lg border border-white/10 text-zinc-300 hover:text-blue-300"><ArrowUpRight className="w-4 h-4" /></a>
            <button type="button" onClick={onClose} aria-label="Close résumé preview" className="p-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
        </header>
        <iframe title={`${personal.name} résumé PDF`} src={personal.resumeUrl} className="resume-frame flex-1 w-full border-0 bg-white" />
      </section>
    </div>
  );
}
