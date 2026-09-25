import { industriesData } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-teal-200 to-indigo-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-slate-950 dark:text-white font-serif drop-shadow-sm">Industries We Serve</h2>
          <p className="text-slate-950 dark:text-slate-100 max-w-2xl mx-auto mb-12 text-lg font-extrabold drop-shadow-sm">
            We bring specialized AI solutions to traditional sectors and cutting-edge tech firms alike.
          </p>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industriesData.map((industry, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="p-6 h-full rounded-2xl bg-white/25 dark:bg-black/30 backdrop-blur-2xl border border-slate-400/30 dark:border-white/10 hover:-translate-y-1 transition-transform flex items-center justify-center text-center font-black text-slate-950 dark:text-white shadow-2xl drop-shadow-sm">
                {industry}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}