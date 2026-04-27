import { Cormorant_Garamond } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '600'],
})

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <h1 className={`${cormorant.className} text-7xl font-light tracking-normal`} style={{ color: '#bbff00' }}>
        cool mercedes
      </h1>
    </div>
  );
}
