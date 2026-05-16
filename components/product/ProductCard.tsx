'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart'
import type { Product } from '@/lib/types'

type Props = {
  product: Product
}

export function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem)

  function handleAddToCart() {
    addItem(product)
  }

  return (
    <div className="group bg-[#FDFAF6] rounded-lg border border-[#8C6B50]/20 overflow-hidden flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative aspect-square overflow-hidden block">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#3D1F0F] text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-[#8C6B50] uppercase tracking-wider mb-1 capitalize">
          {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-lg text-[#2D1A0E] leading-tight mb-2 hover:text-[#3D1F0F] transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-medium text-[#2D1A0E]">${product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="text-sm bg-[#3D1F0F] text-white px-4 py-2 rounded hover:bg-[#2D1A0E] transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
