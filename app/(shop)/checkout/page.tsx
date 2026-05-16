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
      <h1 className="font-serif text-4xl text-[#2D1A0E] mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="font-serif text-2xl text-[#2D1A0E] mb-2">Shipping Details</h2>

          {fields.map(({ label, name, type, placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-[#2D1A0E] mb-1">{label}</label>
              <input
                type={type}
                name={name}
                required
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-[#8C6B50]/30 rounded bg-[#FDFAF6] text-[#2D1A0E] placeholder:text-[#8C6B50]/50 focus:outline-none focus:ring-1 focus:ring-[#3D1F0F] text-sm"
              />
            </div>
          ))}

          {error && (
            <p className="text-red-600 text-sm bg-red-50 px-3 py-2 rounded">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || items.length === 0}
            className="w-full bg-[#3D1F0F] text-white py-3 rounded font-medium hover:bg-[#2D1A0E] transition-colors disabled:opacity-60 mt-4"
          >
            {loading ? 'Placing Order...' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        {/* Order Summary */}
        <div className="bg-[#FDFAF6] rounded-lg border border-[#8C6B50]/20 p-6 h-fit">
          <h2 className="font-serif text-2xl text-[#2D1A0E] mb-6">Your Order</h2>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-3 items-center">
                <div className="relative w-14 h-14 rounded border border-[#8C6B50]/20 overflow-hidden flex-shrink-0">
                  <Image
                    src={item.product.image_url}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#2D1A0E] truncate">{item.product.name}</p>
                  <p className="text-xs text-[#8C6B50]">Qty: {item.quantity}</p>
                </div>
                <p className="text-sm font-medium text-[#2D1A0E]">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-[#8C6B50]/20 pt-4 space-y-2 text-sm">
            <div className="flex justify-between text-[#8C6B50]">
              <span>Shipping</span>
              <span className="text-green-600 font-medium">Free</span>
            </div>
            <div className="flex justify-between font-medium text-[#2D1A0E] text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
