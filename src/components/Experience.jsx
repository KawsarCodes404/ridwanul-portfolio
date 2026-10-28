import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience, cpProfiles } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD &amp; EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Problem Solving &amp; Development Experience
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            2+ years of continuous competitive programming rigor backed by hands-on full-stack project building.
          </p>
        </div>

        {/* CP Quick Status Bar */}
        <div className="max-w-4xl mx-auto mb-10 overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-br from-[#10192b] via-[#0c1321] to-[#0a0e17] p-5 shadow-[0_24px_70px_-48px_rgba(37,99,235,.5)] sm:p-7">
          <div className="flex items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/[0.09] text-amber-300 shadow-inner shadow-amber-300/[0.04] sm:h-14 sm:w-14">
              <Award className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.17em] text-sky-300">Competitive programming</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
                <span className="text-[11px] text-slate-500">2+ years of consistent practice</span>
              </div>
              <h3 className="text-base font-bold leading-snug tracking-tight text-white sm:text-lg">2★ CodeChef coder <span className="mx-1 text-slate-600">·</span> 600+ problems solved</h3>
              <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm">Building algorithmic fluency through regular contests and problem solving across multiple platforms.</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2 border-t border-white/[0.07] pt-4 sm:grid-cols-3 sm:gap-3">
            {cpProfiles.map((cp) => (
              <a key={cp.name} href={cp.url} target="_blank" rel="noopener noreferrer"
                className="group flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-black/20 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-sky-300/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/50">
                <span className="min-w-0"><span className="block text-xs font-semibold text-slate-200">{cp.name}</span><span className="mt-1 block truncate font-mono text-[11px] text-sky-300">{cp.rating}</span></span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="group">
                <div className="glass-card relative overflow-hidden rounded-3xl border border-white/[0.08] border-l-2 border-l-sky-400/70 p-6 shadow-[0_24px_70px_-52px_rgba(37,99,235,.45)] transition-all duration-300 hover:border-sky-300/25 hover:border-l-cyan-300 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-zinc-300 font-medium">
                        <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                          {item.company}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-400">{item.type}</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-300 bg-[#0d1424] border border-white/5 self-start">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet achievements */}
                  <div className="space-y-2 mb-5">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {item.skillsUsed.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#0d1424] text-zinc-300 text-[11px] font-mono border border-white/5"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
