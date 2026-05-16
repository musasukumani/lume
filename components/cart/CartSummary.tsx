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
    <div className="bg-[#FDFAF6] rounded-lg border border-[#8C6B50]/20 p-6 sticky top-24">
      <h2 className="font-serif text-2xl text-[#2D1A0E] mb-6">Order Summary</h2>

      <div className="space-y-3 text-sm mb-6">
        <div className="flex justify-between text-[#8C6B50]">
          <span>Subtotal ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-[#8C6B50]">
          <span>Shipping</span>
          <span className="text-green-600 font-medium">Free</span>
        </div>
        <div className="border-t border-[#8C6B50]/20 pt-3 flex justify-between font-medium text-[#2D1A0E] text-base">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={items.length === 0}
        className="w-full bg-[#3D1F0F] text-white py-3 rounded font-medium hover:bg-[#2D1A0E] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Proceed to Checkout
      </button>

      <Link
        href="/shop"
        className="block text-center text-sm text-[#8C6B50] hover:text-[#2D1A0E] transition-colors mt-4 underline underline-offset-4"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
