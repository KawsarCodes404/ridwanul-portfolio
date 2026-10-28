import React from 'react';
import { BookOpen, CheckCircle2, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-heading text-center max-w-3xl mx-auto mb-14">
          <span className="section-kicker"><GraduationCap className="w-3.5 h-3.5" /> LEARNING JOURNEY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Education &amp; courses</h2>
          <p className="mt-3 text-base text-zinc-400">Structured learning and hands-on practice, with more ahead.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {portfolioData.education.map((item) => (
            <article key={item.institution} className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <span className="learning-icon p-3 rounded-xl text-emerald-300"><BookOpen className="w-5 h-5" /></span>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${item.status === 'Completed' ? 'text-emerald-300 bg-emerald-950/50 border-emerald-500/20' : 'text-amber-300 bg-amber-950/40 border-amber-500/20'}`}>{item.status}</span>
              </div>
              <p className="text-sm text-emerald-300 mt-5">{item.institution}</p>
              <h3 className="text-xl font-bold text-white mt-1">{item.degree}</h3>
              <p className="text-xs text-zinc-500 mt-2">{item.duration}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mt-4">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {item.highlights.map((highlight) => <span key={highlight} className="inline-flex items-center gap-1.5 text-xs text-zinc-300"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />{highlight}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
