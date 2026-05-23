'use client'

import { useState } from 'react'

export function NewsletterStrip() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(160deg, #1A0F05 0%, #0D0D0D 60%)' }}>
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 110%, rgba(201,168,76,0.08) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-xl mx-auto text-center">
        {/* Decorative divider */}
        <div className="flex items-center gap-4 justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A84C]/30" />
          <svg width="8" height="8" viewBox="0 0 8 8" fill="#C9A84C" opacity="0.45">
            <polygon points="4,0 8,4 4,8 0,4" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A84C]/30" />
        </div>

        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4 font-light">Newsletter</p>
        <h2 className="font-serif text-4xl font-light text-[#F5F0E8] mb-3">Stay Updated, Stay Radiant</h2>
        <p className="text-white/40 mb-8 text-sm">Early access to new launches and exclusive offers.</p>

        {submitted ? (
          <p className="text-[#C9A84C] font-light tracking-widest font-serif italic text-lg">You&apos;re on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-white/10 bg-white/[0.04] text-[#F5F0E8] placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 text-sm"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#C9A84C] to-[#A8883A] text-[#0D0D0D] px-8 py-3 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
