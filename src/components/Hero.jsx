import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Sparkles, 
  Terminal, 
  Code2, 
  CheckCircle2,
  ExternalLink,
  Award,
  Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, socials, cpProfiles } = portfolioData;

  const renderSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-4 h-4" />;
      case 'LinkedIn':
        return <Linkedin className="w-4 h-4" />;
      case 'Twitter / X':
        return <Twitter className="w-4 h-4" />;
      case 'Facebook':
        return <Facebook className="w-4 h-4" />;
      case 'CodeChef':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Codeforces':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Islamic Greeting & Availability Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Assalamu Alaikum Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-sm shadow-emerald-500/20">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-sans tracking-wide">Assalamu Alaikum</span>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                I'm{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-200 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              {/* Designation & Sub-designation */}
              <div className="space-y-1.5">
                <p className="text-lg sm:text-xl font-bold text-zinc-100 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {personal.title}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    2★ CodeChef Coder
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-semibold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                    600+ CP Problems Solved
                  </span>
                </div>
              </div>
            </div>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {personal.tagline}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Explore Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>View Pinned Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume View & Download Button (Requirement 3) */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-400 shadow-md hover:-translate-y-0.5 transition-all group"
                id="hero-resume-btn"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>

            {/* Social & Coding Profiles */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
              <span className="font-mono text-zinc-500 uppercase tracking-wider text-[11px]">Profiles &amp; Socials:</span>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={`${social.name} (${social.handle})`}
                    className={`p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 transition-all ${social.color} hover:scale-105 shadow-sm`}
                  >
                    {renderSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Hero Photo with Premium Architectural Framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer Ambient Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-600 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-700 animate-pulse-glow" />

              {/* Layered Glass Frame */}
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-white/30 via-white/5 to-white/15 backdrop-blur-2xl shadow-2xl shadow-black/80">
                <div className="relative overflow-hidden rounded-[22px] bg-[#0c0d14] w-[280px] sm:w-[330px] md:w-[360px] aspect-[4/5]">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Gradient Shadow at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/20 to-transparent opacity-70" />

                  {/* High-Tech Card Pill over photo footer */}
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/85 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-indigo-600/30 text-indigo-400">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Full-Stack &amp; DSA</p>
                          <p className="text-[10px] text-zinc-400 font-mono">Next.js • TypeScript • C++</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Badge 1 (Top Left): 2-Star CodeChef */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-zinc-950/90 backdrop-blur-md border border-amber-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-black/60 flex items-center gap-2 animate-float">
                <Award className="w-4 h-4 text-amber-400" />
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white font-mono">2★ CodeChef</span>
                  <span className="block text-[9px] text-amber-400/90 font-mono">ridwanul_hoque</span>
                </div>
              </div>

              {/* Floating Achievement Badge 2 (Bottom Right): 600+ CP Solved */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-zinc-950/90 backdrop-blur-md border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-black/60 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <Terminal className="w-4 h-4 text-cyan-400" />
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white font-mono">600+ Solved</span>
                  <span className="block text-[9px] text-cyan-400/90 font-mono">Online Judges</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
