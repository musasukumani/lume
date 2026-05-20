'use client'

import { useCartStore } from '@/lib/store/cart'
import { CartItem } from '@/components/cart/CartItem'
import { CartSummary } from '@/components/cart/CartSummary'
import Link from 'next/link'

export default function CartPage() {
  const items = useCartStore((s) => s.items)

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">Your cart is empty</h1>
        <p className="text-white/40 mb-8 text-sm">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/shop"
          className="inline-block px-8 py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
        >
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-10">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          {items.map((item) => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
