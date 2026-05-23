import { PublicationsMarquee } from '@/components/ui/PublicationsMarquee'

export function ExpertEndorsement() {
  return (
    <section className="bg-[#0A0A0A] border-y border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Dermatologist quote */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-14">
          <div className="md:col-span-2 relative">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6 font-light">
              Expert Approved
            </p>
            {/* Decorative large quotation mark */}
            <span className="absolute -top-2 -left-1 font-serif text-[9rem] leading-none text-[#C9A84C]/[0.07] select-none pointer-events-none">
              &ldquo;
            </span>
            <blockquote className="relative z-10 font-serif text-2xl sm:text-3xl font-light text-[#F5F0E8] leading-relaxed mb-6 max-w-2xl">
              Lumé formulations strike a rare balance — botanically rich yet clinically
              sound. The ingredient profiles are clean, non-irritating, and effective across
              all skin types. I recommend them to my patients without hesitation.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-[#C9A84C]/40" />
              <div>
                <p className="text-[#E8D5B0] text-sm font-light">Dr. Naledi Mokoena</p>
                <p className="text-white/35 text-xs tracking-widest uppercase mt-0.5">
                  MBChB · Dermatologist · 14 Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {[
              'Dermatologist Tested',
              'Allergy Tested',
              'Non-Comedogenic',
              'pH Balanced Formulas',
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-3 py-3 px-4 border border-white/[0.07] bg-white/[0.03]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8FA898" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-white/55 text-xs tracking-widest uppercase font-light">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* As seen in */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-center text-white/35 text-xs tracking-[0.4em] uppercase mb-8">
            As Seen In
          </p>
          <PublicationsMarquee />
        </div>

      </div>
    </section>
  )
}
