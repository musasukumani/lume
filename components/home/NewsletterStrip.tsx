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
      <h2 className="font-serif text-3xl text-[#2D1A0E] mb-3">Stay Updated, Stay Radiant</h2>
      <p className="text-[#8C6B50] mb-8 text-sm">Get early access to new launches and exclusive offers.</p>

      {submitted ? (
        <p className="text-[#3D1F0F] font-medium">You&apos;re on the list! ✓</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 border border-[#8C6B50]/30 rounded bg-[#FDFAF6] text-[#2D1A0E] placeholder:text-[#8C6B50]/60 focus:outline-none focus:ring-1 focus:ring-[#3D1F0F]"
          />
          <button
            type="submit"
            className="bg-[#3D1F0F] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#2D1A0E] transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  )
}
