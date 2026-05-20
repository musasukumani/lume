'use client'

import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function CartSummary() {
  const total = useCartStore((s) => s.total)
  const items = useCartStore((s) => s.items)
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data }) => {
      setIsLoggedIn(!!data.user)
    })
  }, [])

  function handleCheckout() {
    if (isLoggedIn) {
      router.push('/checkout')
    } else {
      router.push('/login?redirect=/checkout')
    }
  }

  const itemCount = items.reduce((s, i) => s + i.quantity, 0)

  return (
    <div className="bg-white/[0.04] border border-white/[0.07] p-6 sticky top-24">
      <h2 className="font-serif text-2xl font-light text-[#F5F0E8] mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between text-white/40">
          <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-white/40">
          <span>Shipping</span>
          <span className="text-[#C9A84C] font-light">Free</span>
        </div>
        <div className="border-t border-white/[0.07] pt-3 flex justify-between font-light text-[#F5F0E8] text-base">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={items.length === 0}
        className="w-full bg-gradient-to-r from-[#C9A84C] to-[#A8883A] text-[#0D0D0D] py-3 text-xs tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      <Link
        href="/shop"
        className="block text-center text-xs text-white/30 hover:text-white/60 transition-colors mt-4 tracking-widest uppercase"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
