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
      case 'CodeChef':
        return <Award className="w-4 h-4 text-amber-400" />;
      case 'Codeforces':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 sm:pt-32 pb-20 overflow-hidden">
      {/* Ambient background glows matching photo's blushing sapphire tone */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-700/20 via-indigo-600/15 to-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-16 right-10 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Identity */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Greeting & Availability Pill (Sapphire / Cyan Palette) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Assalamu Alaikum Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-sm shadow-blue-500/10">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="font-sans tracking-wide">Assalamu Alaikum</span>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1424] border border-blue-500/20 text-zinc-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <span>{personal.statusBadge}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                I'm{' '}
                <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                  {personal.name}
                </span>
              </h1>
              
              {/* Designation & Badges */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl font-bold text-zinc-200 flex items-center justify-center lg:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {personal.title}
                </p>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-300 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    2★ CodeChef Coder
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-blue-950/50 border border-blue-500/30 text-cyan-300 font-semibold flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    600+ CP Solved
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              {personal.tagline}
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>View Pinned Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-zinc-200 bg-[#0d1424] hover:bg-[#131d35] border border-blue-500/25 hover:border-cyan-400 shadow-md hover:-translate-y-0.5 transition-all group"
                id="hero-resume-btn"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>View &amp; Download Resume</span>
              </button>
            </div>

            {/* Profiles & Socials */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 text-xs text-zinc-400">
              <span className="font-mono text-zinc-400 uppercase tracking-wider text-[11px]">Connect With Me:</span>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={`${social.name} (${social.handle})`}
                    className="p-2.5 rounded-xl bg-[#0d1424] border border-blue-500/20 text-zinc-300 hover:text-white hover:border-cyan-400 hover:scale-105 transition-all shadow-sm"
                  >
                    {renderSocialIcon(social.name)}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Seamlessly Merged Photo (NO harsh box border!) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Blushing Sapphire Spotlight behind photo matching the photo background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[440px] bg-gradient-to-tr from-blue-600/40 via-blue-500/25 to-cyan-400/20 rounded-full blur-[80px] pointer-events-none" />

            {/* Transparent portrait cutout sits directly on the sapphire glow */}
            <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[430px] sm:h-[500px] md:h-[560px] flex items-end justify-center">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="hero-cutout relative z-10 h-full w-[135%] max-w-none object-contain object-bottom transition-transform duration-700 ease-out hover:scale-[1.025]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
