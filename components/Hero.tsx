'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const carouselImages = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1508041299212-a295c5d03881?auto=format&fit=crop&w=1400&q=80',
]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselImages.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="absolute inset-0">
        {carouselImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.36), rgba(0,0,0,0.36)), url('${src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto mb-6 w-28 h-28 sm:w-32 sm:h-32">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-white/10 shadow-lg shadow-black/20">
              <Image
                src="/branding/Primarylogo.png"
                alt="BRHS logo"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 mb-4">
            Student Dashboard
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Everything you need, all in one place
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            A modern BRHS dashboard for schedules, clubs, counseling, courses, and daily school life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="/feedback"
              className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-red-500/20 transition hover:bg-red-500"
            >
              Share Feedback
            </a>
            <a
              href="/forms"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Submit a Form
            </a>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white' : 'bg-white/40 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
