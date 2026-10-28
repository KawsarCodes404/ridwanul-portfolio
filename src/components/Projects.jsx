import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated Software &amp; Web Projects
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Real projects built with modern stacks (Next.js, TypeScript, React &amp; Tailwind CSS) matching my pinned GitHub repositories.
          </p>
        </div>

        {/* Project Cards Grid (Requirement 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 shadow-xl shadow-black/40"
            >
              {/* Project Image Container (Requirement 9) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-85" />

                {/* Category & Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-zinc-200">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body (Requirement 9) */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed font-sans">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Badges Preview */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.mainTechStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.mainTechStack.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-zinc-900 text-[11px] font-mono text-teal-400">
                      +{project.mainTechStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* View More / Details Button (Requirement 9) */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-md shadow-emerald-600/30 transition-all"
                    id={`view-details-${project.id}`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>View More / Details</span>
                  </button>

                  {/* Direct Live Link Quick Action */}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Preview"
                      className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                      aria-label="Direct live link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {/* Direct GitHub Client Quick Action (Requirement 9: Client Only!) */}
                  {project.clientGithub && (
                    <a
                      href={project.clientGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open GitHub Client Repository"
                      className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                      aria-label="Direct client repository link"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* GitHub profile link callout */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/KawsarCodes404?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-teal-400 transition-all hover:text-white"
          >
            <Github className="w-4 h-4 text-teal-400" />
            <span>Explore all repositories on GitHub (@KawsarCodes404)</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>
        </div>

      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

