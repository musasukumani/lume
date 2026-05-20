import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#C9A84C]/30"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)' }}
      >
        <span className="text-[#C9A84C] text-2xl font-light">✓</span>
      </div>
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">Order Confirmed</h1>
      <p className="text-white/40 mb-8 leading-relaxed text-sm">
        Thank you for your order. Your Lumé products are being prepared with care
        and will be on their way soon.
      </p>
      <Link
        href="/shop"
        className="inline-block px-8 py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity"
        style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
      >
        Continue Shopping
      </Link>
    </div>
  )
}
