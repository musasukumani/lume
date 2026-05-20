'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import { usePathname, useSearchParams } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop?category=cleanser', label: 'Cleansers' },
  { href: '/shop?category=serum', label: 'Serums' },
  { href: '/shop?category=moisturizer', label: 'Moisturizers' },
  { href: '/our-story', label: 'Our Story' },
]

export function Navbar() {
  const items = useCartStore((s) => s.items)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [menuOpen, setMenuOpen] = useState(false)

  function isActive(href: string) {
    const [path, query] = href.split('?')
    if (pathname !== path) return false
    if (!query) {
      // /shop with no query is only active when no category is selected
      return path === '/shop' ? !searchParams.has('category') : true
    }
    const linkParams = new URLSearchParams(query)
    for (const [key, val] of linkParams.entries()) {
      if (searchParams.get(key) !== val) return false
    }
    return true
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0D0D0D]/70 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest text-[#C9A84C] hover:text-[#E8D5B0] transition-colors duration-300">
          Lumé
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs tracking-[0.12em] uppercase transition-colors duration-200 ${
                isActive(href)
                  ? 'text-[#C9A84C]'
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-1 text-white/50 hover:text-white/80 transition-colors duration-200">
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C9A84C] text-[#0D0D0D] text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 text-white/50 hover:text-white/80 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-5 flex flex-col gap-4 border-t border-white/5 pt-4 bg-[#0D0D0D]">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs tracking-[0.12em] uppercase transition-colors duration-200 ${
                isActive(href) ? 'text-[#C9A84C]' : 'text-white/40'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
