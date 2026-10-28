import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code2,
  Printer
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, skills, education, experience, projects } = portfolioData;
  const [downloading, setDownloading] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    
    // Generate text/markdown resume and trigger file download
    const resumeContent = `
=====================================================
${personal.name.toUpperCase()}
${personal.title} | ${personal.secondaryTitle}
Email: ${personal.email} | Phone: ${personal.phone}
Location: ${personal.location}
GitHub: https://github.com/KawsarCodes404
LinkedIn: https://www.linkedin.com/in/ridwanul-hoque-kawsar
=====================================================

PROFESSIONAL SUMMARY:
${personal.bio}

CORE TECHNICAL SKILLS:
- Frontend: React.js, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Next.js, Bootstrap 5
- Backend: Node.js, Express.js, MongoDB, RESTful APIs, Firebase Auth & Storage
- Problem Solving: C, C++, Data Structures & Algorithms (500+ CP Problems Solved)
- Tools: Git, GitHub, VS Code, Figma, Postman, Linux

EDUCATION:
${education.map(e => `* ${e.degree} - ${e.institution} (${e.duration}) | ${e.grade}\n  Coursework: ${e.highlights.join(', ')}`).join('\n\n')}

EXPERIENCE:
${experience.map(exp => `* ${exp.role} - ${exp.company} (${exp.duration})\n  ${exp.description}\n  Achievements:\n  - ${exp.achievements.join('\n  - ')}`).join('\n\n')}

FEATURED PROJECTS:
${projects.map(p => `* ${p.title}\n  Stack: ${p.mainTechStack.join(', ')}\n  Live Demo: ${p.liveLink}\n  Client GitHub: ${p.clientGithub}\n  Summary: ${p.shortDesc}`).join('\n\n')}
=====================================================
    `.trim();

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_${personal.name.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloading(false);
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0d0d14] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 text-zinc-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0d14]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                Resume / Curriculum Vitae
              </h2>
              <p className="text-[11px] font-mono text-zinc-400">
                {personal.name} • {personal.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Downloading...' : 'Download Resume'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Preview Sheet */}
        <div className="p-6 sm:p-10 space-y-8 bg-zinc-950/60 font-sans">
          
          {/* Header of Resume */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-sm font-semibold text-indigo-400 mt-1">
                {personal.title} | {personal.secondaryTitle}
              </p>
            </div>
            <div className="text-xs text-zinc-300 space-y-1 font-mono">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personal.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 font-mono">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Core Technical Skills */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <p className="font-semibold text-zinc-200">Frontend</p>
                <p className="text-zinc-400 font-mono text-[11px]">
                  React.js, JavaScript ES6+, Tailwind CSS, HTML5, CSS3, Next.js, Bootstrap 5
                </p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <p className="font-semibold text-zinc-200">Backend & DB</p>
                <p className="text-zinc-400 font-mono text-[11px]">
                  Node.js, Express.js, MongoDB, RESTful APIs, Firebase Auth, JWT
                </p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <p className="font-semibold text-zinc-200">Tools & CS</p>
                <p className="text-zinc-400 font-mono text-[11px]">
                  C/C++, Git, GitHub, VS Code, Figma, 500+ CP Problems Solved
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
              Experience & Activities
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-indigo-500/40 pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="text-zinc-400 font-mono">{exp.duration}</span>
                  </div>
                  <p className="text-[11px] text-indigo-300 font-medium">{exp.company} • {exp.type}</p>
                  <p className="text-xs text-zinc-400 pt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-purple-500/40 pl-4 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-zinc-400 font-mono">{edu.duration}</span>
                  </div>
                  <p className="text-[11px] text-purple-300 font-medium">{edu.institution} | {edu.grade}</p>
                  <p className="text-xs text-zinc-400">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#0d0d14]/95 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-zinc-400 font-mono">
            Direct 1-Click Download Enabled
          </span>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Formatted Resume</span>
          </button>
        </div>

      </div>
    </div>
  );
}
