const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

const imgSurfers = 'https://www.figma.com/api/mcp/asset/a4ad994f-b235-4f8e-a39c-85b679598471'
const imgCyberpunk = 'https://www.figma.com/api/mcp/asset/020f97d8-dc55-4f53-a988-d75aa947496a'
const imgAgency = 'https://www.figma.com/api/mcp/asset/b2a28d18-a2a5-443f-bd75-100de6d2c45f'
const imgMinimal = 'https://www.figma.com/api/mcp/asset/f618442e-417e-41bc-bd5f-a4d53cda994c'
const imgArrow = 'https://www.figma.com/api/mcp/asset/db1dc7fe-18c3-4637-8843-a70bd45e866a'

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

const tags = ['Social Media', 'Photography']

function ProjectCard({ img, title, height }: { img: string; title: string; height: string }) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[#111] text-[14px] font-medium"
              style={{ ...interStyle, letterSpacing: '-0.04em' }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className="font-black uppercase text-black text-[36px] leading-[1.1] whitespace-nowrap"
          style={{ ...interStyle, letterSpacing: '-0.04em' }}
        >
          {title}
        </p>
        <div className="w-8 h-8 flex-none -rotate-90">
          <img src={imgArrow} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

function MobileProjectCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <div className="relative w-full overflow-hidden h-[390px]">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[#111] text-[14px] font-medium"
              style={{ ...interStyle, letterSpacing: '-0.04em' }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p
          className="font-black uppercase text-black text-[24px] leading-[1.1] whitespace-nowrap"
          style={{ ...interStyle, letterSpacing: '-0.04em' }}
        >
          {title}
        </p>
        <div className="w-8 h-8 flex-none -rotate-90">
          <img src={imgArrow} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  )
}

function CtaBox({ full }: { full?: boolean }) {
  return (
    <div className={`flex items-stretch gap-3 ${full ? 'w-full' : 'w-[465px]'}`}>
      <div className="flex flex-col justify-between flex-none w-6">
        <CornerTL />
        <CornerBL />
      </div>
      <div className="flex-1 flex flex-col gap-[10px] justify-center py-3">
        <p
          className="italic text-[#1f1f1f] text-[14px] leading-[1.3]"
          style={{ ...interStyle, letterSpacing: '-0.04em' }}
        >
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start px-4 py-3 bg-black text-white text-[14px] font-medium rounded-full" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between flex-none w-6">
        <CornerTR />
        <CornerBR />
      </div>
    </div>
  )
}

export default function WorkSection() {
  return (
    <section className="w-full bg-[#f5f5f2] px-4 md:px-8 py-12 md:py-[80px]">

      {/* Header row */}
      <div className="flex items-start justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div
            className="font-light text-black leading-[0.86]"
            style={{ ...interStyle, fontSize: 'max(32px, 6.67vw)', letterSpacing: '-0.08em' }}
          >
            <p className="leading-[0.86] mb-0">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <span className="font-mono text-[#1f1f1f] text-[14px] leading-[1.1] pt-1">004</span>
        </div>
        <div className="hidden md:flex items-center justify-center" style={{ width: '15px', height: '110px' }}>
          <p
            className="font-mono text-[#1f1f1f] text-[14px] leading-[1.1] uppercase whitespace-nowrap"
            style={{ transform: 'rotate(-90deg)' }}
          >
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Desktop: two-column staggered grid */}
      <div className="hidden md:flex gap-6 items-end">
        {/* Left column */}
        <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
          <ProjectCard img={imgSurfers} title="Surfers paradise" height="744px" />
          <ProjectCard img={imgCyberpunk} title="Cyberpunk caffe" height="699px" />
          <CtaBox />
        </div>

        {/* Right column, offset down */}
        <div className="flex-1 min-w-0 flex flex-col gap-[117px] pt-[240px]">
          <ProjectCard img={imgAgency} title="Agency 976" height="699px" />
          <ProjectCard img={imgMinimal} title="Minimal Playground" height="744px" />
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-6">
        <MobileProjectCard img={imgSurfers} title="Surfers paradise" />
        <MobileProjectCard img={imgCyberpunk} title="Cyberpunk caffe" />
        <MobileProjectCard img={imgAgency} title="Agency 976" />
        <MobileProjectCard img={imgMinimal} title="Minimal Playground" />
        <CtaBox full />
      </div>

    </section>
  )
}
