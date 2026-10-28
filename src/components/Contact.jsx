import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-heading text-center max-w-3xl mx-auto mb-12">
          <span className="section-kicker"><Mail className="w-3.5 h-3.5" /> GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let&apos;s connect</h2>
          <p className="mt-3 text-base text-zinc-400">For opportunities, project conversations, or a friendly hello, email is the best way to reach me.</p>
        </div>
        <div className="contact-card glass-card rounded-3xl p-6 sm:p-10 border border-white/10 text-center">
          <div className="contact-icon w-14 h-14 rounded-2xl mx-auto flex items-center justify-center"><Mail className="w-6 h-6" /></div>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-400 mt-5">Email</p>
          <a href={`mailto:${personal.email}`} className="inline-block mt-1 text-lg sm:text-2xl font-semibold text-white hover:text-emerald-300 transition-colors break-all">{personal.email}</a>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-700 to-teal-600"><Mail className="w-4 h-4" />Write an email <ArrowUpRight className="w-4 h-4" /></a>
            <a href="https://www.linkedin.com/in/ridwanul-hoque-kawsar" target="_blank" rel="noopener noreferrer" className="contact-social inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900/70 border border-white/10"><Linkedin className="w-4 h-4" />LinkedIn <ArrowUpRight className="w-4 h-4" /></a>
            <a href="https://github.com/KawsarCodes404" target="_blank" rel="noopener noreferrer" className="contact-social inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900/70 border border-white/10"><Github className="w-4 h-4" />GitHub <ArrowUpRight className="w-4 h-4" /></a>
          </div>
          <p className="mt-7 inline-flex items-center gap-2 text-xs text-zinc-500"><MapPin className="w-3.5 h-3.5" />{personal.location}</p>
        </div>
      </div>
    </section>
  );
}
