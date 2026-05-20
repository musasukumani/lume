'use client'

import Image from 'next/image'
import { useCartStore } from '@/lib/store/cart'
import type { CartItem as CartItemType } from '@/lib/types'
import { X } from 'lucide-react'

type Props = { item: CartItemType }

export function CartItem({ item }: Props) {
  const removeItem = useCartStore((s) => s.removeItem)
  const updateQuantity = useCartStore((s) => s.updateQuantity)

  return (
    <div className="flex gap-4 py-6 border-b border-white/[0.07]">
      <div className="relative w-24 h-24 overflow-hidden bg-gradient-to-br from-[#1E1208] to-[#2A1A0A] flex-shrink-0 border border-white/[0.07]">
        <Image
          src={item.product.image_url}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-[#C9A84C]/70 uppercase tracking-widest capitalize mb-1 font-light">
              {item.product.category}
            </p>
            <p className="font-serif text-lg font-light text-[#E8E0D0]">{item.product.name}</p>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-white/25 hover:text-[#C9A84C] transition-colors p-1 ml-2"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-white/10">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="px-3 py-1 text-white/40 hover:text-[#C9A84C] transition-colors"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-light text-[#F5F0E8] border-x border-white/10">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="px-3 py-1 text-white/40 hover:text-[#C9A84C] transition-colors"
            >
              +
            </button>
          </div>
          <p className="font-light text-[#E8D5B0]">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}
