import { createClient } from '@/lib/supabase/server'
import { ProductGrid } from '@/components/product/ProductGrid'
import { ProductFilters } from '@/components/product/ProductFilters'
import { Suspense } from 'react'
import type { Product, ProductCategory } from '@/lib/types'

type Props = {
  searchParams: Promise<{ category?: string }>
}

export default async function ShopPage({ searchParams }: Props) {
  const { category } = await searchParams
  const supabase = await createClient()

  let query = supabase.from('products').select('*').order('name')

  if (category && category !== 'all') {
    query = query.eq('category', category as ProductCategory)
  }

  const { data: products } = await query

  const heading = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + 's'
    : 'All Products'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h1 className="font-serif text-4xl text-[#2D1A0E] mb-2">{heading}</h1>
        <p className="text-[#8C6B50]">
          {products?.length ?? 0} product{(products?.length ?? 0) !== 1 ? 's' : ''}
        </p>
      </div>

      <Suspense>
        <div className="mb-8">
          <ProductFilters />
        </div>
      </Suspense>

      <ProductGrid products={(products as Product[]) ?? []} />
    </div>
  )
}
