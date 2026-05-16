import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product, CartItem } from '../types'

type CartStore = {
  items: CartItem[]
  total: number
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

function computeTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,

      addItem: (product) => {
        const existing = get().items.find((i) => i.product.id === product.id)
        const newItems = existing
          ? get().items.map((i) =>
              i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
            )
          : [...get().items, { product, quantity: 1 }]
        set({ items: newItems, total: computeTotal(newItems) })
      },

      removeItem: (productId) => {
        const newItems = get().items.filter((i) => i.product.id !== productId)
        set({ items: newItems, total: computeTotal(newItems) })
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId)
          return
        }
        const newItems = get().items.map((i) =>
          i.product.id === productId ? { ...i, quantity } : i
        )
        set({ items: newItems, total: computeTotal(newItems) })
      },

      clearCart: () => set({ items: [], total: 0 }),
    }),
    { name: 'lume-cart' }
  )
)
