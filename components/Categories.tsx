'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const categories = [
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
    <section className="max-w-7xl mx-auto px-6 py-6 pb-12">
      <h2 className="text-xl font-bold text-white mb-4">Explore More</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="rounded-2xl p-5 bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-700 hover:border-red-600/30 active:scale-[0.98] transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-white">
                {category.name}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
            </div>
            <ul className="space-y-1.5">
              {category.subcategories.slice(0, 3).map((sub) => (
                <li key={sub} className="text-sm text-gray-400 flex items-center">
                  <span className="w-1 h-1 bg-red-600 rounded-full mr-2 flex-shrink-0"></span>
                  <span>{sub}</span>
                </li>
              ))}
              {category.subcategories.length > 3 && (
                <li className="text-xs text-red-500 font-medium pt-1">
                  +{category.subcategories.length - 3} more
                </li>
              )}
            </ul>
          </Link>
        ))}
      </div>
    </section>
  )
}
