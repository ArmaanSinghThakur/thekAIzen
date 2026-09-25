'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Customers', href: '#customers' },
    { name: 'Industries', href: '#industries' },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/20 dark:bg-black/20 backdrop-blur-xl border-b border-slate-400/20 dark:border-white/10 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        
        {/* Brand Logo */}
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-slate-950 dark:text-white drop-shadow-sm">
          kAIzen
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-slate-900 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors drop-shadow-sm"
            >
              {link.name}
            </a>
          ))}

          {/* Theme Toggle Button (Desktop) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2.5 rounded-full bg-white/25 dark:bg-black/30 backdrop-blur-md border border-slate-400/30 dark:border-white/20 text-slate-950 dark:text-white hover:scale-105 transition-all shadow-md"
            >
              {resolvedTheme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" /><path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          )}

          {/* CTA Button */}
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black text-sm hover:scale-105 transition-transform shadow-lg"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Actions (Theme Toggle & 3-Dot Button) */}
        <div className="flex items-center gap-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-full bg-white/25 dark:bg-black/30 backdrop-blur-md border border-slate-400/30 dark:border-white/20 text-slate-950 dark:text-white"
            >
              {resolvedTheme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" /><path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
          )}

          <button 
            className="p-2 text-slate-950 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Framer Motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-0 w-full md:hidden"
          >
            {/* Solid Translucent Frosted Glass (Retains opacity and blur during scroll) */}
            <div className="mx-4 p-6 rounded-3xl bg-white/85 dark:bg-slate-950/85 backdrop-blur-2xl border border-slate-400/30 dark:border-white/15 shadow-2xl flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black text-slate-950 dark:text-white border-b border-slate-400/20 dark:border-white/10 pb-3"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center w-full py-4 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}