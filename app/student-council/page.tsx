'use client'

import { PartyPopper, Users, Calendar } from 'lucide-react'

export default function StudentCouncil() {
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
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <PartyPopper className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-effect rounded-lg p-6 card-hover">
              <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full inline-block mb-4">
                This Week
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Spirit Week</h3>
              <p className="text-gray-400 text-sm mb-3">October 30 - November 3</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Monday: Pajama Day</li>
                <li>• Tuesday: Twin Day</li>
                <li>• Wednesday: Decades Day</li>
                <li>• Thursday: Career Day</li>
                <li>• Friday: Panther Pride (Red & Black)</li>
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6 card-hover">
              <span className="px-3 py-1 bg-primary/70 text-white text-xs font-semibold rounded-full inline-block mb-4">
                November
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Homecoming Dance</h3>
              <p className="text-gray-400 text-sm mb-3">November 10, 7:00 PM - 10:00 PM</p>
              <p className="text-gray-300 text-sm mb-4">
                Main Gymnasium | Theme: "A Night Under the Stars"
              </p>
              <button className="w-full px-4 py-2 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
                Buy Tickets - $15
              </button>
            </div>

            <div className="glass-effect rounded-lg p-6 card-hover">
              <span className="px-3 py-1 bg-primary/70 text-white text-xs font-semibold rounded-full inline-block mb-4">
                November
              </span>
              <h3 className="text-xl font-bold text-white mb-2">Thanksgiving Food Drive</h3>
              <p className="text-gray-400 text-sm mb-3">November 15-22</p>
              <p className="text-gray-300 text-sm">
                Help local families! Drop off non-perishable items in the main office.
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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

            <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
              Attend Next Meeting
            </button>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Upcoming Meetings & Activities</h2>
                <p className="text-gray-400">Stay informed</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Student Council Meeting</h3>
                <p className="text-gray-400 text-sm">Every Monday, 3:15 PM - Room 201</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Holiday Decoration Committee</h3>
                <p className="text-gray-400 text-sm mb-2">November 20, 3:15 PM</p>
                <p className="text-gray-300 text-sm">Help decorate the school for the holidays!</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Winter Formal Planning</h3>
                <p className="text-gray-400 text-sm mb-2">December 1, 3:15 PM</p>
                <p className="text-gray-300 text-sm">Join the planning committee for our winter dance.</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">MLK Day Service Project</h3>
                <p className="text-gray-400 text-sm mb-2">January 20</p>
                <p className="text-gray-300 text-sm">Community service day - details coming soon.</p>
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
