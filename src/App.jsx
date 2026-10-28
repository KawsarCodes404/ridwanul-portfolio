import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with designation, intro, photo, resume CTA, and socials */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me Section with programming journey, work passions, hobbies, stats */}
        <About />

        {/* Skills Section categorized graphically (Frontend, Backend, Tools) */}
        <Skills />

        {/* Education Section detailing higher education above HSC */}
        <Education />

        {/* Experience Section with career milestones & problem-solving leadership */}
        <Experience />

        {/* Projects Section with 3+ projects, cards, and deep detail modals */}
        <Projects />

        {/* Contact Section with email, phone, whatsapp, and interactive form */}
        <Contact />
      </main>

      {/* Elegant Footer */}
      <Footer />

      {/* Resume Download / View Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
