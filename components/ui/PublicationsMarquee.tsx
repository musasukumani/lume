'use client'

/* Each publication gets a distinct typographic treatment that evokes its brand. */
const publications = [
  {
    name: 'VOGUE',
    cls: 'font-serif text-2xl font-light tracking-[0.22em]',
  },
  {
    name: 'ALLURE',
    cls: 'text-sm font-semibold tracking-[0.48em]',
  },
  {
    name: 'Byrdie',
    cls: 'font-serif text-xl font-light italic tracking-[0.08em]',
  },
  {
    name: 'REFINERY29',
    cls: 'text-xs font-semibold tracking-[0.38em]',
  },
  {
    name: 'Into The Gloss',
    cls: 'font-serif text-lg font-light tracking-[0.12em]',
  },
]

/* Duplicate so the second copy fills the gap when the first scrolls out. */
const items = [...publications, ...publications]

export function PublicationsMarquee() {
  return (
    <div className="relative overflow-hidden">
      {/* Fade-out masks on both edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #0A0A0A, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #0A0A0A, transparent)' }}
      />

      <div className="flex items-center lume-marquee">
        {items.map((pub, i) => (
          <span
            key={i}
            className={`${pub.cls} text-white/55 shrink-0 whitespace-nowrap mx-12`}
          >
            {pub.name}
          </span>
        ))}
      </div>
    </div>
  )
}
