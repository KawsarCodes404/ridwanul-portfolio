import React from 'react';
import { Activity, Code2, Compass, Lightbulb, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const icons = { Terminal, Activity, Compass, Palette: Lightbulb };

export default function About() {
  const { about, stats } = portfolioData;
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-heading text-center max-w-3xl mx-auto mb-14">
          <span className="section-kicker">A LITTLE ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">From problem solving to web development</h2>
          <p className="mt-3 text-base text-zinc-400">The way I learn, what I like building, and the ideas that keep me curious.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <article className="glass-card md:col-span-7 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-5"><span className="learning-icon p-3 rounded-xl text-emerald-300"><Terminal className="w-5 h-5" /></span><div><h3 className="text-lg font-bold text-white">My journey</h3><p className="text-xs text-zinc-400">Competitive programming to web applications</p></div></div>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">{about.journey}</p>
          </article>
          <article className="glass-card md:col-span-5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-5"><span className="learning-icon p-3 rounded-xl text-amber-300"><Code2 className="w-5 h-5" /></span><div><h3 className="text-lg font-bold text-white">What I like building</h3><p className="text-xs text-zinc-400">Practical, clear web experiences</p></div></div>
            <p className="text-sm text-zinc-300 leading-relaxed">{about.enjoyment}</p>
            <div className="mt-5 flex flex-wrap gap-2">{["Responsive interfaces", "Useful tools", "Full-stack projects"].map((item) => <span key={item} className="interest-chip px-2.5 py-1.5 rounded-lg border border-white/10 text-xs text-zinc-300">{item}</span>)}</div>
          </article>
          <article className="glass-card md:col-span-5 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-5"><span className="learning-icon p-3 rounded-xl text-teal-300"><Lightbulb className="w-5 h-5" /></span><div><h3 className="text-lg font-bold text-white">How I work</h3><p className="text-xs text-zinc-400">Curious, practical, and persistent</p></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">{about.personalityTraits.map((trait) => <span key={trait} className="interest-chip px-3 py-2.5 rounded-xl border border-white/10 text-xs text-zinc-300">{trait}</span>)}</div>
          </article>
          <article className="glass-card md:col-span-7 rounded-2xl p-6 sm:p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-5"><span className="learning-icon p-3 rounded-xl text-emerald-300"><Compass className="w-5 h-5" /></span><div><h3 className="text-lg font-bold text-white">Interests beyond the editor</h3><p className="text-xs text-zinc-400">Programming and technology</p></div></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{about.hobbies.map((item) => { const Icon = icons[item.icon] || Activity; return <div key={item.title} className="interest-card p-4 rounded-xl border border-white/10"><Icon className="w-4 h-4 text-emerald-300" /><h4 className="text-sm font-semibold text-zinc-200 mt-3">{item.title}</h4><p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{item.desc}</p></div>; })}</div>
          </article>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => <div key={stat.label} className="stat-tile rounded-xl p-4 sm:p-5 border border-white/10 text-center"><div className="text-xl sm:text-2xl font-bold text-emerald-300">{stat.value}</div><div className="text-xs font-semibold text-zinc-200 mt-1">{stat.label}</div><div className="text-[10px] text-zinc-500 mt-1">{stat.suffix}</div></div>)}
        </div>
      </div>
    </section>
  );
}
