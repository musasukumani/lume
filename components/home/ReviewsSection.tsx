const reviews = [
  {
    id: 1,
    name: 'Amara L.',
    rating: 5,
    skinType: 'Combination',
    product: 'Glow Serum',
    text: 'I have tried so many serums and nothing has worked like this one. After two weeks my skin looked visibly brighter and my dark spots started to fade. Completely obsessed.',
  },
  {
    id: 2,
    name: 'Nadia F.',
    rating: 5,
    skinType: 'Dry',
    product: 'Velvet Moisturiser',
    text: "Finally a moisturiser that doesn't feel greasy but still deeply hydrates. My skin stays plump all day and it absorbs in seconds. Worth every cent.",
  },
  {
    id: 3,
    name: 'Thabo M.',
    rating: 5,
    skinType: 'Oily',
    product: 'Gentle Cleansing Balm',
    text: 'As someone with oily skin I was nervous about a balm cleanser but this leaves zero residue and my pores look smaller. Great product.',
  },
  {
    id: 4,
    name: 'Lerato K.',
    rating: 5,
    skinType: 'Sensitive',
    product: 'Glow Serum',
    text: "My skin is very reactive and this serum has caused zero irritation. The glow is real — people keep asking what I'm using. Natural ingredients that actually deliver.",
  },
  {
    id: 5,
    name: 'Sifiso D.',
    rating: 4,
    skinType: 'Normal',
    product: 'Velvet Moisturiser',
    text: 'Lovely texture and a beautiful subtle scent. My skin feels soft from the first application. Packaging is gorgeous too — feels like a proper luxury product.',
  },
  {
    id: 6,
    name: 'Priya N.',
    rating: 5,
    skinType: 'Combination',
    product: 'Gentle Cleansing Balm',
    text: 'This cleanser has completely transformed my evening routine. It melts away makeup and sunscreen effortlessly and my skin never feels tight afterwards.',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill={i < rating ? '#C9A84C' : 'none'}
          stroke="#C9A84C"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  )
}

export function ReviewsSection() {
  const [featured, ...rest] = reviews

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-2 font-light">
            Customer Reviews
          </p>
          <h2 className="font-serif text-3xl font-light text-[#F5F0E8]">
            Real Results, Real People
          </h2>
        </div>
        <div className="text-right hidden sm:block">
          <p className="font-serif text-4xl font-light text-[#C9A84C]">4.9</p>
          <StarRating rating={5} />
          <p className="text-xs text-white/30 mt-1 tracking-widest">Based on 248 reviews</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Featured review — larger, editorial pull-quote style */}
        <div className="sm:col-span-2 lg:col-span-1 relative bg-white/[0.03] border border-white/[0.10] p-7 flex flex-col gap-4 hover:border-white/[0.18] transition-colors duration-300 overflow-hidden">
          <span className="absolute top-2 right-4 font-serif text-[7rem] leading-none text-white/[0.04] select-none pointer-events-none">&ldquo;</span>
          <StarRating rating={featured.rating} />
          <p className="font-serif text-base italic font-light text-[#F5F0E8]/80 leading-relaxed flex-1 relative z-10">
            {featured.text}
          </p>
          <div className="border-t border-white/[0.07] pt-4 flex items-center justify-between">
            <div>
              <p className="text-[#E8D5B0] text-sm font-light">{featured.name}</p>
              <p className="text-white/30 text-xs tracking-widest uppercase mt-0.5">{featured.skinType} skin</p>
            </div>
            <p className="text-[#C9A84C]/60 text-xs tracking-wider uppercase text-right">{featured.product}</p>
          </div>
        </div>

        {rest.map((review) => (
          <div
            key={review.id}
            className="bg-white/[0.03] border border-white/[0.07] p-6 flex flex-col gap-4 hover:border-white/[0.14] transition-colors duration-300"
          >
            <StarRating rating={review.rating} />
            <p className="text-white/60 text-sm leading-relaxed flex-1">{review.text}</p>
            <div className="border-t border-white/[0.07] pt-4 flex items-center justify-between">
              <div>
                <p className="text-[#E8D5B0] text-sm font-light">{review.name}</p>
                <p className="text-white/30 text-xs tracking-widest uppercase mt-0.5">
                  {review.skinType} skin
                </p>
              </div>
              <p className="text-[#C9A84C]/60 text-xs tracking-wider uppercase text-right">
                {review.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
