'use client'

import { Database, BookOpen, Globe, Newspaper, ExternalLink } from 'lucide-react'

const databases = [
  { name: 'EBSCOHost Database', url: '#', password: 'View Password' },
  { name: 'Facts On File', url: '#' },
  { name: 'GALE', url: '#' },
  { name: 'ProQuest and SIRS', url: '#' },
  { name: 'JSTOR', url: '#' },
  { name: 'JSTORE Global Plants', url: '#' },
  { name: 'Gale Virtual Reference Library', url: '#' },
  { name: 'Infobase Books', url: '#' },
  { name: 'World Book Online Student', url: '#' },
  { name: 'Credo Source Reference', url: '#' },
]

const additionalResources = [
  { name: 'ProQuest Historical Newspapers: New York Times', url: '#' },
  { name: 'World Book Timelines', url: '#' },
  { name: 'Jersey Clicks', url: '#' },
  { name: 'Google Scholar', url: '#' },
  { name: 'Purdue Writing Lab', url: '#' },
  { name: 'MyBib Citation Generator', url: '#' },
  { name: 'John Basilone Reference Center', url: '#' },
]

export default function MediaCenter() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Media Center
          </h1>
          <p className="text-xl text-gray-400">
            Access research databases, library catalog, and additional resources
          </p>
        </div>

        {/* Library Staff Section */}
        <div className="glass-effect rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Library Staff</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Abbe Rubin</h3>
              <p className="text-primary mb-2">Library Media Specialist</p>
              <p className="text-gray-400 mb-2">Extension: x477072</p>
              <a href="#" className="text-primary hover:underline flex items-center gap-2">
                Mrs. Rubin's Library Google Site <ExternalLink className="w-4 h-4" />
              </a>
              <ul className="mt-4 space-y-1 text-gray-300 text-sm">
                <li>• Reserve library space</li>
                <li>• Request library classes</li>
              </ul>
            </div>

            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-2">Linda Schulte</h3>
              <p className="text-primary mb-2">Library Technician</p>
              <p className="text-gray-400">Extension: x477071</p>
            </div>
          </div>
        </div>

        {/* Electronic Databases */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Electronic Databases and Electronic Books</h2>
          <div className="glass-effect rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {databases.map((db) => (
                <a
                  key={db.name}
                  href={db.url}
                  className="flex items-center justify-between px-4 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg text-white transition-colors group"
                >
                  <span className="group-hover:text-primary transition-colors">{db.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </a>
              ))}
            </div>
            <div className="bg-dark-900 rounded-lg p-4 border border-dark-700">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Login Information:</strong> Username is our state and zip code; password is our mascot. 
                (EBSCOHost add -2024 to password)
              </p>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
          <div className="glass-effect rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  className="flex items-center justify-between px-4 py-3 bg-dark-800 hover:bg-dark-700 rounded-lg text-white transition-colors group"
                >
                  <span className="group-hover:text-primary transition-colors">{resource.name}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Library Hours & Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Library Hours</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong className="text-white">Morning:</strong> 6:45 AM - 7:15 AM (M-F)</p>
              <p><strong className="text-white">After School:</strong> 2:10 PM - 3:10 PM (M-F)</p>
              <p><strong className="text-white">During School:</strong> Blocks 1-6 with a pass</p>
              <p className="pt-4 border-t border-dark-700"><strong className="text-white">Unit Lunch:</strong> With a Student ID</p>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Destiny Library Catalog</h2>
            <p className="text-gray-400 mb-6">
              Search our collection of books, media, and resources through the Destiny Library Catalog.
            </p>
            <button className="w-full px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
              Access Destiny Library Catalog
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
