import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Facebook, Heart, Award, Terminal, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060609] border-t border-white/10 pt-20 pb-12 overflow-hidden text-zinc-300">
      {/* Background ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/10">

          {/* Brand & Bio Column (Spans 5 cols) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-[#181824] to-[#0c0d14] border border-white/20 flex items-center justify-center shadow-lg">
                  <span className="font-mono font-black text-xs tracking-tighter bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                    &lt;RK/&gt;
                  </span>
                </div>
              </div>
              <div>
                <span className="font-extrabold text-lg text-white tracking-tight">
                  {personal.name}
                </span>
                <p className="text-[10px] font-mono text-cyan-400">
                  {personal.title}
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm mx-auto md:mx-0 leading-relaxed font-sans">
              Autodidact developer with 2+ years of problem-solving experience, 600+ solved algorithmic challenges, and a 2★ ranking on CodeChef. Focused on modern full-stack web engineering.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1 text-[11px] font-mono text-zinc-400">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 flex items-center gap-1.5 text-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                2★ CodeChef
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 flex items-center gap-1.5 text-cyan-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                600+ Solved
              </span>
            </div>
          </div>

          {/* Quick Links Column (Spans 3 cols) */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">
              Quick Navigation
            </p>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Direct Channels (Spans 4 cols) */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-200 font-mono">
              Connect &amp; Collaborate
            </p>

            <p className="text-xs text-zinc-400">
              Available for full-time roles, contracts, and software engineering opportunities.
            </p>

            {/* Social icon buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-cyan-400 hover:scale-105 transition-all shadow-sm"
                >
                  {social.name === 'GitHub' && <Github className="w-4 h-4" />}
                  {social.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {social.name === 'Twitter / X' && <Twitter className="w-4 h-4" />}
                  {social.name === 'Facebook' && <Facebook className="w-4 h-4" />}
                  {social.name === 'CodeChef' && <Award className="w-4 h-4 text-amber-400" />}
                  {social.name === 'Codeforces' && <Terminal className="w-4 h-4 text-blue-400" />}
                </a>
              ))}
            </div>

            {/* Back to top CTA */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-white/10 hover:border-cyan-400 hover:text-white transition-all shadow-sm group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with React, Vite &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
