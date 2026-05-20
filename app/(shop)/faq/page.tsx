import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Lumé',
  description: 'Frequently asked questions about Lumé skincare.',
}

const faqs = [
  {
    q: 'Are all Lumé products truly natural?',
    a: 'Yes. Every formula is built on botanically sourced actives — no synthetic fragrances, no parabens, no sulphates. We publish full ingredient lists on each product page so you always know exactly what you are putting on your skin.',
  },
  {
    q: 'Are your products suitable for sensitive skin?',
    a: 'All Lumé formulations are dermatologist-tested, allergy-tested, and non-comedogenic. They are designed to be gentle enough for reactive and sensitive skin types while still delivering visible results.',
  },
  {
    q: 'Are your products cruelty-free?',
    a: 'Absolutely. We never test on animals at any stage of development. Our ingredients are ethically sourced and our manufacturing partners are certified cruelty-free.',
  },
  {
    q: 'How long before I see results?',
    a: 'Most customers notice improved texture and hydration within 1–2 weeks. Brightening and tone-evening results (especially from the Glow Serum) typically appear after 3–4 weeks of consistent daily use.',
  },
  {
    q: 'Can I use multiple Lumé products together?',
    a: 'Yes — our range is formulated to layer well together. A good starting routine is: Cleansing Balm (morning & night), Glow Serum (morning), Velvet Moisturiser (morning & night).',
  },
  {
    q: 'What is your shipping policy?',
    a: 'We offer free standard shipping on all orders. Orders are processed within 1–2 business days and delivery typically takes 3–5 business days. See our full Shipping page for details.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day satisfaction guarantee. If you are unhappy with your purchase for any reason, contact us within 30 days of delivery and we will arrange a full refund or exchange.',
  },
  {
    q: 'How should I store my products?',
    a: 'Store all Lumé products in a cool, dry place away from direct sunlight. Most products have a shelf life of 12 months after opening (indicated by the PAO symbol on packaging).',
  },
]

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-3 font-light">Support</p>
      <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-12">
        Frequently Asked Questions
      </h1>

      <div className="divide-y divide-white/[0.07]">
        {faqs.map((item, i) => (
          <div key={i} className="py-7">
            <p className="text-[#E8D5B0] font-light mb-3 leading-snug">{item.q}</p>
            <p className="text-white/45 text-sm leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
