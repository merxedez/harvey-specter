const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

const services = [
  {
    num: '[ 1 ]',
    name: 'Brand Discovery',
    desc: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    img: 'https://www.figma.com/api/mcp/asset/45640ce5-b2d7-44de-84b0-e0397f9a548c',
  },
  {
    num: '[ 2 ]',
    name: 'Web Design & Dev',
    desc: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    img: 'https://www.figma.com/api/mcp/asset/4e4b5433-35ae-4b25-8c61-63f9927f9e97',
  },
  {
    num: '[ 3 ]',
    name: 'Marketing',
    desc: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    img: 'https://www.figma.com/api/mcp/asset/606b04cf-cca0-4857-b8af-91c2f1282a2b',
  },
  {
    num: '[ 4 ]',
    name: 'Photography',
    desc: 'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    img: 'https://www.figma.com/api/mcp/asset/d562bde0-091f-4ad0-9470-db1527994250',
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-black px-4 md:px-8 py-12 md:py-[80px]">
      <p className="font-mono text-white text-[14px] leading-[1.1] uppercase mb-8 md:mb-12">
        [ services ]
      </p>

      {/* [4] DELIVERABLES */}
      <div
        className="flex items-center justify-between text-white uppercase mb-12 whitespace-nowrap"
        style={{ ...interStyle, fontWeight: 300, fontSize: 'max(32px, 6.67vw)', letterSpacing: '-0.08em', lineHeight: 1 }}
      >
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service items */}
      <div className="flex flex-col gap-12">
        {services.map((s) => (
          <div key={s.num} className="flex flex-col gap-[9px]">
            <p className="font-mono text-white text-[14px] leading-[1.1] uppercase">{s.num}</p>
            <div className="w-full h-px bg-white" />

            {/* Desktop: name left, description + image right */}
            <div className="hidden md:flex items-start justify-between pt-2">
              <p
                className="font-bold italic uppercase text-white text-[36px] leading-[1.1] whitespace-nowrap"
                style={{ ...interStyle, letterSpacing: '-0.04em' }}
              >
                {s.name}
              </p>
              <div className="flex items-start gap-6">
                <p
                  className="text-white text-[14px] leading-[1.3] w-[393px]"
                  style={{ ...interStyle, letterSpacing: '-0.04em' }}
                >
                  {s.desc}
                </p>
                <div className="w-[151px] h-[151px] flex-none overflow-hidden">
                  <img src={s.img} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden flex flex-col gap-4 pt-2">
              <p
                className="font-bold italic uppercase text-white text-[36px] leading-[1.1]"
                style={{ ...interStyle, letterSpacing: '-0.04em' }}
              >
                {s.name}
              </p>
              <p
                className="text-white text-[14px] leading-[1.3]"
                style={{ ...interStyle, letterSpacing: '-0.04em' }}
              >
                {s.desc}
              </p>
              <div className="w-[151px] h-[151px] overflow-hidden">
                <img src={s.img} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
