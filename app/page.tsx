import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import TodaysEvents from '@/components/TodaysEvents'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      {/* Quick Action Cards */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Lost & Found */}
            <a
              href="/forms"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 p-6 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">🔍</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Lost & Found</h3>
                  <p className="text-amber-100 text-sm">Report or claim items</p>
                </div>
              </div>
            </a>

            {/* New ID Request */}
            <a
              href="/forms"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-700 p-6 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">📋</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">New ID Request</h3>
                  <p className="text-blue-100 text-sm">Get a replacement ID</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <TodaysEvents />
      <QuickLinks />
      <Categories />
    </main>
  )
}
