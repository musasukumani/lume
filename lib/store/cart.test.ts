import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from './cart'
import type { Product } from '../types'

const mockProduct: Product = {
  id: '1',
  name: 'Test Serum',
  slug: 'test-serum',
  category: 'serum',
  price: 50,
  description: 'A test serum',
  image_url: 'https://example.com/img.jpg',
  badge: null,
}

const mockProduct2: Product = {
  id: '2',
  name: 'Test Cleanser',
  slug: 'test-cleanser',
  category: 'cleanser',
  price: 30,
  description: 'A test cleanser',
  image_url: 'https://example.com/img2.jpg',
  badge: 'Bestseller',
}

describe('Cart Store', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [], total: 0 })
  })

  it('starts empty', () => {
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('adds a product to cart', () => {
    useCartStore.getState().addItem(mockProduct)
    expect(useCartStore.getState().items).toHaveLength(1)
    expect(useCartStore.getState().items[0].quantity).toBe(1)
  })

  it('increments quantity when same product added twice', () => {
    useCartStore.getState().addItem(mockProduct)
    useCartStore.getState().addItem(mockProduct)
    expect(useCartStore.getState().items).toHaveLength(1)
    expect(useCartStore.getState().items[0].quantity).toBe(2)
  })

  it('removes a product from cart', () => {
    useCartStore.getState().addItem(mockProduct)
    useCartStore.getState().removeItem('1')
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('updates quantity of an item', () => {
    useCartStore.getState().addItem(mockProduct)
    useCartStore.getState().updateQuantity('1', 5)
    expect(useCartStore.getState().items[0].quantity).toBe(5)
  })

  it('removes item when quantity updated to 0', () => {
    useCartStore.getState().addItem(mockProduct)
    useCartStore.getState().updateQuantity('1', 0)
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('clears all items', () => {
    useCartStore.getState().addItem(mockProduct)
    useCartStore.getState().addItem(mockProduct2)
    useCartStore.getState().clearCart()
    expect(useCartStore.getState().items).toHaveLength(0)
  })

  it('calculates total correctly', () => {
    useCartStore.getState().addItem(mockProduct)   // $50
    useCartStore.getState().addItem(mockProduct)   // qty 2 = $100
    useCartStore.getState().addItem(mockProduct2)  // $30
    expect(useCartStore.getState().total).toBe(130)
  })
})
