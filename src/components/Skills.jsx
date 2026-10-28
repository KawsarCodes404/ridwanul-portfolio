import React, { useState } from 'react';
import { Braces, Code2, Database, Layers3, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const groups = [
  { id: 'frontend', title: 'Frontend', subtitle: 'Interfaces & styling', icon: Layers3, skills: (s) => s.frontend },
  { id: 'backend', title: 'Backend & data', subtitle: 'Server, APIs & persistence', icon: Database, skills: (s) => s.backend },
  { id: 'languages', title: 'Languages & CS', subtitle: 'Programming fundamentals', icon: Braces, skills: (s) => s.languages },
  { id: 'workflow', title: 'Tools & workflow', subtitle: 'Building, design & version control', icon: Terminal, skills: (s) => s.workflow },
];

export default function Skills() {
  const { skills } = portfolioData;
  const [active, setActive] = useState('all');
  const shown = active === 'all' ? groups : groups.filter((group) => group.id === active);

  return (
    <section id="skills" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-blue-500/[0.06] blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-sky-300">
            <Sparkles className="h-3.5 w-3.5" /> TECH STACK
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Tools I build with</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
            Technologies from my projects, programming practice, and current web development studies.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter technologies">
          {[{ id: 'all', label: 'Everything', icon: Code2 }, ...groups.map(({ id, title, icon }) => ({ id, label: title, icon }))].map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" role="tab" aria-selected={active === id} onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${active === id ? 'border-sky-300/30 bg-gradient-to-r from-blue-600/90 to-cyan-500/80 text-white shadow-lg shadow-blue-950/50' : 'border-white/[0.08] bg-white/[0.025] text-slate-400 hover:border-sky-300/25 hover:bg-white/[0.05] hover:text-white'}`}>
              <Icon className="h-4 w-4" />{label}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {shown.map(({ id, title, subtitle, icon: Icon, skills: getSkills }) => {
            const items = getSkills(skills);
            return (
              <section key={id} aria-label={title} className="rounded-3xl border border-white/[0.08] bg-slate-950/35 p-5 shadow-[0_20px_70px_-45px_rgba(37,99,235,.35)] backdrop-blur-sm sm:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-300/15 bg-gradient-to-br from-blue-500/15 to-cyan-400/[0.06] text-sky-300"><Icon className="h-5 w-5" /></span>
                  <div><h3 className="text-base font-bold text-slate-100 sm:text-lg">{title}</h3><p className="mt-0.5 text-xs text-slate-500">{subtitle}</p></div>
                  <span className="ml-auto rounded-full border border-white/[0.07] px-2.5 py-1 font-mono text-[11px] text-slate-500">{String(items.length).padStart(2, '0')}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {items.map((name, index) => (
                    <div key={name} className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1220]/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25 hover:bg-[#101b2d]">
                      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/0 to-transparent transition-colors group-hover:via-sky-300/60" />
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.045] font-mono text-xs font-bold text-sky-300/90 ring-1 ring-white/[0.07] group-hover:bg-sky-300/10 group-hover:text-sky-200">{name.split(/\s|\.|&/).filter(Boolean).slice(0, 2).map((part) => part[0]).join('').toUpperCase()}</span>
                        <span className="text-sm font-semibold leading-5 text-slate-300 transition-colors group-hover:text-white">{name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-blue-300/10 bg-blue-400/[0.035] p-4 sm:items-center sm:p-5">
          <span className="mt-0.5 rounded-xl bg-blue-400/10 p-2 text-sky-300 sm:mt-0"><Sparkles className="h-4 w-4" /></span>
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">Currently expanding my full-stack skills through hands-on projects and the Programming Hero Level 1 course.</p>
        </div>
      </div>
    </section>
  );
}
