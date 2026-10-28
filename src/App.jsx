import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('[data-scroll-reveal]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-shell min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-emerald-500/30 selection:text-teal-200">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Assalamu Alaikum greeting, photo, badges & CTAs */}
        <div data-scroll-reveal className="scroll-reveal"><Hero onOpenResume={() => setIsResumeOpen(true)} /></div>

        {/* About Me Section: Journey, Phitron, Programming Hero, Hobbies & Traits */}
        <div data-scroll-reveal className="scroll-reveal"><About /></div>

        {/* Skills Section: Graphical categorized meters */}
        <div data-scroll-reveal className="scroll-reveal"><Skills /></div>

        {/* Education Section: Phitron completed; Programming Hero Level 1 in progress */}
        <div data-scroll-reveal className="scroll-reveal"><Education /></div>

        {/* Experience Section: 2+ Years Problem Solving, 2★ CodeChef, 600+ Solved */}
        <div data-scroll-reveal className="scroll-reveal"><Experience /></div>

        {/* Projects Section: Pinned GitHub Projects with Details Modal */}
        <div data-scroll-reveal className="scroll-reveal"><Projects /></div>

        {/* Contact Section: verified email and social links */}
        <div data-scroll-reveal className="scroll-reveal"><Contact /></div>
      </main>

      {/* High-End Polished Footer */}
      <Footer />

      {/* Resume Download / View Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
