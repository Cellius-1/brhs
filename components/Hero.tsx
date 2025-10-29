'use client'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-dark-900 to-dark-800 border-b border-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Welcome to </span>
            <span className="gradient-text">BRHS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Bridgewater-Raritan High School's all-in-one student resource hub. Everything you need, all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/50">
              Explore Resources
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all">
              Today's Events
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}
