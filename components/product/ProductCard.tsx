'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import type { Product } from '@/lib/types'

type Props = {
  product: Product
}

function StarRating() {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#C9A84C" stroke="none">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

export function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  return (
    <div className="group relative bg-white/[0.04] border border-white/[0.07] overflow-hidden flex flex-col cursor-pointer hover:border-white/[0.15] hover:-translate-y-1 transition-all duration-300">
      {/* Stretched link covers entire card */}
      <Link href={`/shop/${product.slug}`} className="absolute inset-0 z-10" aria-label={product.name} />

      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#1E1208] to-[#2A1A0A]">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          quality={80}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 border border-[#C9A84C]/50 text-[#C9A84C] text-xs px-2 py-1 tracking-widest uppercase font-light">
            {product.badge}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-[#C9A84C]/70 uppercase tracking-widest mb-1 capitalize font-light">
          {product.category}
        </p>
        <h3 className="font-serif text-lg font-light text-[#E8E0D0] leading-tight mb-2 group-hover:text-[#F5F0E8] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <StarRating />
          <span className="text-white/25 text-xs">4.9</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/[0.07]">
          <span className="font-light text-[#E8D5B0]">${product.price.toFixed(2)}</span>
          {/* z-20 keeps button above the stretched link */}
          <button
            onClick={() => addItem(product)}
            className="relative z-20 text-xs tracking-widest uppercase border border-[#C9A84C]/40 text-[#C9A84C] px-4 py-2 hover:bg-[#C9A84C]/10 transition-colors cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}
