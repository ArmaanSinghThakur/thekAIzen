import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-sky-200 to-violet-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-slate-950 dark:text-white font-serif drop-shadow-sm">About kAIzen</h2>
          <p className="text-lg text-slate-950 dark:text-slate-100 mb-4 font-extrabold leading-relaxed drop-shadow-sm">
            We bridge the gap between complex artificial intelligence and actionable business solutions. kAIzen specializes in developing high-performance web applications integrated with scalable AI models.
          </p>
          <p className="text-lg text-slate-950 dark:text-slate-100 font-extrabold leading-relaxed drop-shadow-sm">
            From deploying multi-agent orchestrations to predictive analytics, we build technology that drives efficiency for B2B and B2C enterprises alike.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-white/25 dark:bg-black/30 backdrop-blur-2xl p-8 rounded-3xl border border-slate-400/30 dark:border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-slate-950 dark:text-white drop-shadow-sm">How It Works</h3>
            <ul className="space-y-4 text-slate-950 dark:text-slate-100 font-bold drop-shadow-sm">
              <li className="flex gap-3"><span className="text-indigo-700 dark:text-purple-300 font-extrabold">1.</span> Discovery & Strategy mapping</li>
              <li className="flex gap-3"><span className="text-indigo-700 dark:text-purple-300 font-extrabold">2.</span> Architecture & Model Selection</li>
              <li className="flex gap-3"><span className="text-indigo-700 dark:text-purple-300 font-extrabold">3.</span> Full-Stack Web Integration</li>
              <li className="flex gap-3"><span className="text-indigo-700 dark:text-purple-300 font-extrabold">4.</span> Deployment & Optimization</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}