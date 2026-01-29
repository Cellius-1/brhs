'use client'

import { Trophy, Ticket, FileText, Users, Calendar, Tv, BookOpen, ShoppingBag, MapPin, Clock, Users2 } from 'lucide-react'

interface Game {
  id: string
  sport: string
  date: string
  time: string
  opponent: string
  location: string
  homeAway: 'Home' | 'Away'
  venue: string
  status: 'upcoming' | 'live' | 'completed'
  result?: string
}

const upcomingGames: Game[] = [
  {
    id: '1',
    sport: 'Basketball (Boys)',
    date: 'Jan 28, 2026',
    time: '4:00 PM',
    opponent: 'Central High School',
    location: 'BRHS Gymnasium',
    homeAway: 'Home',
    venue: 'Panthers Gym',
    status: 'upcoming',
  },
  {
    id: '2',
    sport: 'Wrestling',
    date: 'Jan 29, 2026',
    time: '5:30 PM',
    opponent: 'Ridge High School',
    location: 'Ridge High School',
    homeAway: 'Away',
    venue: 'Ridge Wrestling Room',
    status: 'upcoming',
  },
  {
    id: '3',
    sport: 'Swimming',
    date: 'Jan 31, 2026',
    time: '4:00 PM',
    opponent: 'Somerville High School',
    location: 'BRHS Pool',
    homeAway: 'Home',
    venue: 'Panthers Aquatic Center',
    status: 'upcoming',
  },
  {
    id: '4',
    sport: 'Track & Field',
    date: 'Feb 1, 2026',
    time: '9:00 AM',
    opponent: 'Somerset Indoor Meet',
    location: 'Somerset High School',
    homeAway: 'Away',
    venue: 'Somerset Fieldhouse',
    status: 'upcoming',
  },
  {
    id: '5',
    sport: 'Soccer (Girls)',
    date: 'Feb 2, 2026',
    time: '3:30 PM',
    opponent: 'Bridgewater-Raritan Invitational',
    location: 'BRHS Fields',
    homeAway: 'Home',
    venue: 'Soccer Complex',
    status: 'upcoming',
  },
  {
    id: '6',
    sport: 'Hockey (Boys)',
    date: 'Feb 3, 2026',
    time: '7:00 PM',
    opponent: 'Hunterdon High School',
    location: 'Hamilton Ice Arena',
    homeAway: 'Away',
    venue: 'Hamilton Ice Arena',
    status: 'upcoming',
  },
  {
    id: '7',
    sport: 'Volleyball (Girls)',
    date: 'Feb 4, 2026',
    time: '6:00 PM',
    opponent: 'Delaware Valley High School',
    location: 'BRHS Gymnasium',
    homeAway: 'Home',
    venue: 'Panthers Gym',
    status: 'upcoming',
  },
  {
    id: '8',
    sport: 'Basketball (Girls)',
    date: 'Feb 5, 2026',
    time: '5:30 PM',
    opponent: 'Watchung High School',
    location: 'Watchung High School',
    homeAway: 'Away',
    venue: 'Watchung Gymnasium',
    status: 'upcoming',
  },
]

const sports = ['All Sports', 'Basketball', 'Wrestling', 'Swimming', 'Track & Field', 'Soccer', 'Hockey', 'Volleyball']

const otherSections = [
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
  {
    title: 'More Information',
    icon: BookOpen,
    description: 'Learn more about our athletic programs',
    links: [
      { name: 'Visit hs.brrsd.org', url: 'https://hs.brrsd.org' },
    ],
  },
]

export default function Athletics() {
  const handleSportFilter = (sport: string) => {
    // Filter implementation
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full animate-pulse">LIVE</span>
      case 'completed':
        return <span className="inline-block px-3 py-1 bg-gray-600 text-white text-xs font-semibold rounded-full">Final</span>
      default:
        return <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Upcoming</span>
    }
  }

  const getLocationBadge = (homeAway: string) => {
    return homeAway === 'Home' ? (
      <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-600/50">Home</span>
    ) : (
      <span className="inline-block px-3 py-1 bg-orange-600/20 text-orange-300 text-xs font-semibold rounded-full border border-orange-600/50">Away</span>
    )
  }

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

        {/* Tickets Button - Prominent */}
        <div className="mb-12 flex justify-center">
          <a
            href="https://gofan.co/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-red-700 hover:from-red-700 hover:to-primary rounded-lg text-white font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/50"
          >
            <div className="flex items-center space-x-3">
              <Ticket className="w-6 h-6" />
              <span>Purchase Tickets on GoFan</span>
            </div>
          </a>
        </div>

        {/* Sports Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => handleSportFilter(sport)}
              className="px-4 py-2 rounded-full bg-dark-800 hover:bg-primary text-gray-300 hover:text-white transition-all text-sm font-medium"
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Games Schedule Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Upcoming Games & Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingGames.map((game) => (
              <div
                key={game.id}
                className="glass-effect rounded-lg p-6 card-hover border border-dark-700 hover:border-primary/50 transition-all"
              >
                {/* Game Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{game.sport}</h3>
                    <p className="text-sm text-gray-400">{game.opponent}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    {getStatusBadge(game.status)}
                    {getLocationBadge(game.homeAway)}
                  </div>
                </div>

                {/* Game Details Grid */}
                <div className="space-y-3 bg-dark-800/50 rounded-lg p-4 mb-4">
                  {/* Date & Time */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Date & Time</p>
                      <p className="text-white font-semibold">{game.date} at {game.time}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-white font-semibold">{game.location}</p>
                      <p className="text-xs text-gray-500">{game.venue}</p>
                    </div>
                  </div>

                  {/* Opponent */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Users2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Opponent</p>
                      <p className="text-white font-semibold">{game.opponent}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href="https://gofan.co/"
                    className="flex-1 px-4 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
                  >
                    Get Tickets
                  </a>
                  <a
                    href="https://fan.hudl.com/usa/nj/bridgewater/organization/24379/bridgewater-raritan-high-school"
                    className="flex-1 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
                  >
                    Watch Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherSections.map((section) => {
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