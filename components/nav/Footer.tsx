import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#2D1A0E] text-white/70 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <p className="font-serif text-2xl text-white tracking-widest mb-3">Lumé</p>
          <p className="text-sm leading-relaxed">
            Natural skincare rooted in science. Formulated for every skin type.
          </p>
        </div>

        <div>
          <p className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Shop</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
            <li><Link href="/shop?category=cleanser" className="hover:text-white transition-colors">Cleansers</Link></li>
            <li><Link href="/shop?category=serum" className="hover:text-white transition-colors">Serums</Link></li>
            <li><Link href="/shop?category=moisturizer" className="hover:text-white transition-colors">Moisturizers</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Support</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Shipping</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Returns</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Follow</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Lumé. All rights reserved.
      </div>
    </footer>
  )
}
