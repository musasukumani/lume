'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

function SignupForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get('redirect') ?? '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push(redirect)
    router.refresh()
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-white/[0.04] border border-white/[0.07] p-8">
        <div className="text-center mb-8">
          <p className="font-serif text-3xl tracking-widest text-[#C9A84C]">Lumé</p>
          <p className="text-xs text-white/40 mt-2 tracking-widest uppercase font-light">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-light text-white/40 tracking-widest uppercase mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border border-white/10 bg-white/[0.04] text-[#F5F0E8] placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-light text-white/40 tracking-widest uppercase mb-2">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border border-white/10 bg-white/[0.04] text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]/50 text-sm"
              placeholder="Min. 6 characters"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm bg-red-950/30 border border-red-900/30 px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity disabled:opacity-40"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-xs text-white/30 mt-6 tracking-wider">
          Already have an account?{' '}
          <Link
            href={`/login${redirect !== '/' ? `?redirect=${redirect}` : ''}`}
            className="text-[#C9A84C] hover:text-[#E8D5B0] transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <Suspense>
      <SignupForm />
    </Suspense>
  )
}
