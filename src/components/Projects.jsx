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
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Curated Web & Software Projects
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A showcase of modern web platforms, interactive tools, and problem-solving systems built with clean code and high performance.
          </p>
        </div>

        {/* Project Cards Grid (Requirement 9) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 shadow-xl shadow-black/30"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent opacity-80" />

                {/* Category & Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-zinc-300">
                    {project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-indigo-600/90 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
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
                    <span className="px-2 py-1 rounded-md bg-zinc-900 text-[11px] font-mono text-indigo-400">
                      +{project.mainTechStack.length - 3} more
                    </span>
                  )}
                </div>

                {/* View More / Details Button (Rubric Requirement 9) */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/25 transition-all group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600"
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

                  {/* Direct GitHub Client Quick Action */}
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 hover:border-zinc-500 transition-all hover:text-white"
          >
            <Github className="w-4 h-4 text-indigo-400" />
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
