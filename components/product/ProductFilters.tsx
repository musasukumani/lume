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
          className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
            active === value
              ? 'bg-[#3D1F0F] text-white border-[#3D1F0F]'
              : 'bg-transparent text-[#8C6B50] border-[#8C6B50]/30 hover:border-[#3D1F0F] hover:text-[#3D1F0F]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
