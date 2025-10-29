'use client'

import { Trophy, Ticket, FileText, Users, Calendar, Tv, BookOpen, ShoppingBag } from 'lucide-react'

const sections = [
  {
    title: 'Daily & Weekly Events',
    icon: Calendar,
    description: 'Stay updated with all Panthers sports events',
    content: [
      'Today: Basketball vs. Central High - 4:00 PM (Home)',
      'Wednesday: Wrestling Match - 5:30 PM (Away)',
      'Friday: Swimming Championships - 6:00 PM (Home)',
      'Saturday: Track & Field Meet - 9:00 AM (Away)',
    ],
  },
  {
    title: 'Tickets',
    icon: Ticket,
    description: 'Purchase tickets for upcoming games',
    content: [
      'Get tickets for all BRHS athletic events through GoFan',
    ],
    links: [
      { name: 'GoFan - Purchase Tickets', url: 'https://gofan.co/' },
    ],
  },
  {
    title: 'Athletic Forms',
    icon: FileText,
    description: 'Required forms for student athletes',
    links: [
      { name: 'Physical Examination Form', url: '#' },
      { name: 'Parent Consent Form', url: '#' },
      { name: 'Emergency Contact Form', url: '#' },
      { name: 'Concussion Awareness Form', url: '#' },
    ],
  },
  {
    title: 'Coaching Staff',
    icon: Users,
    description: 'Meet our dedicated coaches',
    links: [
      { name: 'Basketball - Coach Johnson', url: '#' },
      { name: 'Football - Coach Williams', url: '#' },
      { name: 'Soccer - Coach Martinez', url: '#' },
      { name: 'Track & Field - Coach Davis', url: '#' },
      { name: 'View All Staff', url: '#' },
    ],
  },
  {
    title: 'Tryout Information',
    icon: Trophy,
    description: 'Tryout schedules and requirements',
    content: [
      'Fall Sports Tryouts: August 15-20',
      'Winter Sports Tryouts: November 1-5',
      'Spring Sports Tryouts: February 15-20',
      'Requirements: Current physical, 2.0 GPA minimum',
    ],
  },
  {
    title: 'Panthers LIVE',
    icon: Tv,
    description: 'Watch Panthers games live online',
    links: [
      { name: 'Watch Live Stream', url: 'https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school' },
    ],
  },
  {
    title: 'Student Handbook',
    icon: BookOpen,
    description: 'Athletic policies and guidelines',
    links: [
      { name: 'View Handbook (PDF)', url: '#' },
      { name: 'Eligibility Requirements', url: '#' },
      { name: 'Code of Conduct', url: '#' },
    ],
  },
  {
    title: 'Panthers Apparel',
    icon: ShoppingBag,
    description: 'Show your Panther pride!',
    links: [
      { name: 'Online Store', url: '#' },
      { name: 'Spirit Wear Days', url: '#' },
      { name: 'Team Orders', url: '#' },
    ],
  },
]

export default function Athletics() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Athletics
          </h1>
          <p className="text-xl text-gray-400">
            Go Panthers! Everything you need for BRHS Athletics
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <div
                key={section.title}
                className="glass-effect rounded-lg p-6 card-hover"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {section.title}
                    </h2>
                    <p className="text-sm text-gray-400">{section.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {section.content && (
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.links && (
                    <div className="space-y-2">
                      {section.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          className="block px-4 py-2 bg-dark-800 hover:bg-dark-700 rounded-lg text-white text-sm transition-colors group"
                        >
                          <span className="group-hover:text-primary transition-colors">
                            {link.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
