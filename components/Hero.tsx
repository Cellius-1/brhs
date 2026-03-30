'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-black pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-3">
            <div className="inline-block px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full mb-4">
              <span className="text-red-500 text-sm font-medium">Student Dashboard</span>
            </div>
          </div>
          <div className="mb-4">
            <Image
              src="/branding/Primarylogo.png"
              alt="Bridgewater-Raritan High School Panthers"
              width={2200}
              height={700}
              className="w-full max-w-4xl h-auto mx-auto"
              priority
            />
          </div>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Everything you need, all in one place
          </p>
        </div>
      </div>
    </section>
  )
}
