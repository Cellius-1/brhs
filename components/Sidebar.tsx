'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Home, Library, Trophy, Users, Calendar, GraduationCap, ClipboardList, Utensils, School, BookOpen, HelpCircle, ChevronRight } from 'lucide-react'

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
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 lg:w-64 bg-black lg:bg-dark-900 border-r border-dark-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-16 lg:pt-16`}
      >
        <div className="h-full overflow-y-auto scrollbar-hide">
          {/* Close button - Mobile only */}
          <div className="lg:hidden flex items-center justify-between p-4 border-b border-dark-700">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-dark-800 active:scale-95 transition-all touch-feedback"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl transition-all group touch-feedback ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary to-red-600 text-white shadow-lg shadow-primary/30' 
                      : 'text-gray-300 hover:bg-dark-800 hover:text-white active:bg-dark-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-primary'} transition-colors`} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  {isActive && (
                    <ChevronRight className="w-5 h-5 text-white lg:hidden" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions - Mobile Enhanced */}
          <div className="px-3 py-4 mt-4 border-t border-dark-700">
            <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                href="/forms/student-id"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-dark-800 hover:text-white active:bg-dark-700 transition-all touch-feedback"
              >
                <span>Student ID Request</span>
                <ChevronRight className="w-4 h-4 lg:hidden" />
              </Link>
              <Link
                href="/forms/lost-found"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-dark-800 hover:text-white active:bg-dark-700 transition-all touch-feedback"
              >
                <span>Lost & Found</span>
                <ChevronRight className="w-4 h-4 lg:hidden" />
              </Link>
            </div>
          </div>

          {/* Mobile App Info */}
          <div className="lg:hidden px-3 py-4 mt-4 border-t border-dark-700">
            <div className="px-4 py-3 rounded-xl bg-dark-800/50">
              <p className="text-xs text-gray-400 mb-1">BRHS Student Hub</p>
              <p className="text-xs text-gray-500">v1.0.0 • All rights reserved</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
