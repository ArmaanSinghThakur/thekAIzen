import HeroSphere from '@/components/HeroSphere'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Customers from '@/components/Customers'
import Industries from '@/components/Industries'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full relative z-10">
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSphere />
        
        {/* Overlay Layout for Hero Text */}
        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 pointer-events-none w-full max-w-[100vw] overflow-hidden">
          
          {/* Left Side: Matching 80% Transparent Glass */}
          <ScrollReveal delay={0.2} className="w-full md:w-[30%] text-center md:text-left mt-32 md:mt-0 pointer-events-auto">
            <div className="p-8 rounded-3xl bg-white/25 dark:bg-black/30 backdrop-blur-2xl border border-slate-400/30 dark:border-white/10 shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-serif italic text-slate-950 dark:text-white mb-3 leading-snug drop-shadow-sm">
                Architecting <br className="hidden md:block" /> Intelligence.
              </h3>
              <p className="text-sm md:text-base text-slate-950 dark:text-slate-100 font-extrabold leading-relaxed drop-shadow-sm">
                Transforming complex enterprise workflows into autonomous, scalable AI ecosystems designed to drive absolute B2B operational dominance.
              </p>
            </div>
          </ScrollReveal>

          {/* Center: Absolute Locked Brand Name */}
          <ScrollReveal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none text-center">
            <h1 className="text-6xl md:text-[7rem] font-extrabold tracking-tighter text-slate-950 dark:text-white drop-shadow-[0_10px_30px_rgba(255,255,255,1)] dark:drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
              kAIzen
            </h1>
          </ScrollReveal>

          {/* Right Side: Matching 80% Transparent Glass */}
          <ScrollReveal delay={0.4} className="w-full md:w-[30%] text-center md:text-right mb-32 md:mb-0 pointer-events-auto">
            <div className="p-8 rounded-3xl bg-white/25 dark:bg-black/30 backdrop-blur-2xl border border-slate-400/30 dark:border-white/10 shadow-2xl transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-serif italic text-slate-950 dark:text-white mb-3 leading-snug drop-shadow-sm">
                Engineering <br className="hidden md:block" /> the Future.
              </h3>
              <p className="text-sm md:text-base text-slate-950 dark:text-slate-100 font-extrabold leading-relaxed drop-shadow-sm">
                Delivering high-performance, full-stack web applications seamlessly infused with powerful, real-time predictive machine learning models.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </section>
      
      <About />
      <Projects />
      <Customers />
      <Industries />
      
      <section id="contact" className="py-28 px-6 w-full overflow-hidden bg-gradient-to-b from-indigo-200 via-sky-100 to-sky-200 dark:bg-none transition-colors duration-500">
        <ScrollReveal>
          <ContactForm />
        </ScrollReveal>
      </section>
    </main>
  )
}