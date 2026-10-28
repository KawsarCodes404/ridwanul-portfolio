import React from 'react';
import { Braces, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const groups = [
  { key: 'frontend', title: 'Frontend', subtitle: 'Interfaces and web applications', icon: Braces },
  { key: 'backend', title: 'Backend & data', subtitle: 'Application services and data', icon: Database },
  { key: 'tools', title: 'Tools & problem solving', subtitle: 'Practice, workflow, and design', icon: Wrench },
];

export default function Skills() {
  const { skills } = portfolioData;
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-heading text-center max-w-3xl mx-auto mb-14">
          <span className="section-kicker">TECHNICAL TOOLKIT</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills I work with</h2>
          <p className="mt-3 text-base text-zinc-400">A practical stack shaped by the projects I build and the concepts I continue to study.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {groups.map(({ key, title, subtitle, icon: Icon }) => (
            <article key={key} className="glass-card skill-card rounded-2xl p-6 sm:p-7 border border-white/10">
              <div className="flex items-start gap-3 mb-6">
                <span className="skill-icon p-3 rounded-xl text-emerald-300"><Icon className="w-5 h-5" /></span>
                <div><h3 className="text-lg font-bold text-white">{title}</h3><p className="text-xs text-zinc-400 mt-1">{subtitle}</p></div>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[key].map((skill) => <span key={skill} className="skill-tag px-3 py-2 rounded-lg border border-white/10 bg-zinc-900/70 text-xs font-medium text-zinc-300">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
