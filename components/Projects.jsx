import { projectsData } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-violet-200 to-fuchsia-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-950 dark:text-white font-serif drop-shadow-sm">Featured Work</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15} className="h-full">
              <div className="bg-white/25 dark:bg-black/30 backdrop-blur-2xl p-6 rounded-3xl border border-slate-400/30 dark:border-white/10 shadow-2xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-3 text-slate-950 dark:text-white drop-shadow-sm">{project.title}</h3>
                <p className="text-slate-950 dark:text-slate-100 mb-6 flex-grow font-extrabold leading-relaxed drop-shadow-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-extrabold bg-white/30 dark:bg-black/30 backdrop-blur-md text-indigo-950 dark:text-purple-200 rounded-full border border-slate-400/40 dark:border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-indigo-900 dark:text-purple-300 font-black hover:underline drop-shadow-sm">
                  View Project &rarr;
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}