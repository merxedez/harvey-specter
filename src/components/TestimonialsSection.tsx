const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

const imgLukasLogo = 'https://www.figma.com/api/mcp/asset/f3a8808d-e5f8-4539-96f1-b8dd3ac8ca01'
const imgMarkoLogo = 'https://www.figma.com/api/mcp/asset/588cbe5b-a36f-46ca-89c4-ef6c14760558'
const imgSarahLogo = 'https://www.figma.com/api/mcp/asset/6c4d3d28-7376-4e44-bacd-0cf7976dd5aa'
const imgSofiaLogo = 'https://www.figma.com/api/mcp/asset/5b55dc6a-5751-4e4e-931c-73a2229b8066'

type Card = {
  logo: string
  logoH: number
  logoW: number
  quote: string
  author: string
  rotate: string
  left: string
  top: number
}

const cards: Card[] = [
  {
    logo: imgMarkoLogo,
    logoH: 19,
    logoW: 143,
    quote: 'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.',
    author: 'Marko Stojković',
    rotate: 'rotate(-6.85deg)',
    left: '7.1%',
    top: 142,
  },
  {
    logo: imgLukasLogo,
    logoH: 19,
    logoW: 138,
    quote: 'Professional, precise, and incredibly fast at handling complex product visualizations and templates.',
    author: 'Lukas Weber',
    rotate: 'rotate(2.9deg)',
    left: '47%',
    top: 272,
  },
  {
    logo: imgSarahLogo,
    logoH: 31,
    logoW: 109,
    quote: 'A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don\'t just make things look good; they solve business problems through visual clarity.',
    author: 'Sarah Jenkins',
    rotate: 'rotate(2.23deg)',
    left: '21.2%',
    top: 553,
  },
  {
    logo: imgSofiaLogo,
    logoH: 36,
    logoW: 81,
    quote: 'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.',
    author: 'Sofia Martínez',
    rotate: 'rotate(-4.15deg)',
    left: '68.5%',
    top: 546,
  },
]

function TestimonialCard({ card, width = 353 }: { card: Card; width?: number }) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4"
      style={{ width }}
    >
      <img
        src={card.logo}
        alt=""
        style={{ height: card.logoH, width: card.logoW }}
        className="object-contain"
      />
      <p
        className="text-[#1f1f1f] text-[18px] leading-[1.3]"
        style={{ ...interStyle, letterSpacing: '-0.04em' }}
      >
        {card.quote}
      </p>
      <p
        className="font-black uppercase text-black text-[16px] leading-[1.1] whitespace-nowrap"
        style={{ ...interStyle, letterSpacing: '-0.04em' }}
      >
        {card.author}
      </p>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#f5f5f2]">

      {/* Desktop: centered title + scattered absolute cards */}
      <div className="hidden md:block relative overflow-hidden" style={{ minHeight: '920px' }}>
        <div className="flex justify-center pt-[120px]">
          <p
            className="capitalize font-medium text-black text-center"
            style={{ ...interStyle, fontSize: '198px', letterSpacing: '-0.07em', lineHeight: 1.1 }}
          >
            Testimonials
          </p>
        </div>
        {cards.map((card) => (
          <div
            key={card.author}
            className="absolute"
            style={{ left: card.left, top: card.top, transform: card.rotate }}
          >
            <TestimonialCard card={card} />
          </div>
        ))}
      </div>

      {/* Mobile: title + horizontally scrollable cards */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p
          className="capitalize font-medium text-black text-center"
          style={{ ...interStyle, fontSize: '64px', letterSpacing: '-0.07em', lineHeight: 0.8 }}
        >
          Testimonials
        </p>
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4 pr-4" style={{ width: 'max-content' }}>
            {cards.slice(0, 2).map((card, i) => (
              <div
                key={card.author}
                style={{ transform: i === 0 ? 'rotate(-3.5deg)' : 'rotate(2deg)' }}
              >
                <TestimonialCard card={card} width={260} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
