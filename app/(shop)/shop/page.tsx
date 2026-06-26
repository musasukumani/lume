import { createClient } from '@/lib/supabase/server'
import { Suspense } from 'react'
import { ShopCatalog } from '@/components/product/ShopCatalog'
import type { Product } from '@/lib/types'
import { hasSupabaseProductSource } from '@/lib/supabase/config'
import { getDemoProducts } from '@/lib/products'

export const revalidate = 3600

export default async function ShopPage() {
  let products: Product[] = getDemoProducts()

  if (hasSupabaseProductSource()) {
    const supabase = await createClient()
    const query = supabase.from('products').select('*').order('name')

    const { data, error } = await query

    if (!error && data && data.length > 0) {
      products = data as Product[]
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Suspense fallback={null}>
        <ShopCatalog products={products} />
      </Suspense>
    </div>
  )
}
