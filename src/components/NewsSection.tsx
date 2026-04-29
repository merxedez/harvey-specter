const interStyle = { fontFamily: 'var(--font-inter, Inter, sans-serif)' }

const imgMakerSpace = 'https://www.figma.com/api/mcp/asset/e80e71f0-371f-4352-a260-d43beb9600d9'
const imgEames = 'https://www.figma.com/api/mcp/asset/127dac84-105b-4451-ac70-ff799278eb18'
const imgBooks = 'https://www.figma.com/api/mcp/asset/6406b7be-4336-48a1-8231-be2cc0217011'
const imgArrow = 'https://www.figma.com/api/mcp/asset/d24229c1-003e-4f67-b1b3-69af6607ca4f'

const articles = [
  { img: imgMakerSpace, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', offset: false },
  { img: imgEames, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', offset: true },
  { img: imgBooks, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', offset: false },
]

function ReadMoreLink() {
  return (
    <div className="inline-flex items-center gap-[10px] border-b border-black pb-1">
      <span className="text-black text-[14px] font-medium" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
        Read more
      </span>
      <div className="w-[18px] h-[18px] flex-none -rotate-90">
        <img src={imgArrow} alt="" className="w-full h-full" />
      </div>
    </div>
  )
}

export default function NewsSection() {
  return (
    <section className="w-full bg-[#f3f3f3] px-4 md:px-8 py-12 md:py-[120px]">

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col gap-8">
        <p
          className="font-light text-black uppercase leading-[0.86]"
          style={{ ...interStyle, fontSize: '32px', letterSpacing: '-0.08em' }}
        >
          Keep up with my latest news &amp; achievements
        </p>
        <div className="flex flex-col gap-6">
          {articles.map((a, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full overflow-hidden" style={{ height: '300px' }}>
                <img src={a.img} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
                {a.desc}
              </p>
              <ReadMoreLink />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex items-end justify-between">

        {/* Vertical rotated heading */}
        <div className="flex-none flex items-center justify-center" style={{ width: '110px', height: '706px' }}>
          <div
            className="font-light text-black uppercase whitespace-nowrap"
            style={{ ...interStyle, fontSize: '64px', letterSpacing: '-0.08em', lineHeight: 0.86, transform: 'rotate(-90deg)' }}
          >
            <p className="leading-[0.86] mb-0">Keep up with my latest</p>
            <p className="leading-[0.86]">news &amp; achievements</p>
          </div>
        </div>

        {/* 3 article cards */}
        <div className="flex flex-1 min-w-0 gap-0 items-start">
          {articles.map((a, i) => (
            <div key={i} className="contents">
              <div
                className="flex flex-col gap-4 flex-1 min-w-0"
                style={{ paddingTop: a.offset ? '120px' : 0 }}
              >
                <div className="relative w-full overflow-hidden" style={{ height: '469px' }}>
                  <img src={a.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ ...interStyle, letterSpacing: '-0.04em' }}>
                  {a.desc}
                </p>
                <ReadMoreLink />
              </div>
              {i < articles.length - 1 && (
                <div className="w-px bg-[#1f1f1f] self-stretch mx-8" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
