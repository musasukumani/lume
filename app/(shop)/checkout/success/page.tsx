import Link from 'next/link'

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 bg-[#3D1F0F] rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-white text-2xl">✓</span>
      </div>
      <h1 className="font-serif text-4xl text-[#2D1A0E] mb-4">Order Confirmed!</h1>
      <p className="text-[#8C6B50] mb-8 leading-relaxed">
        Thank you for your order. Your Lumé products are being prepared with care
        and will be on their way soon.
      </p>
      <Link
        href="/shop"
        className="inline-block bg-[#3D1F0F] text-white px-8 py-3 rounded font-medium hover:bg-[#2D1A0E] transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
