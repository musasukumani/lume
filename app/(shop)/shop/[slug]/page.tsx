import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { AddToCart } from '@/components/product/AddToCart'
import { RelatedProducts } from '@/components/product/RelatedProducts'
import type { Product } from '@/lib/types'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const supabase = await createClient()
  const { data } = await supabase.from('products').select('slug')
  return (data ?? []).map(({ slug }) => ({ slug }))
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single()

  if (!product) notFound()

  const p = product as Product

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative aspect-square rounded-lg overflow-hidden bg-[#FDFAF6] border border-[#8C6B50]/20">
          <Image
            src={p.image_url}
            alt={p.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {p.badge && (
            <span className="absolute top-4 left-4 bg-[#3D1F0F] text-white text-xs px-3 py-1 rounded">
              {p.badge}
            </span>
          )}
        </div>

        <div className="py-4">
          <p className="text-xs text-[#8C6B50] uppercase tracking-widest mb-3 capitalize">
            {p.category}
          </p>
          <h1 className="font-serif text-4xl text-[#2D1A0E] mb-4">{p.name}</h1>
          <p className="text-2xl font-medium text-[#2D1A0E] mb-6">${p.price.toFixed(2)}</p>
          <p className="text-[#8C6B50] leading-relaxed">{p.description}</p>
          <AddToCart product={p} />
          <div className="mt-8 pt-8 border-t border-[#8C6B50]/20 grid grid-cols-2 gap-4">
            <div className="text-sm text-[#8C6B50]">
              <p className="font-medium text-[#2D1A0E] mb-1">Free Shipping</p>
              On all orders
            </div>
            <div className="text-sm text-[#8C6B50]">
              <p className="font-medium text-[#2D1A0E] mb-1">30-Day Returns</p>
              Easy returns
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts category={p.category} excludeSlug={p.slug} />
    </div>
  )
}
