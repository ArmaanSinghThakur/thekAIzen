import ScrollReveal from './ScrollReveal'

export default function About() {
  // Matches Hero Sky-200 at the top, transitions to Violet-200 at the bottom
  return (
    <section id="about" className="py-24 px-6 w-full overflow-hidden bg-gradient-to-b from-sky-200 to-violet-200 dark:from-transparent dark:to-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold mb-6 text-sky-950 dark:text-sky-100">About kAIzen</h2>
          <p className="text-lg text-slate-900 dark:text-slate-300 mb-4 font-medium">
            We bridge the gap between complex artificial intelligence and actionable business solutions. kAIzen specializes in developing high-performance web applications integrated with scalable AI models.
          </p>
          <p className="text-lg text-slate-900 dark:text-slate-300 font-medium">
            From deploying multi-agent orchestrations to predictive analytics, we build technology that drives efficiency for B2B and B2C enterprises alike.
          </p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="bg-white/60 dark:bg-slate-900/40 backdrop-blur-lg p-8 rounded-3xl border border-sky-400/50 dark:border-sky-900/30 shadow-xl shadow-sky-900/20">
            <h3 className="text-xl font-semibold mb-4 text-sky-950 dark:text-sky-50">How It Works</h3>
            <ul className="space-y-4 text-slate-900 dark:text-slate-300 font-medium">
              <li className="flex gap-3"><span className="text-sky-700 dark:text-sky-400 font-bold">1.</span> Discovery & Strategy mapping</li>
              <li className="flex gap-3"><span className="text-sky-700 dark:text-sky-400 font-bold">2.</span> Architecture & Model Selection</li>
              <li className="flex gap-3"><span className="text-sky-700 dark:text-sky-400 font-bold">3.</span> Full-Stack Web Integration</li>
              <li className="flex gap-3"><span className="text-sky-700 dark:text-sky-400 font-bold">4.</span> Deployment & Optimization</li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}