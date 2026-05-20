'use client'

import { useState } from 'react'
import { useCartStore } from '@/lib/store/cart'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import type { ShippingFormData } from '@/lib/types'

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items)
  const total = useCartStore((s) => s.total)
  const clearCart = useCartStore((s) => s.clearCart)
  const router = useRouter()

  const [form, setForm] = useState<ShippingFormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    postal_code: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (items.length === 0) {
      router.push('/shop')
      return
    }

    setLoading(true)
    setError('')

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        shipping: form,
        items: items.map((i) => ({
          product_id: i.product.id,
          quantity: i.quantity,
          price: i.product.price,
        })),
        total,
      }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error ?? 'Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    clearCart()
    router.push('/checkout/success')
  }

  const fields: { label: string; name: keyof ShippingFormData; type: string; placeholder: string }[] = [
    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Jane Doe' },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'jane@example.com' },
    { label: 'Address', name: 'address', type: 'text', placeholder: '123 Main Street' },
    { label: 'City', name: 'city', type: 'text', placeholder: 'Cape Town' },
    { label: 'Postal Code', name: 'postal_code', type: 'text', placeholder: '8001' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-serif text-2xl font-light text-[#F5F0E8] mb-2">Shipping Details</h2>

          {fields.map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-xs font-light text-white/40 tracking-widest uppercase mb-2">{label}</label>
              <input
                type={type}
                name={name}
                required
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-3 py-3 border border-white/10 bg-white/[0.04] text-[#F5F0E8] placeholder:text-white/20 focus:outline-none focus:border-[#C9A84C]/50 text-sm"
              />
            </div>
          ))}

          {error && (
            <p className="text-red-400 text-sm bg-red-950/30 border border-red-900/30 px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || items.length === 0}
            className="w-full py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity disabled:opacity-40 mt-4"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
          >
            {loading ? 'Placing Order...' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-white/[0.04] border border-white/[0.07] p-6 h-fit">
          <h2 className="font-serif text-2xl font-light text-[#F5F0E8] mb-6">Your Order</h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3 items-center">
                <div
                  className="relative w-14 h-14 border border-white/[0.07] overflow-hidden flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1E1208, #2A1A0A)' }}
                >
                  <Image
                    src={item.product.image_url}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-light text-[#E8E0D0] truncate">{item.product.name}</p>
                  <p className="text-xs text-white/30">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-light text-[#E8D5B0]">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.07] pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-white/40">
              <span>Shipping</span>
              <span className="text-[#C9A84C] font-light">Free</span>
            </div>
            <div className="flex justify-between font-light text-[#F5F0E8] text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
