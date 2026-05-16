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
    <div className="flex gap-4 py-6 border-b border-[#8C6B50]/20">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-[#FDFAF6] flex-shrink-0 border border-[#8C6B50]/20">
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
            <p className="text-xs text-[#8C6B50] uppercase tracking-wider capitalize mb-1">
              {item.product.category}
            </p>
            <p className="font-serif text-lg text-[#2D1A0E]">{item.product.name}</p>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-[#8C6B50] hover:text-[#2D1A0E] transition-colors p-1 ml-2"
            aria-label="Remove item"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-[#8C6B50]/30 rounded">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              className="px-3 py-1 text-[#8C6B50] hover:text-[#2D1A0E]"
            >
              −
            </button>
            <span className="px-3 py-1 text-sm font-medium text-[#2D1A0E]">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              className="px-3 py-1 text-[#8C6B50] hover:text-[#2D1A0E]"
            >
              +
            </button>
          </div>
          <p className="font-medium text-[#2D1A0E]">
            ${(item.product.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  )
}
