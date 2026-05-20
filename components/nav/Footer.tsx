import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 text-white/40 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-2xl text-[#C9A84C] tracking-widest mb-3">Lumé</p>
          <p className="text-sm leading-relaxed mb-4">
            Natural skincare rooted in science. Formulated for every skin type.
          </p>
          <Link href="/our-story" className="text-xs tracking-widest uppercase text-[#C9A84C]/60 hover:text-white/70 transition-colors duration-200">
            Our Story →
          </Link>
        </div>

        <div>
          <p className="text-white/60 font-medium mb-4 text-xs uppercase tracking-widest">Shop</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="/shop" className="hover:text-white/70 transition-colors duration-200">All Products</Link></li>
            <li><Link href="/shop?category=cleanser" className="hover:text-white/70 transition-colors duration-200">Cleansers</Link></li>
            <li><Link href="/shop?category=serum" className="hover:text-white/70 transition-colors duration-200">Serums</Link></li>
            <li><Link href="/shop?category=moisturizer" className="hover:text-white/70 transition-colors duration-200">Moisturizers</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white/60 font-medium mb-4 text-xs uppercase tracking-widest">Support</p>
          <ul className="space-y-3 text-sm">
            <li><Link href="#" className="hover:text-white/70 transition-colors duration-200">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white/70 transition-colors duration-200">Shipping</Link></li>
            <li><Link href="#" className="hover:text-white/70 transition-colors duration-200">Returns</Link></li>
            <li><Link href="#" className="hover:text-white/70 transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white/60 font-medium mb-4 text-xs uppercase tracking-widest">Follow</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white/70 transition-colors duration-200">Instagram</a></li>
            <li><a href="#" className="hover:text-white/70 transition-colors duration-200">TikTok</a></li>
            <li><a href="#" className="hover:text-white/70 transition-colors duration-200">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/20">
          <span>© {new Date().getFullYear()} Lumé. All rights reserved.</span>
          <span className="tracking-widest uppercase text-white/10">Rooted in nature. Refined by science.</span>
        </div>
      </div>
    </footer>
  )
}
