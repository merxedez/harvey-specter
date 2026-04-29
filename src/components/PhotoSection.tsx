const imgDesktop = 'https://www.figma.com/api/mcp/asset/3640069e-cdcf-4da3-b827-5808be308a0e'
const imgMobile = 'https://www.figma.com/api/mcp/asset/7e6b36d1-68d8-4fe5-9f1e-74bb20087d6a'

export default function PhotoSection() {
  return (
    <section className="w-full overflow-hidden">
      <div className="hidden md:block w-full h-[560px]">
        <img src={imgDesktop} alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="md:hidden w-full h-[480px]">
        <img src={imgMobile} alt="" className="w-full h-full object-cover object-center" />
      </div>
    </section>
  )
}
