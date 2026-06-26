import { createClient } from '@/lib/supabase/server'
import { createClient as createBrowserClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { AddToCart } from '@/components/product/AddToCart'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import { ingredientsByCategory } from '@/lib/ingredients'
import type { Product } from '@/lib/types'
import { hasSupabaseProductSource } from '@/lib/supabase/config'
import { demoProducts, getDemoProductBySlug } from '@/lib/products'

export const revalidate = 3600

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  if (!hasSupabaseProductSource()) {
    return demoProducts.map(({ slug }) => ({ slug }))
  }

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data, error } = await supabase.from('products').select('slug')

  if (error || !data || data.length === 0) {
    return demoProducts.map(({ slug }) => ({ slug }))
  }

  return data.map(({ slug }) => ({ slug }))
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  let product: Product | null = getDemoProductBySlug(slug)

  if (hasSupabaseProductSource()) {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single()

    if (!error && data) {
      product = data as Product
    }
  }

  if (!product) notFound()

  const p = product as Product

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div
          className="relative aspect-square overflow-hidden border border-white/[0.07]"
          style={{ background: 'linear-gradient(135deg, #1E1208, #2A1A0A)' }}
        >
          <Image
            src={p.image_url}
            alt={p.name}
            fill
            quality={85}
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {p.badge && (
            <span className="absolute top-4 left-4 border border-[#C9A84C]/50 text-[#C9A84C] text-xs px-3 py-1 tracking-widest uppercase font-light">
              {p.badge}
            </span>
          )}
        </div>

        <div className="py-4">
          <p className="text-xs text-[#C9A84C]/70 uppercase tracking-[0.3em] mb-3 font-light capitalize">
            {p.category}
          </p>
          <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-4">{p.name}</h1>
          <p className="text-2xl font-light text-[#E8D5B0] mb-6">${p.price.toFixed(2)}</p>
          <p className="text-white/50 leading-relaxed text-sm">{p.description}</p>
          <AddToCart product={p} />

          {/* Key Ingredients */}
          <div className="mt-8 pt-8 border-t border-white/[0.07]">
            <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest mb-4 font-light">
              Key Ingredients
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ingredientsByCategory[p.category].map((ing) => (
                <div
                  key={ing.name}
                  className="bg-white/[0.03] border border-white/[0.07] px-4 py-3"
                >
                  <p className="text-[#E8D5B0] text-sm font-light">{ing.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{ing.benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="text-sm text-white/40">
              <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest mb-1 font-light">Free Shipping</p>
              On all orders
            </div>
            <div className="text-sm text-white/40">
              <p className="text-[#C9A84C]/70 text-xs uppercase tracking-widest mb-1 font-light">30-Day Returns</p>
              Easy returns
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts category={p.category} excludeSlug={p.slug} />
    </div>
  )
}
