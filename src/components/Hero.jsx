import React from 'react';
import { 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Terminal, 
  ExternalLink,
  Award,
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-emerald-600/15 via-teal-600/10 to-teal-500/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-12 w-80 h-80 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-zinc-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-semibold tracking-wide text-emerald-300 hero-greeting">Assalamu Alaikum,</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                I'm{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              {/* Designation & Sub-designation */}
              <div className="space-y-1.5">
                <p className="text-lg sm:text-xl font-bold text-zinc-100 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                  {personal.title}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 font-semibold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    2★ CodeChef Coder
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-semibold flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>View Pinned Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume View & Download Button (Requirement 3) */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-teal-400 shadow-md hover:-translate-y-0.5 transition-all group"
                id="hero-resume-btn"
              >
                <Download className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
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

          {/* Portrait softly blends into the page atmosphere */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="hero-portrait-wrap relative isolate w-[min(84vw,390px)] aspect-[4/5]">
              <div className="hero-portrait-glow absolute inset-x-[-18%] top-[8%] bottom-[4%] -z-10 rounded-full bg-gradient-to-br from-emerald-500/35 via-teal-500/25 to-teal-400/20 blur-[70px] transition-opacity duration-700" />
              <img
                src={personal.avatar}
                alt={personal.name}
                className="hero-portrait-image h-full w-full object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

