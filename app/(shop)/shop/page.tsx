import { createClient } from '@/lib/supabase/server'
import { ProductGrid } from '@/components/product/ProductGrid'
import { ProductFilters } from '@/components/product/ProductFilters'
import { Suspense } from 'react'
import type { Product, ProductCategory } from '@/lib/types'
import { hasSupabaseEnv } from '@/lib/supabase/config'
import { getDemoProducts } from '@/lib/products'

export const revalidate = 3600

type Props = {
  searchParams: Promise<{ category?: string }>
}

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams
  let products: Product[] = getDemoProducts(category)

  if (hasSupabaseEnv()) {
    const supabase = await createClient()
    let query = supabase.from('products').select('*').order('name')

    if (category && category !== 'all') {
      query = query.eq('category', category as ProductCategory)
    }

    const { data, error } = await query

    if (!error && data && data.length > 0) {
      products = data as Product[]
    }
  }

  const heading = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + 's'
    : 'All Products'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-2">{heading}</h1>
        <p className="text-[#C9A84C]/60 text-sm tracking-wider">
          {products?.length ?? 0} product{(products?.length ?? 0) !== 1 ? 's' : ''}
        </p>
      </div>

      <Suspense>
        <div className="mb-8">
          <ProductFilters />
        </div>
      </Suspense>

      <ProductGrid products={products} />
    </div>
  )
}
