'use client'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-dark-900 to-dark-800 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
            <span className="text-white">Welcome to </span>
            <span className="gradient-text">BRHS</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
            Bridgewater-Raritan High School's all-in-one student resource hub. Everything you need, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-semibold rounded-xl sm:rounded-lg transition-all active:scale-95 shadow-lg shadow-primary/30 hover:shadow-primary/50 touch-feedback">
              Explore Resources
            </button>
            <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-xl sm:rounded-lg transition-all active:scale-95 touch-feedback">
              Today's Events
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements - Hidden on mobile for cleaner look */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}
