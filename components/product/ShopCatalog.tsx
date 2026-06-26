'use client'

import { useSearchParams } from 'next/navigation'
import { ProductFilters } from './ProductFilters'
import { ProductGrid } from './ProductGrid'
import type { Product, ProductCategory } from '@/lib/types'

type Props = {
  products: Product[]
}

function getHeading(category: string | null) {
  if (!category || category === 'all') return 'All Products'
  return `${category.charAt(0).toUpperCase()}${category.slice(1)}s`
}

function isProductCategory(category: string | null): category is ProductCategory {
  return category === 'cleanser' || category === 'serum' || category === 'moisturizer'
}

export function ShopCatalog({ products }: Props) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const filteredProducts = isProductCategory(category)
    ? products.filter((product) => product.category === category)
    : products

  return (
    <>
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-light text-[#F5F0E8] mb-2">
          {getHeading(category)}
        </h1>
        <p className="text-[#C9A84C]/60 text-sm tracking-wider">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="mb-8">
        <ProductFilters />
      </div>

      <ProductGrid products={filteredProducts} />
    </>
  )
}
