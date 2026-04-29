'use client'

import { useState } from 'react'

const navLinks = ['About', 'Services', 'Projects', 'News', 'Contact']

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
      />

      {/* Bottom frosted glass overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-white/[0.01]" />

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className="absolute top-6 right-4"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white text-2xl font-semibold tracking-[-0.04em] capitalize"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            className="mt-4 px-4 py-3 bg-white text-black text-sm font-medium tracking-[-0.04em] rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Let's talk
          </button>
        </div>
      )}

      {/* Layout */}
      <div className="relative flex flex-col min-h-screen px-4 md:px-8 pb-6 md:pb-0 justify-between md:justify-start md:gap-[240px]">

        {/* Navbar */}
        <nav className="flex items-center justify-between py-6">
          <span className="text-base font-semibold tracking-[-0.04em] text-black capitalize">
            H.Studio
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-14 text-base font-semibold tracking-[-0.04em] text-black capitalize">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center justify-center px-4 py-3 bg-black text-white text-sm font-medium tracking-[-0.04em] rounded-full">
            Let's talk
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </nav>

        {/* Hero content */}
        <div className="flex flex-col h-[341px] justify-between items-center md:h-auto md:justify-start md:items-start w-full">

          {/* Name block */}
          <div className="flex flex-col items-center w-full md:pb-[15px]">
            <div className="flex w-full justify-center md:justify-start mb-[-15px]">
              <p
                className="font-mono text-white uppercase mix-blend-overlay whitespace-nowrap"
                style={{ fontSize: '14px', lineHeight: 1.1 }}
              >
                [ Hello i'm ]
              </p>
            </div>
            <h1
              className="w-full text-center md:text-left text-white mix-blend-overlay capitalize font-medium leading-[1.1]"
              style={{
                fontFamily: 'var(--font-inter, Inter, sans-serif)',
                fontSize: 'max(96px, 14.5vw)',
                letterSpacing: '-0.07em',
              }}
            >
              <span className="block md:inline">Harvey</span>
              <span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>
              <span className="block md:inline">Specter</span>
            </h1>
          </div>

          {/* Description + CTA */}
          <div className="w-full md:flex md:justify-end">
            <div className="flex flex-col gap-[17px] items-start md:w-[294px]">
              <p className="font-bold italic uppercase text-[#1f1f1f] text-sm tracking-[-0.04em] leading-[1.1]">
                H.Studio is a <span className="font-normal">full-service</span> creative
                studio creating beautiful digital experiences and products. We are an{' '}
                <span className="font-normal">award winning</span> design and art group
                specializing in branding, web design and engineering.
              </p>
              <button className="px-4 py-3 bg-black text-white text-sm font-medium tracking-[-0.04em] rounded-full">
                Let's talk
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
