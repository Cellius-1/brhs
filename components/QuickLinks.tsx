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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Quick Access</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="group relative overflow-hidden rounded-lg p-6 card-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <Icon className="w-8 h-8 text-white mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">{link.name}</h3>
                <p className="text-sm text-gray-200">{link.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
