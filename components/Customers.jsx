import { mockReviews } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Customers() {
  // Matches the Fuchsia-200 from the Projects section above it
  return (
    <section id="customers" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-fuchsia-200 to-teal-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-fuchsia-950 dark:text-fuchsia-100">Client Success</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="p-8 rounded-3xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-fuchsia-400/50 dark:border-fuchsia-900/30 h-full flex flex-col justify-between shadow-lg shadow-fuchsia-900/20">
                <p className="text-lg italic mb-6 text-slate-900 font-medium dark:text-slate-200">"{review.review}"</p>
                <div>
                  <div className="font-bold text-fuchsia-800 dark:text-fuchsia-400">{review.name}</div>
                  <div className="text-sm text-slate-700 font-medium dark:text-slate-400">{review.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}