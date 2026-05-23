'use client'

import { useState } from 'react'

const topics = ['General Enquiry', 'Order Help', 'Returns & Exchanges', 'Product Question', 'Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3 border border-white/10 bg-white/[0.04] text-[#F5F0E8] placeholder:text-white/25 focus:outline-none focus:border-[#C9A84C]/50 text-sm transition-colors'

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3 font-light">Support</p>
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">Contact Us</h1>
      <p className="text-white/40 text-sm mb-12 leading-relaxed max-w-xl">
        We typically respond within 24 hours on business days. For urgent order queries
        please include your order number.
      </p>

      {/* Contact details */}
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        <div className="border border-white/[0.07] bg-white/[0.03] px-6 py-5 flex flex-col gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest font-light mt-1">Email</p>
          <a href="mailto:hello@lumebeauty.com" className="text-[#E8D5B0] text-sm font-light hover:text-white transition-colors">
            hello@lumebeauty.com
          </a>
        </div>

        <div className="border border-white/[0.07] bg-white/[0.03] px-6 py-5 flex flex-col gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest font-light mt-1">Address</p>
          <address className="not-italic text-[#E8D5B0] text-sm font-light leading-relaxed">
            14 Baobab Lane, Westlands<br />
            Nairobi, 00800<br />
            Kenya
          </address>
        </div>

        <div className="border border-white/[0.07] bg-white/[0.03] px-6 py-5 flex flex-col gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest font-light mt-1">Hours</p>
          <p className="text-[#E8D5B0] text-sm font-light leading-relaxed">
            Mon – Fri, 9 am – 5 pm EAT
          </p>
        </div>
      </div>

      <div className="max-w-2xl">

      {submitted ? (
        <div className="border border-[#C9A84C]/30 bg-[#C9A84C]/[0.05] p-8 text-center">
          <p className="text-[#C9A84C] font-serif text-2xl font-light mb-3">Message received ✓</p>
          <p className="text-white/40 text-sm">
            Thank you, {form.name}. We will be in touch at{' '}
            <span className="text-white/60">{form.email}</span> within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs text-white/40 tracking-widest uppercase mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-white/40 tracking-widest uppercase mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-white/40 tracking-widest uppercase mb-2">
              Topic
            </label>
            <select
              name="topic"
              value={form.topic}
              onChange={handleChange}
              className={inputClass + ' cursor-pointer'}
            >
              {topics.map((t) => (
                <option key={t} value={t} className="bg-[#0D0D0D]">
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-white/40 tracking-widest uppercase mb-2">
              Message
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help?"
              rows={5}
              className={inputClass + ' resize-none'}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-10 py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
          >
            Send Message
          </button>
        </form>
      )}
      </div>
    </div>
  )
}
