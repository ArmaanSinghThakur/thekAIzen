'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@thekaizen.tech?subject=Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center text-left max-w-5xl mx-auto">
      {/* Left Column: Brand Statement & Details */}
      <div className="space-y-6">
        <h3 className="text-3xl md:text-4xl font-serif italic text-slate-950 dark:text-white drop-shadow-sm">
          Let's shape the future of your enterprise.
        </h3>
        <p className="text-slate-950 dark:text-slate-100 font-extrabold leading-relaxed drop-shadow-sm">
          Whether you're scaling a B2B product or launching an intelligent B2C application, our engineering team is ready to bring your vision to life with bleeding-edge AI architecture.
        </p>
        
        <div className="space-y-3 pt-4 border-t border-slate-400/30 dark:border-white/10">
          <div className="flex items-center gap-3 text-sm font-black text-slate-950 dark:text-white drop-shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-purple-400 animate-pulse"></span>
            Direct Email: contact@thekaizen.tech
          </div>
          <div className="text-sm text-slate-900 dark:text-slate-200 font-extrabold drop-shadow-sm">
            Response time: Under 24 business hours.
          </div>
        </div>
      </div>

      {/* Right Column: Matching 80% Transparent Glass Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 sm:p-8 rounded-3xl bg-white/25 dark:bg-black/30 backdrop-blur-2xl border border-slate-400/30 dark:border-white/10 shadow-2xl">
        
        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-950 dark:text-slate-100 mb-2 drop-shadow-md">Your Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full p-4 rounded-xl bg-white/15 dark:bg-black/20 backdrop-blur-md border border-slate-400/50 dark:border-white/20 focus:outline-none focus:border-indigo-600 dark:focus:border-purple-400 transition-all font-bold text-slate-950 dark:text-white placeholder-slate-700 dark:placeholder-slate-300 shadow-inner"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-950 dark:text-slate-100 mb-2 drop-shadow-md">Email Address</label>
          <input 
            type="email" 
            placeholder="john@company.com" 
            className="w-full p-4 rounded-xl bg-white/15 dark:bg-black/20 backdrop-blur-md border border-slate-400/50 dark:border-white/20 focus:outline-none focus:border-indigo-600 dark:focus:border-purple-400 transition-all font-bold text-slate-950 dark:text-white placeholder-slate-700 dark:placeholder-slate-300 shadow-inner"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-black uppercase tracking-wider text-slate-950 dark:text-slate-100 mb-2 drop-shadow-md">Project Details</label>
          <textarea 
            placeholder="Tell us about your AI integration goals..." 
            className="w-full p-4 rounded-xl bg-white/15 dark:bg-black/20 backdrop-blur-md border border-slate-400/50 dark:border-white/20 min-h-[120px] focus:outline-none focus:border-indigo-600 dark:focus:border-purple-400 transition-all font-bold text-slate-950 dark:text-white placeholder-slate-700 dark:placeholder-slate-300 shadow-inner"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required 
          />
        </div>

        <button type="submit" className="w-full py-4 mt-2 bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-black rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-xl hover:-translate-y-0.5">
          Send Message via Email &rarr;
        </button>
      </form>
    </div>
  )
}