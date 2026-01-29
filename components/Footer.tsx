import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 mt-auto mobile-safe-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {/* Mobile: Compact Footer */}
        <div className="md:hidden space-y-4">
          <div className="text-center">
            <h3 className="text-base font-bold text-white mb-2">Bridgewater-Raritan High School</h3>
            <p className="text-gray-400 text-xs px-4">
              Your comprehensive resource center for everything BRHS.
            </p>
          </div>

          <div className="flex justify-center gap-8 text-xs">
            <div className="flex items-center space-x-1.5 text-gray-400">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>(908) 685-2777</span>
            </div>
            <div className="flex items-center space-x-1.5 text-gray-400">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>Contact</span>
            </div>
          </div>

          <div className="text-center pt-3 border-t border-dark-700">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} BRHS • Go Panthers! 🐾
            </p>
          </div>
        </div>

        {/* Desktop: Full Footer */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Bridgewater-Raritan High School</h3>
              <p className="text-gray-400 text-sm">
                Your comprehensive resource center for everything BRHS. 
                Stay informed, stay connected.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/calendars" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    School Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/athletics" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    Athletics
                  </Link>
                </li>
                <li>
                  <Link href="/counseling" className="text-gray-400 hover:text-primary text-sm transition-colors">
                    Counseling Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bridgewater-Raritan High School</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>(908) 685-2777</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@brrsd.k12.nj.us</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-dark-700 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} BRHS Student Hub. All rights reserved. | Go Panthers! 🐾
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
