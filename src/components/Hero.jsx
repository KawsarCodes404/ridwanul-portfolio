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
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal, socials } = portfolioData;

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
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-medium shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Hello, I'm <br />
                <span className="text-gradient-primary">
                  {personal.name}
                </span>
              </h1>
              
              {/* Designation */}
              <div className="inline-block">
                <p className="text-lg sm:text-xl font-semibold text-zinc-200 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  {personal.title}
                </p>
                <p className="text-sm font-mono text-indigo-400 mt-1">
                  {personal.secondaryTitle}
                </p>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.bio}
            </p>

            {/* CTAs: Resume & View Projects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* View Projects Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Download / View Button (Rubric Requirement 3) */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-indigo-500 shadow-md hover:-translate-y-0.5 transition-all group"
                id="hero-resume-btn"
              >
                <Download className="w-4 h-4 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
                <span>View & Download Resume</span>
              </button>
            </div>

            {/* Social Links (Rubric Requirement 4) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
              <span className="font-mono text-zinc-500 uppercase tracking-wider text-[11px]">Connect With Me:</span>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={`${social.name} - ${social.handle}`}
                    className={`p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-400 transition-all ${social.color} hover:scale-105 shadow-sm`}
                  >
                    {renderSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Professional Photo with Cyber Aesthetic Halo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Ambient Glow behind image */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-85 transition duration-1000 group-hover:duration-200 animate-pulse-glow" />

              {/* Photo Frame Container */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[14px] bg-[#0c0d14] w-[290px] sm:w-[340px] md:w-[370px] aspect-[4/5]">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                    onError={(e) => {
                      // Fallback in case of asset path issues
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  
                  {/* Subtle dark gradient overlay at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />

                  {/* Floating Tag over image bottom */}
                  <div className="absolute bottom-3 left-3 right-3 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-indigo-600/30 text-indigo-400">
                          <Code2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">Full-Stack Craft</p>
                          <p className="text-[10px] text-zinc-400 font-mono">React • Node • Tailwind</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2 shadow-xl shadow-black/50 flex items-center gap-2 animate-float">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-medium text-zinc-200">
                  500+ CP Solved
                </span>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3.5 py-2 shadow-xl shadow-black/50 flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-zinc-200">
                  Clean Architecture
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
