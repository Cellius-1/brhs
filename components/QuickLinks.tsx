'use client'

import Link from 'next/link'
import { Trophy, Users, Calendar, GraduationCap, ClipboardList, Utensils, FileText, Phone, Book } from 'lucide-react'

const quickLinks = [
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
    name: 'Course Catalog',
    href: '/courses',
    icon: Book,
    description: '400+ courses',
    color: 'from-red-700 to-red-800',
  },
  {
    name: 'Forms',
    href: '/forms',
    icon: FileText,
    description: 'Student ID & Lost/Found',
    color: 'from-red-600 to-red-700',
  },
  {
    name: 'Contact Us',
    href: '/contact',
    icon: Phone,
    description: 'Get in touch',
    color: 'from-red-700 to-red-800',
  },
]

export default function QuickLinks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-xl font-bold text-white mb-4">Quick Access</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {quickLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              className="group relative overflow-hidden rounded-2xl p-5 active:scale-[0.98] transition-transform bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-700 hover:border-red-600/30"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{link.name}</h3>
                <p className="text-xs text-gray-400">{link.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
