-- Products table
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category text not null check (category in ('cleanser', 'serum', 'moisturizer')),
  price numeric(10, 2) not null,
  description text not null,
  image_url text not null,
  badge text
);

-- Orders table
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'confirmed',
  total numeric(10, 2) not null,
  shipping_name text not null,
  shipping_email text not null,
  shipping_address text not null,
  created_at timestamptz not null default now()
);

-- Order items table
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity int not null check (quantity > 0),
  price numeric(10, 2) not null
);

-- RLS: products are public read
alter table products enable row level security;
create policy "Products are publicly readable"
  on products for select using (true);

-- RLS: users manage their own orders
alter table orders enable row level security;
create policy "Users can read own orders"
  on orders for select using (auth.uid() = user_id);
create policy "Users can insert own orders"
  on orders for insert with check (auth.uid() = user_id);

-- RLS: order_items accessible via parent order
alter table order_items enable row level security;
create policy "Users can read own order items"
  on order_items for select using (
    exists (select 1 from orders where orders.id = order_id and orders.user_id = auth.uid())
  );
create policy "Users can insert own order items"
  on order_items for insert with check (
    exists (select 1 from orders where orders.id = order_id and orders.user_id = auth.uid())
  );
