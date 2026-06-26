import { createClient } from '@/lib/supabase/server'
import { ProductCard } from './ProductCard'
import type { Product, ProductCategory } from '@/lib/types'
import { hasSupabaseProductSource } from '@/lib/supabase/config'
import { getRelatedDemoProducts } from '@/lib/products'

type Props = { category: string; excludeSlug: string }

export async function RelatedProducts({ category, excludeSlug }: Props) {
  let data: Product[] = getRelatedDemoProducts(category as ProductCategory, excludeSlug)

  if (hasSupabaseProductSource()) {
    const supabase = await createClient()
    const { data: products, error } = await supabase
      .from('products')
      .select('*')
      .eq('category', category)
      .neq('slug', excludeSlug)
      .limit(3)

    if (!error && products && products.length > 0) {
      data = products as Product[]
    }
  }

  if (!data || data.length === 0) return null

  return (
    <div className="mt-20">
      <h2 className="font-serif text-3xl font-light text-[#F5F0E8] mb-8">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
