import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shipping — Lumé',
  description: 'Shipping information for Lumé skincare orders.',
}

const shippingInfo = [
  {
    title: 'Free Standard Shipping',
    detail: 'All orders ship free. No minimum spend required.',
  },
  {
    title: 'Processing Time',
    detail: 'Orders are processed within 1–2 business days. You will receive a confirmation email with tracking information once your order has been dispatched.',
  },
  {
    title: 'Estimated Delivery',
    detail: 'Standard delivery takes 3–5 business days from dispatch. Delivery times may vary during public holidays or high-demand periods.',
  },
  {
    title: 'Packaging',
    detail: 'Every Lumé order is packaged using recycled and recyclable materials. We use minimal packaging to reduce our environmental footprint.',
  },
  {
    title: 'Order Tracking',
    detail: 'Once your order has shipped you will receive an email with a tracking link. You can follow your order every step of the way.',
  },
  {
    title: 'Questions?',
    detail: 'If you have any questions about your delivery, please reach out via our Contact page and we will get back to you within 24 hours.',
  },
]

export default function ShippingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3 font-light">Support</p>
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">Shipping</h1>
      <p className="text-white/40 text-sm mb-12 leading-relaxed">
        We believe great skincare should be accessible — that is why every Lumé order ships free,
        no matter the size.
      </p>

      <div className="grid gap-5">
        {shippingInfo.map((item, i) => (
          <div
            key={i}
            className="bg-white/[0.03] border border-white/[0.07] p-6"
          >
            <p className="text-[#C9A84C]/80 text-xs uppercase tracking-widest mb-2 font-light">
              {item.title}
            </p>
            <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
