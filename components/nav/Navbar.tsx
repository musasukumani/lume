'use client'

import Link from 'next/link'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/lib/store/cart'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Navbar() {
  const items = useCartStore((s) => s.items)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F5EDE0]/95 backdrop-blur-sm border-b border-[#8C6B50]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl tracking-widest text-[#2D1A0E]">
          Lumé
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8C6B50]">
          <Link href="/shop" className="hover:text-[#2D1A0E] transition-colors">Shop</Link>
          <Link href="/shop?category=cleanser" className="hover:text-[#2D1A0E] transition-colors">Cleansers</Link>
          <Link href="/shop?category=serum" className="hover:text-[#2D1A0E] transition-colors">Serums</Link>
          <Link href="/shop?category=moisturizer" className="hover:text-[#2D1A0E] transition-colors">Moisturizers</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-1">
            <ShoppingBag className="w-5 h-5 text-[#2D1A0E]" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#3D1F0F] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1"
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <X className="w-5 h-5 text-[#2D1A0E]" />
              : <Menu className="w-5 h-5 text-[#2D1A0E]" />
            }
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-[#8C6B50] border-t border-[#8C6B50]/20 pt-3">
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/shop?category=cleanser" onClick={() => setMenuOpen(false)}>Cleansers</Link>
          <Link href="/shop?category=serum" onClick={() => setMenuOpen(false)}>Serums</Link>
          <Link href="/shop?category=moisturizer" onClick={() => setMenuOpen(false)}>Moisturizers</Link>
        </div>
      )}
    </header>
  )
}
