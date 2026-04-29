import { client } from '@/sanity/lib/client'
import { PROJECTS_QUERY, type SanityProject } from '@/sanity/lib/queries'

const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

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

function ProjectCard({ project, height, titleSize = '36px' }: { project: SanityProject; height: string; titleSize?: string }) {
  const tags = project.tags ?? ['Social Media', 'Photography']
  return (
    <div className="flex flex-col gap-[10px] w-full">
      <a href={project.link ?? '#'} className="block relative w-full overflow-hidden" style={{ height }}>
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
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
      </a>
      <div className="flex items-center justify-between">
        <p
          className="font-black uppercase text-black leading-[1.1] whitespace-nowrap"
          style={{ ...interStyle, fontSize: titleSize, letterSpacing: '-0.04em' }}
        >
          {project.title}
        </p>
        <a href={project.link ?? '#'} className="w-8 h-8 flex-none -rotate-90 block">
          <img src={imgArrow} alt="" className="w-full h-full" />
        </a>
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
        <p className="italic text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
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

const desktopHeights = ['744px', '699px', '699px', '744px']

export default async function WorkSection() {
  const projects = await client.fetch<SanityProject[]>(PROJECTS_QUERY, {}, { next: { revalidate: 60 } })

  const leftCol: SanityProject[] = projects?.slice(0, 2) ?? []
  const rightCol: SanityProject[] = projects?.slice(2, 4) ?? []

  if (!projects?.length) return null

  return (
    <section className="w-full bg-[#f5f5f2] px-4 md:px-8 py-12 md:py-[80px]">

      {/* Header row */}
      <div className="flex items-start justify-between mb-[61px]">
        <div className="flex gap-[10px] items-start uppercase whitespace-nowrap">
          <div className="font-light text-black leading-[0.86]" style={{ ...interStyle, fontSize: 'max(32px, 6.67vw)', letterSpacing: '-0.08em' }}>
            <p className="leading-[0.86] mb-0">Selected</p>
            <p className="leading-[0.86]">Work</p>
          </div>
          <span className="font-mono text-[#1f1f1f] text-[14px] leading-[1.1] pt-1">004</span>
        </div>
        <div className="hidden md:flex items-center justify-center" style={{ width: '15px', height: '110px' }}>
          <p className="font-mono text-[#1f1f1f] text-[14px] leading-[1.1] uppercase whitespace-nowrap" style={{ transform: 'rotate(-90deg)' }}>
            [ portfolio ]
          </p>
        </div>
      </div>

      {/* Desktop: two-column staggered grid */}
      <div className="hidden md:flex gap-6 items-end">
        <div className="flex-1 min-w-0 flex flex-col gap-[10px]">
          {leftCol.map((p, i) => (
            <ProjectCard key={p._id} project={p} height={desktopHeights[i]} />
          ))}
          <CtaBox />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-[117px] pt-[240px]">
          {rightCol.map((p, i) => (
            <ProjectCard key={p._id} project={p} height={desktopHeights[i + 2]} />
          ))}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden flex flex-col gap-6">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} height="390px" titleSize="24px" />
        ))}
        <CtaBox full />
      </div>

    </section>
  )
}
