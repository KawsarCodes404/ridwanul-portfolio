import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, Terminal, Code2 } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-[#0d1424] border border-amber-500/30 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                2★ CodeChef Coder &amp; 600+ Algorithmic Solutions
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Active contender on Codeforces, CodeChef, LeetCode &amp; VJudge
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {cpProfiles.slice(0, 3).map((cp, idx) => (
              <a
                key={idx}
                href={cp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-lg bg-[#07090e] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white hover:border-amber-500/50 transition-colors"
              >
                {cp.name}: <span className="text-amber-400">{cp.rating}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent" />

          <div className="space-y-8">
            {experience.map((item, idx) => (
              <div key={idx} className="relative sm:pl-20 group">
                
                {/* Timeline Dot Icon */}
                <div className="hidden sm:flex absolute left-5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-[#07090e] border-2 border-blue-500 items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                  <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-cyan-300" />
                </div>

                <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
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
