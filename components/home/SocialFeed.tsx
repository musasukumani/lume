import Image from 'next/image'

const posts = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80&auto=format&fit=crop',
    alt: 'Skincare flatlay',
    handle: '@amara.glows',
    caption: 'Glow Serum',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80&auto=format&fit=crop',
    alt: 'Serum drops close up',
    handle: '@skin.by.nadia',
    caption: 'Velvet Moisturiser',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&q=80&auto=format&fit=crop',
    alt: 'Natural skincare products',
    handle: '@lerato.k',
    caption: 'Gentle Cleansing Balm',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80&auto=format&fit=crop',
    alt: 'Morning skincare routine',
    handle: '@priya.skincare',
    caption: 'Glow Serum',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80&auto=format&fit=crop',
    alt: 'Skincare model',
    handle: '@sifiso.d',
    caption: 'Velvet Moisturiser',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500&q=80&auto=format&fit=crop',
    alt: 'Beauty product close up',
    handle: '@thabo.glow',
    caption: 'Gentle Cleansing Balm',
  },
]

export function SocialFeed() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-10">
        <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-2 font-light">
          Community
        </p>
        <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
          The Lumé Glow
        </h2>
        <p className="text-white/30 text-sm mt-3 tracking-widest uppercase">#LumeSkin</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group relative aspect-square overflow-hidden border border-white/[0.07] bg-white/[0.03]"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              quality={75}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-[#0D0D0D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <p className="text-[#C9A84C] text-xs font-light">{post.handle}</p>
              <p className="text-white/60 text-xs tracking-wide mt-0.5">{post.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
