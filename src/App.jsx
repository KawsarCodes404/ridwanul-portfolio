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

  return (
    <div className="portfolio-shell min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-cyan-200">
      {/* Top Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Assalamu Alaikum greeting, photo, badges & CTAs */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section: Journey, Phitron, Programming Hero, Hobbies & Traits */}
        <About />

        {/* Skills Section: Graphical categorized meters */}
        <Skills />

        {/* Education Section: Phitron completed; Programming Hero Level 1 in progress */}
        <Education />

        {/* Experience Section: 2+ Years Problem Solving, 2★ CodeChef, 600+ Solved */}
        <Experience />

        {/* Projects Section: Pinned GitHub Projects with Details Modal */}
        <Projects />

        {/* Contact Section: verified email and social links */}
        <Contact />
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
