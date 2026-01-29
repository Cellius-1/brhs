'use client'

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
          <h1 className="text-5xl md:text-6xl font-bold mb-3">
            <span className="gradient-text">BRHS</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto">
            Everything you need, all in one place
          </p>
        </div>
      </div>
    </section>
  )
}
