import type { ProductCategory } from './types'

type Ingredient = {
  name: string
  benefit: string
}

export const ingredientsByCategory: Record<ProductCategory, Ingredient[]> = {
  cleanser: [
    { name: 'Aloe Vera', benefit: 'Soothes & calms irritation' },
    { name: 'Glycerin', benefit: 'Deep moisture retention' },
    { name: 'Chamomile Extract', benefit: 'Reduces redness' },
    { name: 'Vitamin E', benefit: 'Antioxidant protection' },
  ],
  serum: [
    { name: 'Vitamin C', benefit: 'Brightens & evens tone' },
    { name: 'Hyaluronic Acid', benefit: 'Plumps & hydrates' },
    { name: 'Niacinamide', benefit: 'Minimises pores' },
    { name: 'Ferulic Acid', benefit: 'Boosts antioxidant effect' },
  ],
  moisturizer: [
    { name: 'Shea Butter', benefit: 'Rich nourishment' },
    { name: 'Jojoba Oil', benefit: 'Balances skin barrier' },
    { name: 'Ceramides', benefit: 'Locks in moisture' },
    { name: 'Squalane', benefit: 'Lightweight hydration' },
  ],
}
