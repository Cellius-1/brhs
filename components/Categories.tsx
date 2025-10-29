'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const categories = [
  {
    name: 'Media Center',
    subcategories: ['Access to Databases', 'Webpage', 'Catalog', 'In the Know While You Go'],
    href: '/media-center',
  },
  {
    name: 'Athletics',
    subcategories: ['Events', 'Tickets', 'Athletic Forms', 'Coaching Staff', 'Tryout Info', 'Panthers Live'],
    href: '/athletics',
  },
  {
    name: 'Counseling Office',
    subcategories: ['Naviance', 'Counselor Appointments', 'BRTV Announcements', 'Student Handbook'],
    href: '/counseling',
  },
  {
    name: 'Clubs & Activities',
    subcategories: ['Daily Meetings', 'Google Classroom Codes', 'Student Council', 'NHS'],
    href: '/clubs',
  },
  {
    name: 'Calendars & Schedules',
    subcategories: ['Bell Schedules', 'Academic Calendar', 'Block Rotation', 'Testing Schedule'],
    href: '/calendars',
  },
  {
    name: 'Resources',
    subcategories: ['Lunch Menus', 'Vo-Tech', 'Graduation Info', 'School Events', 'Forms'],
    href: '/resources',
  },
]

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-8 px-2 sm:px-0">Explore Categories</h2>
      
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
        <div className="flex gap-4 pb-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="glass-effect rounded-2xl p-5 min-w-[280px] flex-shrink-0 active:scale-95 transition-all touch-feedback"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">
                  {category.name}
                </h3>
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <ChevronRight className="w-4 h-4 text-primary" />
                </div>
              </div>
              <ul className="space-y-2">
                {category.subcategories.slice(0, 3).map((sub) => (
                  <li key={sub} className="text-sm text-gray-400 flex items-center">
                    <span className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                    <span className="truncate">{sub}</span>
                  </li>
                ))}
                {category.subcategories.length > 3 && (
                  <li className="text-xs text-primary font-semibold pt-1">
                    +{category.subcategories.length - 3} more →
                  </li>
                )}
              </ul>
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="glass-effect rounded-lg p-6 card-hover group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
            <ul className="space-y-2">
              {category.subcategories.slice(0, 4).map((sub) => (
                <li key={sub} className="text-sm text-gray-400 flex items-center">
                  <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                  {sub}
                </li>
              ))}
              {category.subcategories.length > 4 && (
                <li className="text-sm text-primary font-semibold">
                  +{category.subcategories.length - 4} more
                </li>
              )}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
