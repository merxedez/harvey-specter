function CornerTL() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M14 2H2V14" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}
function CornerBL() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2V14H14" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}
function CornerTR() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 2H14V14" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}
function CornerBR() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M14 2V14H2" stroke="#1F1F1F" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  )
}

const bioText =
  'Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.'

export default function BioSection() {
  return (
    <section className="w-full bg-[#f5f5f2] px-4 md:px-8 py-12 md:py-[80px]">

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-5">
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">002</p>
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</p>

        {/* Bracketed text block */}
        <div className="flex items-stretch gap-3">
          <div className="flex flex-col justify-between flex-none w-4">
            <CornerTL />
            <CornerBL />
          </div>
          <p
            className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] py-3"
            style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', letterSpacing: '-0.04em' }}
          >
            {bioText}
          </p>
          <div className="flex flex-col justify-between flex-none w-4">
            <CornerTR />
            <CornerBR />
          </div>
        </div>

        {/* Portrait */}
        <div className="w-full aspect-[422/594] overflow-hidden">
          <img
            src="/portrait.jpg"
            alt="Harvey Specter portrait"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-start justify-between">

        {/* Left: [ About ] label */}
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap flex-none">
          [ About ]
        </p>

        {/* Right: text block + portrait, bottom-aligned */}
        <div className="flex items-end gap-8 flex-1 ml-8">

          {/* Bracketed text block */}
          <div className="flex-1 flex items-stretch gap-3">
            <div className="flex flex-col justify-between flex-none w-6">
              <CornerTL />
              <CornerBL />
            </div>
            <p
              className="flex-1 text-[14px] text-[#1f1f1f] leading-[1.3] py-3"
              style={{ fontFamily: 'var(--font-inter, Inter, sans-serif)', letterSpacing: '-0.04em' }}
            >
              {bioText}
            </p>
            <div className="flex flex-col justify-between flex-none w-6">
              <CornerTR />
              <CornerBR />
            </div>
          </div>

          {/* 002 label + portrait */}
          <div className="flex items-start gap-6 flex-none">
            <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1]">002</p>
            <div className="w-[436px] h-[614px] overflow-hidden flex-none">
              <img
                src="/portrait.jpg"
                alt="Harvey Specter portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
