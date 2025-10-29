'use client'

import Link from 'next/link'
import { Menu, Bell, Search } from 'lucide-react'

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 rounded-lg hover:bg-dark-800 transition-colors lg:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BR</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Bridgewater-Raritan HS</h1>
                <p className="text-xs text-gray-400">Student Hub</p>
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
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-lg hover:bg-dark-800 transition-colors" aria-label="Notifications">
              <Bell className="w-6 h-6 text-white" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
