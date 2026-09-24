'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { navigation } from '@/data/content'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Glassmorphism nav bar
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-white/20 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tighter text-violet-600 dark:text-violet-400 drop-shadow-sm">
          kAIzen
        </div>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-violet-500 transition-colors">
              {item.name}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}