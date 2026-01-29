'use client'

import { PartyPopper, Users, Calendar, MapPin, Users2, Ticket } from 'lucide-react'

interface Event {
  id: string
  name: string
  date: string
  time: string
  location: string
  venue: string
  description: string
  category: string
  status: 'upcoming' | 'happening' | 'completed'
  ticketPrice?: string
}

const upcomingEvents: Event[] = [
  {
    id: '1',
    name: 'Spirit Week Kickoff',
    date: 'Jan 28, 2026',
    time: '2:30 PM',
    location: 'Main Gymnasium',
    venue: 'BRHS Gymnasium',
    description: 'Monday: Pajama Day | Tuesday: Twin Day | Wednesday: Decades Day | Thursday: Career Day | Friday: Panther Pride',
    category: 'Theme Week',
    status: 'upcoming',
  },
  {
    id: '2',
    name: 'Winter Formal',
    date: 'Feb 7, 2026',
    time: '7:00 PM',
    location: 'Main Gymnasium',
    venue: 'BRHS Gymnasium',
    description: 'An evening of celebration with music, dancing, and refreshments. Theme: "Winter Wonderland"',
    category: 'Dance',
    status: 'upcoming',
    ticketPrice: '$25',
  },
  {
    id: '3',
    name: 'Valentine\'s Day Dance',
    date: 'Feb 13, 2026',
    time: '6:30 PM',
    location: 'Cafeteria',
    venue: 'BRHS Cafeteria',
    description: 'Casual dance with DJ, decorations, and snacks. Celebrate love and friendship!',
    category: 'Dance',
    status: 'upcoming',
    ticketPrice: '$10',
  },
  {
    id: '4',
    name: 'Sports & Spirit Assembly',
    date: 'Feb 20, 2026',
    time: '1:00 PM',
    location: 'Main Gymnasium',
    venue: 'BRHS Gymnasium',
    description: 'Celebrate our athletic programs and school spirit. Come cheer on our Panthers!',
    category: 'Assembly',
    status: 'upcoming',
  },
  {
    id: '5',
    name: 'Charity Fundraiser - Relay for Life',
    date: 'Mar 1, 2026',
    time: '10:00 AM',
    location: 'BRHS Track',
    venue: 'Athletic Fields',
    description: 'Help us fight cancer! Join us for a day of relay races and community service.',
    category: 'Fundraiser',
    status: 'upcoming',
  },
  {
    id: '6',
    name: 'Spring Fling Festival',
    date: 'Apr 15, 2026',
    time: '2:00 PM',
    location: 'School Grounds',
    venue: 'BRHS Campus',
    description: 'Games, food, music, and activities celebrating spring and school spirit!',
    category: 'Festival',
    status: 'upcoming',
  },
  {
    id: '7',
    name: 'Prom 2026',
    date: 'May 9, 2026',
    time: '7:00 PM',
    location: 'Garden Manor',
    venue: 'Off-Campus Venue',
    description: 'An unforgettable night for juniors and seniors. Theme: "Enchanted Night"',
    category: 'Dance',
    status: 'upcoming',
    ticketPrice: '$60',
  },
  {
    id: '8',
    name: 'Student Council Elections',
    date: 'Apr 25, 2026',
    time: '3:00 PM',
    location: 'Cafeteria',
    venue: 'BRHS Cafeteria',
    description: 'Vote for next year\'s student council officers! All students welcome to vote.',
    category: 'Meeting',
    status: 'upcoming',
  },
]

const categories = ['All Events', 'Dance', 'Assembly', 'Fundraiser', 'Festival', 'Theme Week', 'Meeting']

export default function StudentCouncil() {
  const handleCategoryFilter = (category: string) => {
    // Filter implementation
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'happening':
        return <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full animate-pulse">HAPPENING NOW</span>
      case 'completed':
        return <span className="inline-block px-3 py-1 bg-gray-600 text-white text-xs font-semibold rounded-full">Past Event</span>
      default:
        return <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">Upcoming</span>
    }
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Council
          </h1>
          <p className="text-xl text-gray-400">
            Your voice in school leadership
          </p>
        </div>

        {/* Current Events */}
        <div className="mb-16">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className="px-4 py-2 rounded-full bg-dark-800 hover:bg-primary text-gray-300 hover:text-white transition-all text-sm font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Schedule Grid */}
          <h2 className="text-3xl font-bold text-white mb-6">Upcoming Student Council Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="glass-effect rounded-lg p-6 card-hover border border-dark-700 hover:border-primary/50 transition-all"
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{event.name}</h3>
                    <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-semibold rounded mb-2">
                      {event.category}
                    </span>
                  </div>
                  <div>
                    {getStatusBadge(event.status)}
                  </div>
                </div>

                {/* Event Details Grid */}
                <div className="space-y-3 bg-dark-800/50 rounded-lg p-4 mb-4">
                  {/* Date & Time */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Date & Time</p>
                      <p className="text-white font-semibold">{event.date} at {event.time}</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Location</p>
                      <p className="text-white font-semibold">{event.location}</p>
                      <p className="text-xs text-gray-500">{event.venue}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg mt-1">
                      <Users2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Details</p>
                      <p className="text-white text-sm font-medium">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {event.ticketPrice ? (
                    <a
                      href="#"
                      className="flex-1 px-4 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
                    >
                      Get Tickets - {event.ticketPrice}
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="flex-1 px-4 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
                    >
                      Learn More
                    </a>
                  )}
                  <a
                    href="mailto:stuco@brrsd.k12.nj.us"
                    className="flex-1 px-4 py-2 bg-dark-800 hover:bg-dark-700 text-white font-semibold rounded-lg transition-colors text-center text-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 mt-16">
          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Join Student Council</h2>
                <p className="text-gray-400">Make a difference in your school</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-white">What We Do:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Plan and organize school events</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Represent student voices to administration</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Coordinate fundraisers and community service</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Build leadership skills</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-dark-800 rounded-lg mb-6">
              <p className="text-gray-300 text-sm">
                <strong className="text-white">Meetings:</strong> Every Monday at 3:15 PM in Room 201<br/>
                All students welcome!
              </p>
            </div>

            <a
              href="mailto:stuco@brrsd.k12.nj.us"
              className="w-full block px-6 py-3 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-center"
            >
              Attend Next Meeting
            </a>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Meetings & Activities</h2>
                <p className="text-gray-400">Stay informed</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Student Council Meeting</h3>
                <p className="text-gray-400 text-sm">Every Monday, 3:15 PM - Room 201</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Event Planning Committee</h3>
                <p className="text-gray-400 text-sm mb-2">Ongoing</p>
                <p className="text-gray-300 text-sm">Help plan and execute student council events!</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Fundraising Committee</h3>
                <p className="text-gray-400 text-sm mb-2">Ongoing</p>
                <p className="text-gray-300 text-sm">Organize fundraisers for school programs.</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Social Media & Marketing</h3>
                <p className="text-gray-400 text-sm mb-2">Ongoing</p>
                <p className="text-gray-300 text-sm">Help promote events and school spirit online.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Student Council Members */}
        <div className="glass-effect rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">2025-2026 Student Council Officers</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">Student Council Executive Board</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">President</p>
                <p className="text-white font-semibold">Dev Gandhi</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Vice President</p>
                <p className="text-white font-semibold">Angela Zhou</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Treasurer</p>
                <p className="text-white font-semibold">Priyanka Kumar</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Recording Secretary</p>
                <p className="text-white font-semibold">Jack Lee</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Corresponding Secretary</p>
                <p className="text-white font-semibold">Camila Torres</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Sergeant Arms</p>
                <p className="text-white font-semibold">Shubh Kapoor</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Media Coordinator</p>
                <p className="text-white font-semibold">Kaitlyn Chu</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">9th Grade Class Council</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">President</p>
                <p className="text-white font-semibold">Madison DeRosa</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Vice President</p>
                <p className="text-white font-semibold">Faith Alexander</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Treasurer</p>
                <p className="text-white font-semibold">Connor Adkins</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Secretary</p>
                <p className="text-white font-semibold">Avik Dutta</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">10th Grade Class Council</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">President</p>
                <p className="text-white font-semibold">Sahib Bal</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Vice President</p>
                <p className="text-white font-semibold">Emma Shurina</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Treasurer</p>
                <p className="text-white font-semibold">Isabella deVera</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Secretary</p>
                <p className="text-white font-semibold">Ryan Cervino</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-primary mb-4">11th Grade Class Council</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">President</p>
                <p className="text-white font-semibold">Raziel Zuniga</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Vice President</p>
                <p className="text-white font-semibold">Breanna Zuniga</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Treasurer</p>
                <p className="text-white font-semibold">Sophia Kelleher</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Secretary</p>
                <p className="text-white font-semibold">Natalia Cruz</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-4">12th Grade Class Council</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">President</p>
                <p className="text-white font-semibold">Matthew Pizzelanti</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Vice President</p>
                <p className="text-white font-semibold">Durva Gandhi</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Treasurer</p>
                <p className="text-white font-semibold">Jason Stimpfle</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Secretary</p>
                <p className="text-white font-semibold">William Zhou</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 glass-effect rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Want to Get Involved?</h3>
          <p className="text-gray-400">
            Contact Student Council Advisor: Mrs. Cleary and Mrs. Mammone | <span className="text-primary">stuco@brrsd.k12.nj.us</span>
          </p>
        </div>
      </div>
    </div>
  )
}
