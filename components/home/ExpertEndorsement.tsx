export function ExpertEndorsement() {
  return (
    <section className="bg-[#0A0A0A] border-y border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Dermatologist quote */}
        <div className="grid md:grid-cols-3 gap-10 items-start mb-14">
          <div className="md:col-span-2">
            <p className="text-[#C9A84C] text-xs uppercase tracking-[0.3em] mb-6 font-light">
              Expert Approved
            </p>
            <blockquote className="font-serif text-2xl sm:text-3xl font-light text-[#F5F0E8] leading-relaxed mb-6">
              &ldquo;Lumé formulations strike a rare balance — botanically rich yet clinically
              sound. The ingredient profiles are clean, non-irritating, and effective across
              all skin types. I recommend them to my patients without hesitation.&rdquo;
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

          <div className="flex flex-col gap-4">
            {[
              { label: 'Dermatologist Tested', icon: '✦' },
              { label: 'Allergy Tested', icon: '✦' },
              { label: 'Non-Comedogenic', icon: '✦' },
              { label: 'pH Balanced Formulas', icon: '✦' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 py-3 px-4 border border-white/[0.07] bg-white/[0.03]"
              >
                <span className="text-[#C9A84C] text-xs">{item.icon}</span>
                <span className="text-white/55 text-xs tracking-widest uppercase font-light">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* As seen in */}
        <div className="border-t border-white/5 pt-10">
          <p className="text-center text-white/20 text-xs tracking-[0.4em] uppercase mb-8">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {['Vogue', 'Allure', 'Byrdie', 'Refinery29', 'Into The Gloss'].map((pub) => (
              <span
                key={pub}
                className="font-serif text-lg font-light text-white/20 hover:text-white/40 transition-colors tracking-wider"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
