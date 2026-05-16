import { createClient } from '@/lib/supabase/server'
import { ProductCard } from './ProductCard'
import type { Product } from '@/lib/types'

type Props = { category: string; excludeSlug: string }

export async function RelatedProducts({ category, excludeSlug }: Props) {
  const supabase = await createClient()
  const { data } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .neq('slug', excludeSlug)
    .limit(3)

  if (!data || data.length === 0) return null

  return (
    <div className="mt-20">
      <h2 className="font-serif text-3xl text-[#2D1A0E] mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {(data as Product[]).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
