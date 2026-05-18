-- Wipe existing products before re-seeding
truncate table order_items restart identity cascade;
truncate table products restart identity cascade;

-- ═══════════════════════════════════════════
-- THE RITUAL LINE — Cleansers
-- ═══════════════════════════════════════════
insert into products (name, slug, category, price, description, image_url, badge) values
(
  'Marula Milk Cleansing Balm',
  'marula-milk-cleansing-balm',
  'cleanser',
  42.00,
  'Born from the wild marula groves of Southern Africa, this rich balm-to-milk cleanser dissolves makeup, SPF, and the day''s weight with effortless grace. Cold-pressed marula oil — prized for centuries for its deeply nourishing fatty acid profile — blends with soothing oat extract and vitamin E to leave skin luminous, velvety, and perfectly balanced. Rinse away to reveal your skin''s truest glow.',
  'https://images.unsplash.com/photo-1745141063798-7fa04698ea80?w=800&q=80',
  'Bestseller'
),
(
  'Ubuntu Cleansing Oil',
  'ubuntu-cleansing-oil',
  'cleanser',
  38.00,
  'Named for the ancient African philosophy of shared humanity, this silky cleansing oil is a community of botanicals working in harmony. Baobab — the tree of life — delivers omega-rich nourishment, while moringa seed oil purifies with extraordinary gentleness. Together they draw out impurities, excess sebum, and pollution without disturbing your skin''s delicate barrier. Emulsifies to a milky rinse. Zero residue. Pure ease.',
  'https://images.unsplash.com/photo-1665763630810-e6251bdd392d?w=800&q=80',
  null
),
(
  'Rooibos Clay Purifying Wash',
  'rooibos-clay-purifying-wash',
  'cleanser',
  32.00,
  'South Africa''s beloved rooibos — rich in antioxidants and naturally caffeine-free — anchors this intelligent gel-to-foam cleanser. Ultra-refined kaolin clay sweeps away congestion and minimises pores while 4% niacinamide works quietly beneath the surface to even skin tone with every wash. Gentle enough for daily use, effective enough to feel the difference. Your clearest skin starts here.',
  'https://images.unsplash.com/photo-1748639320154-6ba118bccc74?w=800&q=80',
  'New'
),

-- ═══════════════════════════════════════════
-- THE ACTIVES LINE — Serums
-- ═══════════════════════════════════════════
(
  'Baobab Radiance Serum',
  'baobab-radiance-serum',
  'serum',
  58.00,
  'The iconic baobab — provider of life across the African savanna for thousands of years — meets 12% stabilised vitamin C in this transformative brightening serum. Ferulic acid amplifies vitamin C''s potency and longevity, while baobab''s natural omega profile reinforces your barrier as it works. Dark spots fade. Tone evens. Radiance returns. Use every morning for skin that looks genuinely lit from within.',
  'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?w=800&q=80',
  'Bestseller'
),
(
  'Moringa Dew Hyaluronic Serum',
  'moringa-dew-hyaluronic-serum',
  'serum',
  48.00,
  'Moringa — called the "miracle tree" across East Africa for its extraordinary nutrient density — yields a potent peptide complex that signals your skin to hold onto moisture like never before. Layered with three molecular weights of hyaluronic acid that hydrate at every skin depth and centella asiatica to calm as it quenches, this serum delivers a weightless dew finish that lasts all day. Skin that feels plump, soft, and alive.',
  'https://images.unsplash.com/photo-1599022484220-967921f2217c?w=800&q=80',
  null
),
(
  'Kigelia Night Renewal Serum',
  'kigelia-night-renewal-serum',
  'serum',
  65.00,
  'Kigelia africana — the sausage tree revered across sub-Saharan Africa for its skin-firming properties — joins encapsulated 0.3% retinol and plant-derived bakuchiol in this sophisticated overnight renewal serum. The encapsulation technology releases retinol gradually through the night, dramatically reducing sensitivity while delivering all the cellular turnover, collagen support, and texture refinement retinol is known for. Wake up to visibly firmer, smoother, younger-looking skin.',
  'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80',
  'New'
),

-- ═══════════════════════════════════════════
-- THE VEIL LINE — Moisturizers
-- ═══════════════════════════════════════════
(
  'Shea Glow Day Veil',
  'shea-glow-day-veil',
  'moisturizer',
  42.00,
  'Unrefined shea butter from the shea belt of northern Ghana — harvested by women''s cooperatives using generations-old cold-press methods — forms the luminous heart of this lightweight day moisturiser. Emulsified to an impossibly silky texture, it absorbs in seconds and leaves the most beautiful natural-glow finish. Squalane locks in moisture. Niacinamide refines and evens. All-day protection that looks like skin, only better.',
  'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?w=800&q=80',
  'Bestseller'
),
(
  'Marula Rich Night Veil',
  'marula-rich-night-veil',
  'moisturizer',
  52.00,
  'While you sleep, this indulgent night cream works in concert with your skin''s natural repair cycle. Wild-harvested marula oil — one of the most stable and skin-compatible oils on earth — blends with plant-derived bakuchiol and a tri-peptide complex to visibly firm, plump, and restore overnight. Dense yet never heavy, it sinks in completely and leaves skin transformed by morning: softer, smoother, undeniably renewed.',
  'https://images.unsplash.com/photo-1597931752949-98c74b5b159f?w=800&q=80',
  null
),
(
  'Rooibos Calm Gel Veil',
  'rooibos-calm-gel-veil',
  'moisturizer',
  36.00,
  'For skin that runs warm — oily, combination, reactive, or simply overwhelmed — this water-gel moisturiser is pure relief. Rooibos extract delivers a concentrated hit of antioxidant calm, while centella asiatica soothes redness and reinforces the skin barrier. Niacinamide regulates oil production. The finish is matte-fresh, never tight. Hydration without the heaviness.',
  'https://images.unsplash.com/photo-1748543668687-624e058c367c?w=800&q=80',
  'New'
),
(
  'Baobab Barrier Repair Veil',
  'baobab-barrier-repair-veil',
  'moisturizer',
  68.00,
  'When your skin''s defences are compromised — from over-exfoliation, harsh weather, stress, or sensitivity — this reparative moisturiser is your reset. Baobab seed oil provides an unmatched omega 3-6-9 fatty acid profile that mirrors your skin''s natural lipid composition, while three essential ceramides rebuild the protective matrix from within. Fragrance-free. Dye-free. Dermatologist-tested. Skin that was struggling learns to be strong again.',
  'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800&q=80',
  null
);
