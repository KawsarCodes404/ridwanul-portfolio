import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const contactMethods = [
  {
    label: 'Email',
    value: (personal) => personal.email,
    href: (personal) => `mailto:${personal.email}`,
    action: 'Send an email',
    icon: Mail,
    tone: 'email',
  },
  {
    label: 'Phone',
    value: (personal) => personal.phoneDisplay,
    href: (personal) => `tel:${personal.phone}`,
    action: 'Call me',
    icon: Phone,
    tone: 'phone',
  },
  {
    label: 'WhatsApp',
    value: () => 'Message me directly',
    href: (personal) => personal.whatsappUrl,
    action: 'Chat on WhatsApp',
    icon: MessageCircle,
    tone: 'whatsapp',
  },
];

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="contact-section relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[min(90vw,760px)] -translate-x-1/2 rounded-full bg-emerald-500/[0.08] blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading mx-auto mb-12 max-w-3xl text-center">
          <span className="section-kicker"><Mail className="h-3.5 w-3.5" /> GET IN TOUCH</span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s build something useful</h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            Have a role, project, or idea in mind? Choose the way that works best for you.
          </p>
        </div>

        <div className="contact-panel glass-card overflow-hidden rounded-[28px] border border-white/10">
          <div className="grid lg:grid-cols-[1.35fr_.65fr]">
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="contact-icon flex h-11 w-11 items-center justify-center rounded-2xl text-emerald-300"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white">Reach out directly</h3>
                  <p className="mt-0.5 text-xs text-zinc-400">I&apos;ll be glad to hear from you.</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {contactMethods.map(({ label, value, href, action, icon: Icon, tone }) => (
                  <a
                    key={label}
                    href={href(personal)}
                    target={label === 'WhatsApp' ? '_blank' : undefined}
                    rel={label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                    aria-label={`${action}: ${value(personal)}`}
                    className={`contact-method contact-method-${tone} group flex min-h-40 flex-col rounded-2xl border border-white/10 bg-zinc-950/55 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-zinc-900/80 sm:p-5`}
                  >
                    <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"><Icon className="h-[18px] w-[18px]" /></span>
                    <span className="text-xs font-medium text-zinc-400">{label}</span>
                    <span className="mt-1 break-words text-sm font-semibold text-zinc-100">{value(personal)}</span>
                    <span className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold text-emerald-300">{action}<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                  </a>
                ))}
              </div>
            </div>

            <aside className="contact-aside flex flex-col justify-between border-t border-white/10 bg-gradient-to-br from-emerald-950/40 via-zinc-950/70 to-teal-950/30 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">Connect &amp; collaborate</span>
                <h3 className="mt-3 text-2xl font-bold leading-tight text-white">Open to meaningful opportunities.</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">For junior software engineering roles, collaboration, or a conversation about building for the web.</p>
              </div>
              <div className="mt-8">
                <div className="mb-4 flex items-center gap-2 text-xs text-zinc-400"><MapPin className="h-4 w-4 text-emerald-300" />{personal.location}</div>
                <div className="flex flex-wrap gap-2">
                  <a href="https://www.linkedin.com/in/ridwanul-hoque-kawsar" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" className="contact-social inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/70 px-3.5 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400/30 hover:text-emerald-300"><Linkedin className="h-4 w-4" />LinkedIn<ArrowUpRight className="h-3 w-3" /></a>
                  <a href="https://github.com/KawsarCodes404" target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile" className="contact-social inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/70 px-3.5 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-emerald-400/30 hover:text-emerald-300"><Github className="h-4 w-4" />GitHub<ArrowUpRight className="h-3 w-3" /></a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
