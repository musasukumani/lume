export type ProductCategory = 'cleanser' | 'serum' | 'moisturizer'

export type Product = {
  id: string
  name: string
  slug: string
  category: ProductCategory
  price: number
  description: string
  image_url: string
  badge: string | null
}

export type CartItem = {
  product: Product
  quantity: number
}

export type Order = {
  id: string
  user_id: string
  status: string
  total: number
  shipping_name: string
  shipping_email: string
  shipping_address: string
  created_at: string
}

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
}

export type ShippingFormData = {
  name: string
  email: string
  address: string
  city: string
  postal_code: string
}
