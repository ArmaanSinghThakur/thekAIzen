import { industriesData } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Industries() {
  // Matches the Teal-200 from the Customers section above it
  return (
    <section id="industries" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-teal-200 to-indigo-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-teal-950 dark:text-teal-100">Industries We Serve</h2>
          <p className="text-slate-900 dark:text-teal-200/80 max-w-2xl mx-auto mb-12 text-lg font-medium">
            We bring specialized AI solutions to traditional sectors and cutting-edge tech firms alike.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industriesData.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="p-6 h-full rounded-2xl border border-teal-400/50 dark:border-teal-800/30 bg-white/60 dark:bg-teal-950/20 backdrop-blur-md hover:bg-white/90 dark:hover:bg-teal-900/40 text-slate-950 dark:text-slate-200 transition-colors flex items-center justify-center text-center font-bold shadow-md">
                {industry}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}