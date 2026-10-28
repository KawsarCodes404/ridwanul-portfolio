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
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial sapphire glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>DISCOVER MY STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me &amp; My Philosophy
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            From 600+ algorithmic battles to crafting dynamic full-stack experiences: my background, mindset, and passions.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Programming Journey (Spans 7 cols) */}
          <div className="md:col-span-7 glass-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-blue-500/40 transition-all">
            <div className="absolute top-0 right-0 w-44 h-44 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">My Programming Journey</h3>
                  <p className="text-xs text-zinc-400 font-mono">Algorithms • Phitron • Programming Hero</p>
                </div>
              </div>

              <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-3 pt-2">
                <p>
                  Over the past <span className="text-cyan-300 font-semibold">2+ years</span>, I developed a strong computational foundation through competitive programming, solving over <span className="text-blue-300 font-semibold">600+ problems</span> across Codeforces, CodeChef, and online judges, and earning a <span className="text-amber-300 font-semibold">2★ Coder ranking on CodeChef</span>.
                </p>
                <p>
                  I formalized my core CS foundations by finishing the <span className="text-white font-semibold">Phitron Computer Science &amp; Fundamentals Course</span>, mastering C, C++, Data Structures, Algorithms, and OOP. Today, I am taking that deep algorithmic mindset into modern full-stack web engineering in the <span className="text-white font-semibold">Programming Hero (Level 1) Course</span>, building responsive applications with React, Next.js, TypeScript, and Node.js.
                </p>
              </div>
            </div>

            {/* Quote footnote */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3 text-xs text-zinc-400 font-mono">
              <Quote className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>"Deep problem solving gives code structure; thoughtful design gives it life."</span>
            </div>
          </div>

          {/* Bento Card 2: What I Love Building (Spans 5 cols) */}
          <div className="md:col-span-5 glass-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group border border-white/5 hover:border-cyan-500/40 transition-all">
            <div className="absolute bottom-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">What I Love Building</h3>
                  <p className="text-xs text-zinc-400 font-mono">Real-World Community Impact</p>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed pt-2">
                {about.enjoyment}
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "Bangladeshi Market Portals (Bazar-Dor)", 
                  "Developer Summit Portals (DevConf-2026)", 
                  "Daily Workout & Fitness Planners", 
                  "Fantasy Sports Squad Engines (BPL-Dream-11)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-500/20">
                Focus: Performance &amp; Real Utility
              </span>
            </div>
          </div>

          {/* Bento Card 3: Personality & Mindset (Spans 5 cols) */}
          <div className="md:col-span-5 glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/5 hover:border-blue-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Personality &amp; Work Ethic</h3>
                  <p className="text-xs text-zinc-400 font-mono">Autodidact &amp; Quick Learner</p>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed">
                I have a strong curiosity to learn new things, adaptable nature, and an active <span className="text-cyan-300 font-medium">"learning-by-doing"</span> experiential mindset.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {about.personalityTraits.map((trait, idx) => (
                  <div 
                    key={idx} 
                    className="p-2.5 rounded-xl bg-[#0d1424] border border-white/5 text-xs font-medium text-zinc-200 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{trait}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bento Card 4: Hobbies & Interests Outside Code (Spans 7 cols) */}
          <div className="md:col-span-7 glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/5 hover:border-amber-500/40 transition-all">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-600/20 border border-amber-500/30 text-amber-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Hobbies &amp; Interests</h3>
                  <p className="text-xs text-zinc-400 font-mono">Beyond The Keyboard</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {about.hobbies.map((hobby, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0d1424]/80 border border-white/5 hover:border-white/10 transition-colors space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      {renderHobbyIcon(hobby.icon)}
                      <h4 className="text-xs font-semibold text-zinc-200">{hobby.title}</h4>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                      {hobby.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Stats Highlights Banner */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-5 text-center border border-white/5 hover:border-blue-500/30 transition-all group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-zinc-200 mt-1">
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
