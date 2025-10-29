import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import TodaysEvents from '@/components/TodaysEvents'
import Categories from '@/components/Categories'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TodaysEvents />
      <QuickLinks />
      <Categories />
    </main>
  )
}
