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
      <div className="flex items-center border border-[#8C6B50]/30 rounded">
        <button
          onClick={() => setQty(Math.max(1, qty - 1))}
          className="px-3 py-2 text-[#8C6B50] hover:text-[#2D1A0E] transition-colors text-lg leading-none"
        >
          −
        </button>
        <span className="px-4 py-2 font-medium text-[#2D1A0E] min-w-[2rem] text-center">
          {qty}
        </span>
        <button
          onClick={() => setQty(qty + 1)}
          className="px-3 py-2 text-[#8C6B50] hover:text-[#2D1A0E] transition-colors text-lg leading-none"
        >
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        className="flex-1 bg-[#3D1F0F] text-white py-3 px-8 rounded font-medium hover:bg-[#2D1A0E] transition-colors"
      >
        Add to Cart — ${(product.price * qty).toFixed(2)}
      </button>
    </div>
  )
}
