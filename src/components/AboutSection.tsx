const bigStyle = {
  fontFamily: 'var(--font-inter, Inter, sans-serif)',
  letterSpacing: '-0.08em',
}

const ampStyle = {
  fontFamily: 'var(--font-playfair, serif)',
  fontStyle: 'italic' as const,
}

export default function AboutSection() {
  return (
    <section className="w-full bg-[#f5f5f2] px-4 md:px-8 py-12 md:py-[120px] overflow-hidden">

      {/* Header: label + divider */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase text-right leading-[1.1]">
          [ 8+ years in industry ]
        </p>
        <div className="w-full h-px bg-[#1f1f1f]" />
      </div>

      {/* Mobile: centered stack */}
      <div className="md:hidden flex flex-col items-center gap-2 uppercase">
        <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mb-1">001</p>
        <p className="text-[32px] font-light text-black leading-[0.84] text-center whitespace-nowrap" style={bigStyle}>
          A creative director&nbsp;&nbsp;&nbsp;/
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84] text-center whitespace-nowrap" style={bigStyle}>
          Photographer
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84] text-center whitespace-nowrap" style={bigStyle}>
          Born <span style={ampStyle}>&</span> raised
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84] text-center whitespace-nowrap" style={bigStyle}>
          On the south side
        </p>
        <p className="text-[32px] font-light text-black leading-[0.84] text-center whitespace-nowrap" style={bigStyle}>
          Of chicago.
        </p>
        <p className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] mt-3">
          [ creative freelancer ]
        </p>
      </div>

      {/* Desktop: staircase */}
      <div className="hidden md:flex flex-col gap-2 uppercase">

        {/* Line 1: A creative director / + 001 label */}
        <div className="flex items-start gap-3">
          <p className="font-light text-black leading-[0.84] whitespace-nowrap" style={{ ...bigStyle, fontSize: 'max(40px, 6.67vw)' }}>
            A creative director&nbsp;&nbsp;&nbsp;/
          </p>
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 pt-1">001</span>
        </div>

        {/* Line 2: Photographer — indented ~14.9vw */}
        <p className="font-light text-black leading-[0.84] whitespace-nowrap pl-[14.86vw]" style={{ ...bigStyle, fontSize: 'max(40px, 6.67vw)' }}>
          Photographer
        </p>

        {/* Line 3: Born & raised — indented ~42.4vw */}
        <p className="font-light text-black leading-[0.84] whitespace-nowrap pl-[42.36vw]" style={{ ...bigStyle, fontSize: 'max(40px, 6.67vw)' }}>
          Born <span style={ampStyle}>&</span> raised
        </p>

        {/* Line 4: On the south side — no indent */}
        <p className="font-light text-black leading-[0.84] whitespace-nowrap" style={{ ...bigStyle, fontSize: 'max(40px, 6.67vw)' }}>
          On the south side
        </p>

        {/* Line 5: Of chicago. + [ creative freelancer ] label */}
        <div className="flex items-start gap-4 pl-[42.08vw]">
          <p className="font-light text-black leading-[0.84] whitespace-nowrap" style={{ ...bigStyle, fontSize: 'max(40px, 6.67vw)' }}>
            Of chicago.
          </p>
          <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0 mt-[26px]">
            [ creative freelancer ]
          </span>
        </div>

      </div>
    </section>
  )
}
