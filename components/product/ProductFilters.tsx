'use client'

import { useRouter, useSearchParams } from 'next/navigation'

const CATEGORIES = [
  { value: 'all', label: 'All' },
  { value: 'cleanser', label: 'Cleansers' },
  { value: 'serum', label: 'Serums' },
  { value: 'moisturizer', label: 'Moisturizers' },
]

export function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const active = searchParams.get('category') ?? 'all'

  function setCategory(value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value === 'all') {
      params.delete('category')
    } else {
      params.set('category', value)
    }
    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {CATEGORIES.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setCategory(value)}
          className={`px-5 py-2 text-xs tracking-widest uppercase font-light transition-colors border ${
            active === value
              ? 'bg-gradient-to-r from-[#C9A84C] to-[#A8883A] text-[#0D0D0D] border-transparent font-medium'
              : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white/70'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
