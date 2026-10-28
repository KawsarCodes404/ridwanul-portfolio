import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Terminal, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'frontend', label: 'Frontend Development', icon: Code2 },
    { id: 'backend', label: 'Backend & Database', icon: Database },
    { id: 'tools', label: 'Tools & Algorithms', icon: Wrench },
  ];

  const getSkillsToDisplay = () => {
    if (activeTab === 'frontend') return [{ category: 'Frontend Ecosystem', items: skills.frontend, accent: 'cyan' }];
    if (activeTab === 'backend') return [{ category: 'Backend & Architecture', items: skills.backend, accent: 'sapphire' }];
    if (activeTab === 'tools') return [{ category: 'Tools & Problem Solving', items: skills.tools, accent: 'indigo' }];
    
    return [
      { category: 'Frontend Ecosystem', items: skills.frontend, accent: 'cyan' },
      { category: 'Backend & Database', items: skills.backend, accent: 'sapphire' },
      { category: 'Tools, Version Control & CS', items: skills.tools, accent: 'indigo' },
    ];
  };

  const getAccentColors = (accent) => {
    switch (accent) {
      case 'cyan':
        return {
          bar: 'from-blue-500 to-cyan-400',
          badge: 'text-cyan-400 bg-cyan-950/40 border-cyan-500/20',
          hover: 'hover:border-cyan-500/40',
        };
      case 'sapphire':
        return {
          bar: 'from-blue-600 to-indigo-500',
          badge: 'text-blue-300 bg-blue-950/40 border-blue-500/20',
          hover: 'hover:border-blue-500/40',
        };
      case 'indigo':
      default:
        return {
          bar: 'from-indigo-500 to-cyan-500',
          badge: 'text-indigo-300 bg-indigo-950/40 border-indigo-500/20',
          hover: 'hover:border-indigo-500/40',
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A comprehensive overview of my technical stack, categorized by domain, proficiency, and engineering focus.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/30'
                    : 'bg-[#0d1424] text-zinc-400 hover:text-zinc-200 border border-white/5 hover:border-blue-500/30'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="space-y-10">
          {getSkillsToDisplay().map((section, sIdx) => {
            const colorScheme = getAccentColors(section.accent);
            return (
              <div key={sIdx} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <h3 className="text-base font-bold text-zinc-200 tracking-wide">
                    {section.category}
                  </h3>
                  <span className="text-xs text-zinc-400 font-mono">
                    ({section.items.length} Technologies)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`glass-card rounded-xl p-4 border border-white/5 ${colorScheme.hover} transition-all duration-300 group hover:-translate-y-0.5`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0d1424] border border-blue-500/20 flex items-center justify-center text-zinc-300 group-hover:text-cyan-300 transition-colors">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-medium text-zinc-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Visual Progress Bar */}
                      <div className="w-full bg-[#0a0f1d] rounded-full h-1.5 overflow-hidden border border-white/5">
                        <div
                          className={`bg-gradient-to-r ${colorScheme.bar} h-1.5 rounded-full transition-all duration-700 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Core Principles Footnote */}
        <div className="mt-12 glass-card rounded-2xl p-6 border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Continuous Growth &amp; Experiential Learning</h4>
              <p className="text-xs text-zinc-400">Autodidactic mindset: always mastering modern paradigms and algorithmic efficiency.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span>Stack: Modern • Modular • Performant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
