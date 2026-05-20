import { ProductCard } from './ProductCard'
import type { Product } from '@/lib/types'

type Props = {
  products: Product[]
}

export function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-20 text-white/30">
        <p className="font-serif text-2xl font-light">No products found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
