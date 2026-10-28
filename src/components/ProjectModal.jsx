import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Github, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Rocket 
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0d14] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 text-zinc-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d14]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-500/20">
              {project.category}
            </span>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              Project Specification
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-7">
          
          {/* Project Title & Badge */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 font-mono">
              Badge: <span className="text-indigo-400">{project.badge}</span>
            </p>
          </div>

          {/* Project Image */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>

          {/* Action Links (Live Project & GitHub Client) */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all hover:-translate-y-0.5"
              >
                <span>Live Project Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.clientGithub && (
              <a
                href={project.clientGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-zinc-200 bg-zinc-800/90 hover:bg-zinc-700 border border-white/10 hover:border-zinc-500 transition-all hover:-translate-y-0.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository (Client)</span>
              </a>
            )}
          </div>

          {/* Main Technology Stack (Requirement 9) */}
          <div className="space-y-2.5 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Main Technology Stack Used:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.mainTechStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-zinc-900 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description (Requirement 9) */}
          <div className="space-y-2 pt-2 border-t border-white/5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
              Brief & Detailed Description:
            </h4>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.fullDesc || project.shortDesc}
            </p>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="space-y-2.5 pt-2 border-t border-white/5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 font-mono">
                Key Highlights:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges Faced (Requirement 9) */}
          <div className="rounded-xl p-5 bg-amber-950/20 border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>Challenges Faced While Developing:</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.challengesFaced}
            </p>
          </div>

          {/* Potential Improvements & Future Plans (Requirement 9) */}
          <div className="rounded-xl p-5 bg-cyan-950/20 border border-cyan-500/30 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono uppercase tracking-wider">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span>Potential Improvements & Future Plans:</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {project.futurePlans}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0d0d14]/90 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-800 hover:bg-zinc-700 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
