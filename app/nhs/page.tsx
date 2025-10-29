'use client'

import { Award, Users, Calendar, Heart } from 'lucide-react'

export default function NHS() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            National Honor Society
          </h1>
          <p className="text-xl text-gray-400">
            Scholarship, Service, Leadership, Character
          </p>
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-effect rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Scholarship</h3>
            <p className="text-gray-400 text-sm">Academic excellence and love of learning</p>
          </div>
          <div className="glass-effect rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Service</h3>
            <p className="text-gray-400 text-sm">Giving back to the community</p>
          </div>
          <div className="glass-effect rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Leadership</h3>
            <p className="text-gray-400 text-sm">Inspiring and guiding others</p>
          </div>
          <div className="glass-effect rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Character</h3>
            <p className="text-gray-400 text-sm">Integrity and ethical behavior</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Membership Requirements */}
          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Membership Requirements</h2>
                <p className="text-gray-400">How to join NHS</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Minimum GPA of 3.5 (unweighted)</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Completion of application and essay</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Teacher recommendations</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Demonstrated leadership and service</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Good disciplinary standing</span>
              </li>
            </ul>

            <button className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
              Download Application
            </button>
          </div>

          {/* Upcoming Events */}
          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Upcoming Events</h2>
                <p className="text-gray-400">Service and activities</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Food Bank Volunteer Day</h3>
                <p className="text-gray-400 text-sm mb-2">November 3, 9:00 AM - 1:00 PM</p>
                <p className="text-gray-300 text-sm">Help sort and pack food for local families in need.</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Tutoring Program</h3>
                <p className="text-gray-400 text-sm mb-2">Every Tuesday & Thursday, 3:15 PM</p>
                <p className="text-gray-300 text-sm">Tutor fellow students in various subjects.</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Induction Ceremony</h3>
                <p className="text-gray-400 text-sm mb-2">December 10, 6:00 PM</p>
                <p className="text-gray-300 text-sm">Welcome new NHS members.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Hours */}
        <div className="glass-effect rounded-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Service Hour Requirements</h2>
              <p className="text-gray-400">Stay active and maintain membership</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Per Semester</h3>
              <p className="text-3xl font-bold text-primary mb-2">20 hours</p>
              <p className="text-gray-400 text-sm">Minimum service requirement</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Types of Service</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Community service</li>
                <li>• School events</li>
                <li>• Tutoring</li>
                <li>• Fundraising</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Submit Hours</h3>
              <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
                Log Service Hours
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 glass-effect rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Interested in NHS?</h3>
          <p className="text-gray-400">
            Contact NHS Advisor: Ms. Anderson | <span className="text-primary">manderson@brrsd.k12.nj.us</span>
          </p>
        </div>
      </div>
    </div>
  )
}
