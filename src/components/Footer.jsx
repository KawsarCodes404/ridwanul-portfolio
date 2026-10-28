import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Facebook, Heart, Code2 } from 'lucide-react';
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
    <footer className="relative bg-[#07070a] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-[#0d0d12] rounded-[7px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs text-indigo-400">RK</span>
                </div>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personal.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm mx-auto md:mx-0 leading-relaxed">
              Crafting high-performance web applications, clean responsive interfaces, and solving complex algorithmic challenges.
            </p>
          </div>

          {/* Quick Section Links */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Badges & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end gap-3">
            <a
              href="https://github.com/KawsarCodes404"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ridwanul-hoque-kawsar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
