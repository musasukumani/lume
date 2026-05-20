'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import type { Product } from '@/lib/types'

type Props = { product: Product }

export function AddToCart({ product }: Props) {
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)

  function handleAdd() {
    for (let i = 0; i < qty; i++) addItem(product)
  }

  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="flex items-center border border-white/10">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="px-3 py-2 text-white/40 hover:text-white/70 transition-colors text-lg leading-none"
        >
          −
        </button>
        <span className="px-4 py-2 font-light text-[#F5F0E8] min-w-[2rem] text-center border-x border-white/10">
          {qty}
        </span>
        <button
          onClick={() => setQty(qty + 1)}
          className="px-3 py-2 text-white/40 hover:text-white/70 transition-colors text-lg leading-none"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        className="flex-1 bg-gradient-to-r from-[#C9A84C] to-[#A8883A] text-[#0D0D0D] py-3 px-8 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity"
      >
        Add to Cart — ${(product.price * qty).toFixed(2)}
      </button>
    </div>
  )
}
