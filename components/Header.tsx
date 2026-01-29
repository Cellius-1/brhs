'use client'

import Link from 'next/link'
import { Menu, Bell, Search, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onMenuClick}
                className="p-2 rounded-xl active:scale-[0.95] transition-transform lg:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
              <Link href="/" className="flex items-center space-x-2.5">
                <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BR</span>
                </div>
                <div>
                  <h1 className="text-base font-bold text-white">BRHS</h1>
                  <p className="text-[10px] text-gray-500 hidden sm:block">Student Hub</p>
                </div>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setShowMobileSearch(true)}
                className="p-2 rounded-xl active:scale-[0.95] transition-transform" 
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-white" />
              </button>

              <button className="relative p-2 rounded-xl active:scale-[0.95] transition-transform" aria-label="Notifications">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-[100] bg-black">
          <div className="flex items-center gap-3 p-6 border-b border-dark-700">
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-xl active:scale-[0.95] transition-transform"
              aria-label="Close search"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full pl-11 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-500 text-sm">Start typing to search...</p>
          </div>
        </div>
      )}
    </>
  )
}
