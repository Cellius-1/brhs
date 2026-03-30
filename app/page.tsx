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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

            {/* Honors Societies */}
            <a
              href="/nhs"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 p-6 active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl" aria-hidden="true">🏅</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Honors Societies</h3>
                  <p className="text-violet-100 text-sm">By-laws, advisors, and invitation requirements</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Yearbook Photo Submission */}
      <section className="py-2 px-6">
        <div className="max-w-7xl mx-auto">
          <a
            href="/forms"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-600 to-rose-700 p-6 active:scale-[0.98] transition-transform"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl" aria-hidden="true">📸</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Submit Photos to the Yearbook</h3>
                <p className="text-fuchsia-100 text-sm">Share school events, clubs, sports, and candid moments</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Subtle Feedback Prompt */}
      <section className="py-3 px-6">
        <div className="max-w-7xl mx-auto">
          <a
            href="/feedback"
            className="block rounded-2xl border border-dark-700 bg-dark-900/70 px-5 py-4 hover:border-red-600/30 transition-colors"
            aria-label="Give feedback about the website"
          >
            <p className="text-sm text-gray-300">
              Help us improve this site. <span className="text-primary font-semibold">Share website feedback</span> in under 2 minutes.
            </p>
          </a>
        </div>
      </section>

      <TodaysEvents />
      <QuickLinks />
      <Categories />
    </main>
  )
}
