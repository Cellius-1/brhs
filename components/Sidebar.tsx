'use client'

import Link from 'next/link'
import { X, Home, Library, Trophy, Users, Calendar, GraduationCap, ClipboardList, Utensils, School, BookOpen, HelpCircle } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Media Center', href: '/media-center', icon: Library },
  { name: 'Athletics', href: '/athletics', icon: Trophy },
  { name: 'Clubs', href: '/clubs', icon: Users },
  { name: 'Student Council', href: '/student-council', icon: Users },
  { name: 'Counseling', href: '/counseling', icon: HelpCircle },
  { name: 'Calendars & Schedules', href: '/calendars', icon: Calendar },
  { name: 'Testing Schedule', href: '/testing', icon: ClipboardList },
  { name: 'Lunch Menus', href: '/lunch-menus', icon: Utensils },
  { name: 'NHS', href: '/nhs', icon: BookOpen },
  { name: 'Vo-Tech', href: '/vo-tech', icon: School },
  { name: 'Graduation', href: '/graduation', icon: GraduationCap },
]

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-dark-900 border-r border-dark-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-16 lg:pt-16`}
      >
        <div className="h-full overflow-y-auto scrollbar-hide">
          {/* Close button - Mobile only */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-dark-800 lg:hidden"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation */}
          <nav className="px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-dark-800 hover:text-white transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions */}
          <div className="px-3 py-4 mt-4 border-t border-dark-700">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                href="/forms/student-id"
                onClick={onClose}
                className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-dark-800 hover:text-white transition-colors"
              >
                Student ID Request
              </Link>
              <Link
                href="/forms/lost-found"
                onClick={onClose}
                className="block px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-dark-800 hover:text-white transition-colors"
              >
                Lost & Found
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
