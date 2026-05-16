import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

type OrderItemInput = {
  product_id: string
  quantity: number
  price: number
}

type OrderBody = {
  shipping: {
    name: string
    email: string
    address: string
    city: string
    postal_code: string
  }
  items: OrderItemInput[]
  total: number
}

export async function POST(request: Request) {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body: OrderBody = await request.json()
  const { shipping, items, total } = body

  if (!items || items.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
  }

  const shippingAddress = `${shipping.address}, ${shipping.city}, ${shipping.postal_code}`

  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      status: 'confirmed',
      total,
      shipping_name: shipping.name,
      shipping_email: shipping.email,
      shipping_address: shippingAddress,
    })
    .select()
    .single()

  if (orderError || !order) {
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
  }

  const orderItems = items.map((item) => ({
    order_id: order.id,
    product_id: item.product_id,
    quantity: item.quantity,
    price: item.price,
  }))

  const { error: itemsError } = await supabase.from('order_items').insert(orderItems)

  if (itemsError) {
    await supabase.from('orders').delete().eq('id', order.id)
    return NextResponse.json({ error: 'Failed to save order items' }, { status: 500 })
  }

  return NextResponse.json({ orderId: order.id }, { status: 201 })
}
