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
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-red-900/20 mobile-app-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <button
                onClick={onMenuClick}
                className="p-2 rounded-lg hover:bg-dark-800 active:scale-95 transition-all lg:hidden touch-feedback"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6 text-white" />
              </button>
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg sm:text-xl">BR</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-lg sm:text-xl font-bold text-white">Bridgewater-Raritan HS</h1>
                  <p className="text-xs text-gray-400">Student Hub</p>
                </div>
                <div className="block sm:hidden">
                  <h1 className="text-base font-bold text-white">BRHS</h1>
                </div>
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile Search Button */}
              <button 
                onClick={() => setShowMobileSearch(true)}
                className="md:hidden p-2 rounded-lg hover:bg-dark-800 active:scale-95 transition-all touch-feedback" 
                aria-label="Search"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>

              <button className="relative p-2 rounded-lg hover:bg-dark-800 active:scale-95 transition-all touch-feedback" aria-label="Notifications">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Overlay */}
      {showMobileSearch && (
        <div className="fixed inset-0 z-[100] bg-black md:hidden">
          <div className="flex items-center gap-3 p-4 border-b border-dark-700">
            <button
              onClick={() => setShowMobileSearch(false)}
              className="p-2 rounded-lg hover:bg-dark-800 active:scale-95 transition-all"
              aria-label="Close search"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                autoFocus
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-500 text-sm">Start typing to search...</p>
          </div>
        </div>
      )}
    </>
  )
}
