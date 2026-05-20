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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] mb-4 font-light">Newsletter</p>
      <h2 className="font-serif text-3xl font-light text-[#F5F0E8] mb-3">Stay Updated, Stay Radiant</h2>
      <p className="text-white/40 mb-8 text-sm">Get early access to new launches and exclusive offers.</p>

      {submitted ? (
        <p className="text-[#C9A84C] font-light tracking-widest">You&apos;re on the list ✓</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border border-white/10 bg-white/[0.04] text-[#F5F0E8] placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 text-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#C9A84C] to-[#A8883A] text-[#0D0D0D] px-6 py-2 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
