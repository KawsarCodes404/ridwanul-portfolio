import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Educational Background
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A solid grounding in Computer Science principles, algorithmic thinking, and analytical problem-solving.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-purple-400 bg-purple-950/40 border border-purple-500/20 mb-2">
                    <Award className="w-3 h-3" />
                    <span>{item.status}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-sm font-medium text-zinc-300 mt-1">
                    {item.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{item.duration}</span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 text-xs font-semibold font-mono">
                    {item.grade}
                  </span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Coursework / Highlights */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-mono">
                    Key Coursework & Competencies:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
