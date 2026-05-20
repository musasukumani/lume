import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Returns — Lumé',
  description: 'Lumé 30-day return and exchange policy.',
}

export default function ReturnsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3 font-light">Support</p>
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">Returns & Exchanges</h1>
      <p className="text-white/40 text-sm mb-12 leading-relaxed">
        We want you to love every product you receive. If something is not right, we will
        make it right.
      </p>

      <div className="space-y-8">

        <div className="border border-[#C9A84C]/20 bg-[#C9A84C]/[0.04] p-6">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2 font-light">
            Our Guarantee
          </p>
          <p className="text-[#E8D5B0] font-serif text-xl font-light leading-relaxed">
            30-day satisfaction guarantee on every order.
          </p>
          <p className="text-white/45 text-sm mt-3 leading-relaxed">
            If you are not completely satisfied with your purchase for any reason, contact us within
            30 days of delivery and we will arrange a full refund or exchange — no questions asked.
          </p>
        </div>

        {[
          {
            title: 'How to Start a Return',
            body: 'Email us at returns@lumeskin.com with your order number and reason for return. We will send you a prepaid return label within 24 hours.',
          },
          {
            title: 'Refund Timeline',
            body: 'Once we receive your returned item, refunds are processed within 3–5 business days back to your original payment method.',
          },
          {
            title: 'Exchanges',
            body: 'Want a different product? We are happy to exchange any item within 30 days. Simply let us know which product you would like instead when you contact us.',
          },
          {
            title: 'Damaged or Incorrect Orders',
            body: 'If your order arrived damaged or you received the wrong item, please contact us within 7 days with a photo and we will send a replacement free of charge.',
          },
          {
            title: 'Non-Returnable Items',
            body: 'For hygiene reasons, opened skincare products are only eligible for return under our 30-day satisfaction guarantee, not as standard returns. All claims must be made within 30 days of delivery.',
          },
        ].map((item, i) => (
          <div key={i} className="py-6 border-t border-white/[0.07]">
            <p className="text-[#E8D5B0] font-light mb-3">{item.title}</p>
            <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
          </div>
        ))}

        <div className="pt-4">
          <p className="text-white/30 text-sm">
            Still have questions?{' '}
            <Link
              href="/contact"
              className="text-[#C9A84C]/70 hover:text-[#C9A84C] transition-colors underline underline-offset-4"
            >
              Contact us
            </Link>{' '}
            and we will get back to you within 24 hours.
          </p>
        </div>

      </div>
    </div>
  )
}
