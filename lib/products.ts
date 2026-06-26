import type { Product, ProductCategory } from './types'

export const demoProducts: Product[] = [
  {
    id: 'demo-1',
    name: 'Marula Milk Cleansing Balm',
    slug: 'marula-milk-cleansing-balm',
    category: 'cleanser',
    price: 42,
    description:
      "A rich balm-to-milk cleanser with marula oil, oat extract, and vitamin E that dissolves makeup and leaves skin soft, balanced, and luminous.",
    image_url: 'https://images.unsplash.com/photo-1745141063798-7fa04698ea80?w=800&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'demo-2',
    name: 'Rooibos Clay Purifying Wash',
    slug: 'rooibos-clay-purifying-wash',
    category: 'cleanser',
    price: 32,
    description:
      'An antioxidant gel-to-foam cleanser with rooibos, kaolin clay, and niacinamide for clear, calm, refreshed skin.',
    image_url: 'https://images.unsplash.com/photo-1748639320154-6ba118bccc74?w=800&q=80',
    badge: 'New',
  },
  {
    id: 'demo-3',
    name: 'Baobab Radiance Serum',
    slug: 'baobab-radiance-serum',
    category: 'serum',
    price: 58,
    description:
      'A brightening vitamin C serum with baobab and ferulic acid to even tone, support the barrier, and revive radiance.',
    image_url: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'demo-4',
    name: 'Moringa Dew Hyaluronic Serum',
    slug: 'moringa-dew-hyaluronic-serum',
    category: 'serum',
    price: 48,
    description:
      'A weightless hydrating serum with moringa peptides, hyaluronic acid, and centella for a plump, dewy finish.',
    image_url: 'https://images.unsplash.com/photo-1599022484220-967921f2217c?w=800&q=80',
    badge: null,
  },
  {
    id: 'demo-5',
    name: 'Shea Glow Day Veil',
    slug: 'shea-glow-day-veil',
    category: 'moisturizer',
    price: 42,
    description:
      'A lightweight daily moisturizer with shea butter, squalane, and niacinamide for a smooth natural-glow finish.',
    image_url: 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=800&q=80',
    badge: 'Bestseller',
  },
  {
    id: 'demo-6',
    name: 'Baobab Barrier Repair Veil',
    slug: 'baobab-barrier-repair-veil',
    category: 'moisturizer',
    price: 68,
    description:
      'A reparative moisturizer with baobab seed oil and ceramides for dry, sensitive, or overworked skin barriers.',
    image_url: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800&q=80',
    badge: null,
  },
]

export function getDemoProducts(category?: string) {
  const products = [...demoProducts].sort((a, b) => a.name.localeCompare(b.name))

  if (!category || category === 'all') return products

  return products.filter((product) => product.category === category)
}

export function getDemoProductBySlug(slug: string) {
  return demoProducts.find((product) => product.slug === slug) ?? null
}

export function getRelatedDemoProducts(category: ProductCategory, excludeSlug: string) {
  return demoProducts
    .filter((product) => product.category === category && product.slug !== excludeSlug)
    .slice(0, 3)
}
