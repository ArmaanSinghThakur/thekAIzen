import { projectsData } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Projects() {
  // Perfectly matches the Violet-200 from the About section above it
  return (
    <section id="projects" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-violet-200 to-fuchsia-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-violet-950 dark:text-violet-100">Featured Work</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15} className="h-full">
              <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl shadow-lg shadow-violet-900/20 border border-violet-400/50 dark:border-violet-900/30 flex flex-col h-full hover:-translate-y-1 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-violet-950 dark:text-violet-50">{project.title}</h3>
                <p className="text-slate-900 dark:text-slate-300 mb-6 flex-grow font-medium">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-bold bg-violet-200/90 text-violet-950 dark:bg-violet-900/40 dark:text-violet-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-violet-800 dark:text-violet-400 font-bold hover:underline">
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