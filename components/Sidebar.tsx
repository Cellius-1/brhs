'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, Home, Library, Trophy, Users, Calendar, GraduationCap, ClipboardList, Utensils, School, BookOpen, HelpCircle, ChevronRight, Phone, Book } from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Athletics', href: '/athletics', icon: Trophy },
  { name: 'Clubs', href: '/clubs', icon: Users },
  { name: 'Calendars & Schedules', href: '/calendars', icon: Calendar },
  { name: 'Course Catalog', href: '/courses', icon: Book },
  { name: 'Lunch Menus', href: '/lunch-menus', icon: Utensils },
  { name: 'Student Council', href: '/student-council', icon: Users },
  { name: 'Counseling', href: '/counseling', icon: HelpCircle },
  { name: 'Testing Schedule', href: '/testing', icon: ClipboardList },
  { name: 'NHS', href: '/nhs', icon: BookOpen },
  { name: 'Vo-Tech', href: '/vo-tech', icon: School },
  { name: 'Graduation', href: '/graduation', icon: GraduationCap },
  { name: 'Contact Us', href: '/contact', icon: Phone },
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
        className={`fixed lg:static inset-y-0 left-0 z-40 w-80 lg:w-64 bg-black border-r border-dark-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-16`}
      >
        <div className="h-full overflow-y-auto scrollbar-hide pb-6">
          {/* Close button - Mobile only */}
          <div className="lg:hidden flex items-center justify-between p-6 border-b border-dark-700">
            <h2 className="text-lg font-bold text-white">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl active:scale-[0.95] transition-transform"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-4 py-6 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center px-4 py-3 rounded-2xl transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                      : 'text-gray-400 active:bg-dark-800'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className={`font-medium text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Quick Actions */}
          <div className="px-4 py-4 mt-2 border-t border-dark-700">
            <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Quick Actions
            </h3>
            <div className="space-y-1">
              <Link
                href="/forms"
                onClick={onClose}
                className="flex items-center px-4 py-2.5 rounded-2xl text-sm text-gray-400 active:bg-dark-800 transition-all"
              >
                <span>Student ID Request</span>
              </Link>
              <Link
                href="/forms"
                onClick={onClose}
                className="flex items-center px-4 py-2.5 rounded-2xl text-sm text-gray-400 active:bg-dark-800 transition-all"
              >
                <span>Lost & Found</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
