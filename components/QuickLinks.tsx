'use client'

import Link from 'next/link'
import { Library, Trophy, Users, Calendar, GraduationCap, ClipboardList, Utensils, FileText } from 'lucide-react'

const quickLinks = [
  {
    name: 'Media Center',
    href: '/media-center',
    icon: Library,
    description: 'Access databases & catalog',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Athletics',
    href: '/athletics',
    icon: Trophy,
    description: 'Events, tickets & more',
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Clubs',
    href: '/clubs',
    icon: Users,
    description: 'Meeting times & codes',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Calendars',
    href: '/calendars',
    icon: Calendar,
    description: 'Schedules & rotations',
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Graduation',
    href: '/graduation',
    icon: GraduationCap,
    description: 'Important info',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Testing',
    href: '/testing',
    icon: ClipboardList,
    description: 'AP & other exams',
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Lunch Menus',
    href: '/lunch-menus',
    icon: Utensils,
    description: "This week's meals",
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Forms',
    href: '/forms',
    icon: FileText,
    description: 'Student ID & Lost/Found',
    color: 'from-red-700 to-red-800',
  },
]

export default function QuickLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 md:mb-8 px-2 sm:px-0">Quick Access</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl md:rounded-lg p-5 md:p-6 active:scale-95 transition-all touch-feedback"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-90 md:opacity-80 md:group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <Icon className="w-7 h-7 md:w-8 md:h-8 text-white mb-2 md:mb-3" />
                <h3 className="text-base md:text-lg font-bold text-white mb-1">{link.name}</h3>
                <p className="text-xs md:text-sm text-gray-100 md:text-gray-200">{link.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
