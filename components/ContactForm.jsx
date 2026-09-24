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
        <h3 className="text-3xl md:text-4xl font-editorial italic text-indigo-950 dark:text-indigo-100">
          Let's shape the future of your enterprise.
        </h3>
        <p className="text-slate-800 dark:text-slate-300 font-medium leading-relaxed">
          Whether you're scaling a B2B product or launching an intelligent B2C application, our engineering team is ready to bring your vision to life with bleeding-edge AI architecture.
        </p>
        
        <div className="space-y-3 pt-4 border-t border-indigo-900/10 dark:border-indigo-100/10">
          <div className="flex items-center gap-3 text-sm font-bold text-indigo-950 dark:text-indigo-200">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Direct Email: contact@thekaizen.tech
          </div>
          <div className="text-sm text-slate-700 dark:text-slate-400 font-medium">
            Response time: Under 24 business hours.
          </div>
        </div>
      </div>

      {/* Right Column: Aesthetic Glassmorphic Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/60 dark:border-slate-800 shadow-2xl shadow-indigo-900/10">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Your Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="w-full p-4 rounded-xl bg-white/80 border border-indigo-100 dark:bg-slate-950/60 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Email Address</label>
          <input 
            type="email" 
            placeholder="john@company.com" 
            className="w-full p-4 rounded-xl bg-white/80 border border-indigo-100 dark:bg-slate-950/60 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required 
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400 mb-2">Project Details</label>
          <textarea 
            placeholder="Tell us about your AI integration goals..." 
            className="w-full p-4 rounded-xl bg-white/80 border border-indigo-100 dark:bg-slate-950/60 dark:border-slate-800 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-900 dark:text-white"
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required 
          />
        </div>

        <button type="submit" className="w-full py-4 mt-2 bg-slate-900 dark:bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-600 dark:hover:bg-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
          Send Message via Email &rarr;
        </button>
      </form>
    </div>
  )
}