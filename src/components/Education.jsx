import React from 'react';
import { Award, BookOpen, CalendarDays, Check, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const certificates = [
  {
    title: '2★ CodeChef Coder Rank',
    type: 'Certificate of Achievement',
    description: 'Awarded by Phitron for achieving a 2-star Coder Rank on CodeChef as part of Phitron Batch 7.',
    image: '/phitron-codechef-2star.jpg',
    alt: 'Phitron certificate of achievement for 2-star CodeChef Coder Rank',
    date: 'Phitron Batch 7',
  },
  {
    title: 'Data Structure and Algorithm',
    type: 'Certificate of Recognition',
    description: 'Recognition from Phitron for outstanding results in Data Structure and Algorithm.',
    image: '/phitron-dsa-recognition.jpg',
    alt: 'Phitron certificate of recognition for Data Structure and Algorithm',
    date: '2026',
  },
];

export default function Education() {
  const { education } = portfolioData;
  const phitron = education.find((item) => item.institution === 'Phitron');
  const current = education.find((item) => item.institution === 'Programming Hero');

  return (
    <section id="education" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-blue-500/[0.055] blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/[0.07] px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-sky-300">
            <GraduationCap className="h-4 w-4" /> EDUCATION & RECOGNITION
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Learning, backed by achievement</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">My ongoing web development studies and verified achievements from Phitron.</p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {current && <article className="rounded-3xl border border-sky-300/15 bg-gradient-to-br from-blue-500/[0.11] via-slate-950/70 to-slate-950/90 p-6 shadow-[0_20px_70px_-45px_rgba(37,99,235,.45)] sm:p-7">
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/10 text-sky-300"><BookOpen className="h-5 w-5" /></span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 text-[11px] font-semibold text-cyan-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" /> In progress</span>
              </div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-sky-300">{current.institution}</p>
              <h3 className="text-xl font-bold leading-snug text-white">{current.degree}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{current.description}</p>
              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.08] pt-4 text-xs text-slate-400"><CalendarDays className="h-4 w-4 text-sky-300" />{current.duration}</div>
            </article>}

            {phitron && <article className="rounded-3xl border border-white/[0.08] bg-slate-950/60 p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-indigo-300/15 bg-indigo-300/[0.08] text-indigo-200"><Award className="h-5 w-5" /></span>
                <span className="rounded-full border border-white/[0.08] px-3 py-1.5 text-[11px] font-semibold text-slate-400">Completed</span>
              </div>
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-indigo-200">{phitron.institution}</p>
              <h3 className="text-xl font-bold leading-snug text-white">{phitron.degree}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{phitron.description}</p>
              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">Skills recognized</p>
                <div className="flex flex-wrap gap-2">{['C++', 'Problem solving', 'Competitive programming', 'Data structures', 'Algorithms'].map((skill) => <span key={skill} className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-[11px] text-slate-300"><Check className="h-3 w-3 text-sky-300" />{skill}</span>)}</div>
              </div>
            </article>}
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-slate-950/45 p-5 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/[0.08] text-amber-200"><Sparkles className="h-5 w-5" /></span>
              <div><h3 className="font-bold text-white">Certificates & recognition</h3><p className="mt-0.5 text-xs text-slate-500">Issued by Phitron</p></div>
              <span className="ml-auto rounded-full border border-white/[0.07] px-2.5 py-1 font-mono text-[11px] text-slate-500">02</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {certificates.map((certificate) => <article key={certificate.title} className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080d17] transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/25">
                <a href={certificate.image} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate image`} className="relative block overflow-hidden bg-white/[0.03] p-2">
                  <img src={certificate.image} alt={certificate.alt} loading="lazy" className="aspect-[1.42/1] w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
                  <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-slate-950/75 text-white backdrop-blur"><ExternalLink className="h-3.5 w-3.5" /></span>
                </a>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-sky-300">{certificate.type} · {certificate.date}</p>
                  <h4 className="mt-2 text-sm font-bold leading-5 text-white">{certificate.title}</h4>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{certificate.description}</p>
                </div>
              </article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
