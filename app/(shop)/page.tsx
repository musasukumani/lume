import { createClient } from '@/lib/supabase/server'
import { ProductCard } from '@/components/product/ProductCard'
import { NewsletterStrip } from '@/components/home/NewsletterStrip'
import { ReviewsSection } from '@/components/home/ReviewsSection'
import { ExpertEndorsement } from '@/components/home/ExpertEndorsement'
import { SocialFeed } from '@/components/home/SocialFeed'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/lib/types'
import { hasSupabaseEnv } from '@/lib/supabase/config'
import { demoProducts } from '@/lib/products'

export const revalidate = 3600

export default async function HomePage() {
  let featured: Product[] = demoProducts.filter((product) => product.badge === 'Bestseller')

  if (hasSupabaseEnv()) {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('badge', 'Bestseller')
      .limit(4)

    if (!error && data && data.length > 0) {
      featured = data as Product[]
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A0F05 0%, #0D0D0D 60%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="lume-hero-text">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6 font-light">
              Natural Skincare
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-[#F5F0E8] leading-tight mb-8 max-w-2xl">
              Skin that glows,{' '}
              <em className="italic text-[#E8D5B0]">naturally.</em>
            </h1>
            <div className="flex gap-6 items-center">
              <Link
                href="/shop"
                className="inline-block px-8 py-3 text-xs tracking-widest uppercase font-semibold text-[#0D0D0D] hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #A8883A)' }}
              >
                Shop Now
              </Link>
              <Link
                href="/our-story"
                className="text-xs text-white/35 tracking-widest uppercase hover:text-white/60 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div
              className="lume-orb w-64 h-64 rounded-full flex items-center justify-center"
              style={{
                border: '1px solid rgba(201,168,76,0.2)',
                background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.03) 60%, transparent 100%)',
              }}
            >
              <span className="lume-orb-text font-serif text-6xl font-light" style={{ color: 'rgba(232,213,176,0.2)' }}>Lumé</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: 'Natural Formula',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                  </svg>
                ),
              },
              {
                label: 'Cruelty Free',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                ),
              },
              {
                label: 'Expert Approved',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                ),
              },
              {
                label: 'Free Shipping',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
                    <path d="M14 9h4l4 4v4h-8V9z"/>
                    <circle cx="7" cy="18" r="2"/>
                    <circle cx="17" cy="18" r="2"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <div
                key={label}
                className="text-center py-8 px-4 bg-white/[0.04] border border-white/[0.07] flex flex-col items-center gap-4 hover:border-white/[0.13] hover:bg-white/[0.06] transition-all duration-300"
              >
                {icon}
                <p className="text-xs font-light text-white/50 tracking-[0.15em] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Tagline */}
      <ScrollReveal>
        <section className="text-center py-8 px-4">
          <p className="font-serif text-2xl italic font-light text-[#C9A84C]/70">
            &ldquo;Refresh your skin, love yourself, renew your glow.&rdquo;
          </p>
        </section>
      </ScrollReveal>

      {/* Expert Endorsement */}
      <ScrollReveal>
        <ExpertEndorsement />
      </ScrollReveal>

      {/* Featured Products */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-2 font-light">Our Collection</p>
              <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">Bestsellers</h2>
            </div>
            <Link
              href="/shop"
              className="text-xs text-[#C9A84C] hover:text-[#E8D5B0] transition-colors tracking-widest uppercase"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Customer Reviews */}
      <ScrollReveal>
        <ReviewsSection />
      </ScrollReveal>

      {/* Brand Story Banner */}
      <ScrollReveal>
      <section className="bg-[#0A0A0A] border-y border-white/5 my-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-4 font-light">Our Philosophy</p>
            <h2 className="font-serif text-4xl font-light leading-tight mb-6 text-[#F5F0E8]">
              Eco-friendly,{' '}
              <em className="italic text-[#E8D5B0]">Skin-Friendly</em>
            </h2>
            <p className="text-white/40 leading-relaxed mb-8 text-sm">
              Every Lumé formula begins in nature and is refined by science.
              We use only ethically sourced botanicals, zero synthetic fragrances,
              and packaging designed to leave the lightest footprint possible.
            </p>
            <Link
              href="/shop"
              className="inline-block border border-white/20 text-white/50 px-6 py-2 text-xs tracking-widest uppercase hover:border-white/40 hover:text-white/80 transition-colors"
            >
              Explore Collection
            </Link>
          </div>
          <div className="relative aspect-square overflow-hidden border border-white/[0.07]">
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80&auto=format&fit=crop"
              alt="Skincare model"
              fill
              quality={82}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* Social Feed */}
      <ScrollReveal>
        <SocialFeed />
      </ScrollReveal>

      {/* Newsletter */}
      <NewsletterStrip />
    </>
  )
}
