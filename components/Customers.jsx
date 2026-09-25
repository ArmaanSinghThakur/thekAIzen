import { mockReviews } from '@/data/content'
import ScrollReveal from './ScrollReveal'

export default function Customers() {
  return (
    <section id="customers" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-fuchsia-200 to-teal-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-12 text-center text-slate-950 dark:text-white font-serif drop-shadow-sm">Client Success</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {mockReviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-white/25 dark:bg-black/30 backdrop-blur-2xl p-8 rounded-3xl border border-slate-400/30 dark:border-white/10 shadow-2xl h-full flex flex-col justify-between">
                <p className="text-lg italic mb-6 text-slate-950 font-extrabold leading-relaxed dark:text-slate-100 drop-shadow-sm">"{review.review}"</p>
                <div>
                  <div className="font-black text-indigo-900 dark:text-pink-300 drop-shadow-sm">{review.name}</div>
                  <div className="text-sm text-slate-900 font-extrabold dark:text-slate-300 drop-shadow-sm">{review.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}