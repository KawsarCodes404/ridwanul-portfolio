import React from 'react';
import { 
  Compass, 
  Terminal, 
  Activity, 
  Palette, 
  Sparkles, 
  Heart, 
  Cpu, 
  User, 
  CheckCircle,
  Quote
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, stats } = portfolioData;

  const renderHobbyIcon = (icon) => {
    switch (icon) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & My Passion
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A glimpse into my background, the philosophy guiding my engineering, and what drives me forward both in and out of the terminal.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Programming Journey (Spans 7 cols) */}
          <div className="md:col-span-7 glass-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group border border-white/10 hover:border-indigo-500/40 transition-all">
            <div className="absolute top-0 right-0 w-44 h-44 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">My Programming Journey</h3>
                  <p className="text-xs text-zinc-400 font-mono">From Algorithms to Web Systems</p>
                </div>
              </div>

              <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-3 pt-2">
                <p>
                  My development journey started with competitive programming and algorithmic puzzles. Spending countless hours on <span className="text-indigo-300 font-medium">Codeforces and CodeChef</span> taught me to deconstruct complex challenges into crisp, optimal logic, analyze edge cases, and think with computational clarity.
                </p>
                <p>
                  As I transitioned into modern full-stack web engineering, I merged that deep algorithmic foundation with modern UI craftsmanship. I fell in love with turning clean code into dynamic, intuitive digital tools that solve everyday problems for people.
                </p>
              </div>
            </div>

            {/* Quote footnote */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-zinc-400 font-mono">
              <Quote className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>"Mastering core logic makes adapting to any framework second nature."</span>
            </div>
          </div>

          {/* Bento Card 2: What I Love Building (Spans 5 cols) */}
          <div className="md:col-span-5 glass-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group border border-white/10 hover:border-cyan-500/40 transition-all">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">What I Love Building</h3>
                  <p className="text-xs text-zinc-400 font-mono">Crafting Engaging Interfaces</p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pt-2">
                {about.enjoyment}
              </p>

              <div className="space-y-2 pt-2">
                {["Responsive Web Portals & SPAs", "Fluid Micro-Interactions & CSS Arts", "Scalable REST APIs & Clean State"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Focus: User Delight & Performance
              </span>
            </div>
          </div>

          {/* Bento Card 3: Personality & Engineering Mindset (Spans 5 cols) */}
          <div className="md:col-span-5 glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-purple-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Personality & Work Ethic</h3>
                  <p className="text-xs text-zinc-400 font-mono">My Core Strengths</p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                I believe that thoughtful software comes from disciplined habits, high empathy for end-users, and a relentless curiosity to master new paradigms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {about.personalityTraits.map((trait, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 text-xs font-medium text-zinc-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 4: Hobbies & Interests Outside of Code (Spans 7 cols) */}
          <div className="md:col-span-7 glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 hover:border-amber-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Hobbies & Interests</h3>
                  <p className="text-xs text-zinc-400 font-mono">Life Beyond The Codebase</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {about.hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-white/10 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      {renderHobbyIcon(hobby.icon)}
                      <h4 className="text-xs font-semibold text-zinc-200">{hobby.title}</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      {hobby.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Highlights Banner */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 text-center border border-white/5 hover:border-indigo-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-300 mt-1">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                {stat.suffix}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
