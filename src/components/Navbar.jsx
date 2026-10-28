import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const isDark = theme !== 'light';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'education', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 130;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Brand Logo - High-End Polished RK Monogram */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-xl p-1"
          >
            {/* RK Monogram Badge */}
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-teal-600 rounded-xl blur-[3px] opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-b from-[#14141f] to-[#0a0a0f] border border-white/15 flex items-center justify-center shadow-inner">
                <span className="font-mono font-black text-sm tracking-tighter bg-gradient-to-r from-emerald-300 via-white to-teal-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  &lt;RK/&gt;
                </span>
              </div>
            </div>

            {/* Developer Identity Text */}
            <div className="flex min-w-0 flex-col">
              <span title="Ridwanul Hoque Kawsar" className="max-w-[138px] sm:max-w-none overflow-hidden text-ellipsis font-extrabold text-white tracking-tight text-[11px] sm:text-sm md:text-base leading-tight group-hover:text-teal-400 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                Ridwanul Hoque Kawsar
              </span>
              <span className="hidden sm:block text-[10px] text-zinc-400 tracking-wide -mt-0.5">
                Full-Stack Web Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/70 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden md:flex items-center gap-2.5">
            <button type="button" onClick={onToggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} className="theme-toggle p-2 rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-300 hover:text-emerald-300">{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}</button>
            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 hover:border-emerald-500/50 shadow-sm transition-all hover:text-white group"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400 group-hover:text-teal-400 transition-colors" />
              <span>Resume</span>
            </button>

            {/* Let's Talk CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <button type="button" onClick={onToggleTheme} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} className="theme-toggle max-[380px]:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300">{isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}</button>
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-semibold text-zinc-200 flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                      : 'text-zinc-300 hover:bg-zinc-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <div className="pt-3 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md"
            >
              Contact Me Directly
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

