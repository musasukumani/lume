import { createClient } from '@/lib/supabase/server'
import { ProductCard } from '@/components/product/ProductCard'
import { NewsletterStrip } from '@/components/home/NewsletterStrip'
import Link from 'next/link'
import type { Product } from '@/lib/types'

export default async function HomePage() {
  const supabase = await createClient()

  const { data: featured } = await supabase
    .from('products')
    .select('*')
    .eq('badge', 'Bestseller')
    .limit(4)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] bg-[#2D1A0E] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1A0E]/90 to-[#2D1A0E]/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <p className="text-[#8C6B50] text-sm uppercase tracking-widest mb-4 font-sans">
            Natural Skincare
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 max-w-2xl">
            Skin that glows,{' '}
            <span className="italic">naturally.</span>
          </h1>
          <Link
            href="/shop"
            className="inline-block bg-white text-[#2D1A0E] px-8 py-3 text-sm font-medium rounded hover:bg-[#F5EDE0] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🌿', label: 'Natural Formula' },
            { icon: '🐰', label: 'Cruelty Free' },
            { icon: '🧪', label: 'Expert Approved' },
            { icon: '📦', label: 'Free Shipping' },
          ].map(({ icon, label }) => (
            <div key={label} className="text-center py-6 px-4 bg-[#FDFAF6] rounded-lg border border-[#8C6B50]/20">
              <span className="text-2xl mb-2 block">{icon}</span>
              <p className="text-sm font-medium text-[#2D1A0E]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tagline */}
      <section className="text-center py-8 px-4">
        <p className="font-serif text-2xl italic text-[#8C6B50]">
          &ldquo;Refresh your skin, love yourself, renew your glow.&rdquo;
        </p>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-serif text-3xl text-[#2D1A0E]">Bestsellers</h2>
          <Link
            href="/shop"
            className="text-sm text-[#8C6B50] hover:text-[#2D1A0E] transition-colors underline underline-offset-4"
          >
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {(featured as Product[] ?? []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Story Banner */}
      <section className="bg-[#2D1A0E] text-white my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#8C6B50] text-xs uppercase tracking-widest mb-4">Our Philosophy</p>
            <h2 className="font-serif text-4xl leading-tight mb-6">
              Eco-friendly,{' '}
              <span className="italic">Skin-Friendly</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Every Lumé formula begins in nature and is refined by science.
              We use only ethically sourced botanicals, zero synthetic fragrances,
              and packaging designed to leave the lightest footprint possible.
            </p>
            <Link
              href="/shop"
              className="inline-block border border-white/40 text-white px-6 py-2 text-sm hover:bg-white hover:text-[#2D1A0E] transition-colors rounded"
            >
              Explore Collection
            </Link>
          </div>
          <div className="aspect-square rounded-lg bg-[#3D1F0F]/50 flex items-center justify-center">
            <span className="font-serif text-6xl text-white/20 tracking-widest">Lumé</span>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterStrip />
    </>
  )
}
