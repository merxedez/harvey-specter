const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

export default function Footer() {
  return (
    <footer className="w-full bg-black pt-12 md:pt-[48px] px-4 md:px-8">

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-12">
        {/* CTA + socials */}
        <div className="flex flex-col gap-4">
          <p
            className="font-light italic uppercase text-white text-[24px] leading-[1.1]"
            style={{ ...interStyle, letterSpacing: '-0.04em' }}
          >
            Have a{' '}
            <span className="font-black not-italic">project</span>
            {' '}in mind?
          </p>
          <button
            className="self-start border border-white text-white text-[14px] font-medium rounded-full px-4 py-3"
            style={{ ...interStyle, letterSpacing: '-0.04em' }}
          >
            Let&apos;s talk
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {['Facebook', 'Instagram', 'X.com', 'Linkedin'].map((s) => (
            <p key={s} className="text-white text-[18px] leading-[1.1] uppercase" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
              {s}
            </p>
          ))}
        </div>

        <div className="w-full h-px bg-white" />

        {/* Legal + label + H.Studio */}
        <div className="flex flex-col gap-4 pb-0 overflow-hidden">
          <div className="flex gap-8 justify-center text-white text-[12px] uppercase" style={{ ...interStyle, letterSpacing: '-0.03em' }}>
            <p className="underline">Licences</p>
            <p className="underline">Privacy Policy</p>
          </div>
          <p className="font-mono text-white text-[10px] leading-[1.1] uppercase">[ Coded By Claude ]</p>
          <p
            className="capitalize font-semibold text-white whitespace-nowrap leading-[0.8]"
            style={{ ...interStyle, fontSize: 'max(64px, 23.4vw)', letterSpacing: '-0.06em' }}
          >
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-[48px]">
        {/* Top row: CTA | social center | social right */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3 w-[298px]">
            <p
              className="font-light italic uppercase text-white text-[24px] leading-[1.1]"
              style={{ ...interStyle, letterSpacing: '-0.04em' }}
            >
              Have a{' '}
              <span className="font-black not-italic">project</span>
              {' '}in mind?
            </p>
            <button
              className="self-start border border-white text-white text-[14px] font-medium rounded-full px-4 py-3"
              style={{ ...interStyle, letterSpacing: '-0.04em' }}
            >
              Let&apos;s talk
            </button>
          </div>

          <div className="text-white text-[18px] text-center uppercase leading-[1.1] w-[298px]" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
            <p className="mb-[1.1em]">Facebook</p>
            <p>Instagram</p>
          </div>

          <div className="text-white text-[18px] text-right uppercase leading-[1.1] w-[298px]" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
            <p className="mb-[1.1em]">X.com</p>
            <p>Linkedin</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white" />

        {/* Bottom: H.Studio clip + legal */}
        <div className="flex items-end justify-between">
          <div
            className="relative overflow-hidden flex-none"
            style={{ width: 'min(1093px, 76vw)', height: '219px' }}
          >
            {/* [ CODED BY CLAUDE ] vertical label */}
            <div
              className="absolute flex items-center justify-center"
              style={{ left: 0, top: '34px', width: '15px', height: '160px' }}
            >
              <p
                className="font-mono text-white text-[14px] leading-[1.1] uppercase whitespace-nowrap"
                style={{ transform: 'rotate(-90deg)' }}
              >
                [ Coded By Claude ]
              </p>
            </div>

            {/* H.Studio large text */}
            <p
              className="absolute capitalize font-semibold text-white whitespace-nowrap"
              style={{
                ...interStyle,
                fontSize: '290px',
                letterSpacing: '-0.06em',
                lineHeight: 0.8,
                left: 0,
                top: '50%',
                transform: 'translateY(-50%) translateY(6.5px)',
              }}
            >
              H.Studio
            </p>
          </div>

          {/* Legal links */}
          <div
            className="flex gap-[34px] pb-8 text-white text-[12px] uppercase whitespace-nowrap text-center flex-none"
            style={{ ...interStyle, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            <p className="underline">Licences</p>
            <p className="underline">Privacy Policy</p>
          </div>
        </div>
      </div>

    </footer>
  )
}
