import Image from 'next/image'

export const metadata = { title: 'Our Story — Lumé' }

const values = [
  {
    label: 'Ethical Sourcing',
    body: 'Every botanical in a Lumé formula is traced from soil to shelf. We partner exclusively with certified organic farms across East Africa, the Amazon basin, and the Mediterranean — communities that have cultivated these plants for generations. We pay above fair-trade rates, audit our supply chain annually, and publish the results.',
  },
  {
    label: 'Formulation Standards',
    body: 'Our laboratory operates under ISO 22716 cosmetic GMP certification. Every batch is third-party tested for heavy metals, microbial contamination, and efficacy before it leaves the facility. We use zero synthetic fragrances, zero parabens, and zero petroleum derivatives — full stop.',
  },
  {
    label: 'Social Responsibility',
    body: 'One percent of every sale funds the Lumé Growers Fund, which provides interest-free microloans to smallholder farmers in our supply network. To date we have disbursed over $240,000 across 18 farming cooperatives, directly improving livelihoods for more than 600 families.',
  },
  {
    label: 'Brand Philosophy',
    body: 'Lumé was built on a single conviction: luxury and integrity are not opposites. Our packaging is made from post-consumer recycled glass and FSC-certified paper. Our formulas are vegan and cruelty-free, verified by Leaping Bunny. Beauty that costs the earth nothing — that is the standard we hold ourselves to.',
  },
  {
    label: 'Business Culture',
    body: 'We are a remote-first team of 34 people spread across 11 countries. Every employee receives a living wage benchmarked to their local cost of living, equity in the company, and a personal development budget. We share our financials openly with the team quarterly, because transparency inside the company is the foundation of transparency outside it.',
  },
]

export default function OurStoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1600&q=82&auto=format&fit=crop"
          alt="Lumé skincare products arranged on marble"
          fill
          quality={82}
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent" />

        {/* Logo + tagline centred in hero */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.4em] mb-4 font-light">
            Est. 2019
          </p>
          <h1
            className="font-serif text-7xl sm:text-8xl lg:text-9xl font-light tracking-[0.15em]"
            style={{ color: 'rgba(232,213,176,0.92)' }}
          >
            Lumé
          </h1>
          <p className="mt-4 font-serif text-xl sm:text-2xl font-light italic text-[#E8D5B0]/70 tracking-wide">
            Rooted in nature. Refined by science.
          </p>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-light">Our Story</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6 font-light">How It Began</p>
        <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] leading-tight mb-8">
          A kitchen, a conviction,{' '}
          <em className="italic text-[#E8D5B0]">and a refusal to compromise.</em>
        </h2>
        <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-6">
          Lumé began in 2019 when founder Amara Osei — a biochemist and lifelong skincare obsessive — could no longer find products that were simultaneously effective, clean, and honest about what was inside them. She started blending small batches in her Nairobi kitchen, sharing them with friends, and tracking the results.
        </p>
        <p className="text-white/50 leading-relaxed text-sm sm:text-base mb-6">
          Word spread faster than she expected. Within eight months she had outgrown the kitchen, rented lab space, and brought on her first two collaborators — a cosmetic chemist and a supply-chain specialist who shared her obsession with traceability. By 2021, Lumé products were in the hands of customers across 22 countries.
        </p>
        <p className="text-white/50 leading-relaxed text-sm sm:text-base">
          Today Lumé is still independently owned, still uncommonly transparent, and still blending every formula to the same exacting standard Amara set in that kitchen. The scale has changed. The conviction has not.
        </p>
      </section>

      {/* Divider image */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1400&q=78&auto=format&fit=crop"
          alt="Natural botanicals used in Lumé formulas"
          fill
          quality={78}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-transparent to-[#0D0D0D]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-serif text-2xl sm:text-3xl italic font-light text-[#E8D5B0]/80 text-center px-4 max-w-2xl">
            &ldquo;If you cannot name every ingredient and explain why it is there, it should not be in the formula.&rdquo;
          </p>
        </div>
      </section>

      {/* Values grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-4 font-light">What We Stand For</p>
          <h2 className="font-serif text-4xl font-light text-[#F5F0E8]">The Lumé Standard</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.05]">
          {values.map(({ label, body }, i) => (
            <div
              key={label}
              className={`bg-[#0D0D0D] p-10 flex flex-col gap-4${i === values.length - 1 && values.length % 2 !== 0 ? ' md:col-span-2 md:max-w-2xl md:mx-auto' : ''}`}
            >
              <span className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] font-light">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-2xl font-light text-[#F5F0E8]">{label}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6 font-light">Experience the Difference</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F5F0E8] mb-8">
            Skin that glows,{' '}
            <em className="italic text-[#E8D5B0]">naturally.</em>
          </h2>
          <a
            href="/shop"
            className="inline-block px-10 py-4 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
          >
            Shop the Collection
          </a>
        </div>
      </section>
    </>
  )
}
