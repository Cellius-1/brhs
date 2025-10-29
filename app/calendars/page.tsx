'use client'

import { Calendar, Clock, RotateCcw, ClipboardList } from 'lucide-react'

export default function Calendars() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calendars & Schedules
          </h1>
          <p className="text-xl text-gray-400">
            All important dates and schedules in one place
          </p>
        </div>

        {/* Main Schedules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Bell Schedules */}
          <div className="glass-effect rounded-lg p-8 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Bell Schedules</h2>
                <p className="text-gray-400">Daily class schedules</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Regular Hours (Grades 9-12)</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-semibold">School Hours</span>
                    <span className="text-primary">7:20 AM - 2:03 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Delayed Opening</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-semibold">School Hours</span>
                    <span className="text-primary">9:20 AM - 2:03 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">4-Hour Session</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-semibold">School Hours</span>
                    <span className="text-primary">7:20 AM - 12:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Emergency/Early Dismissal</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-semibold">School Hours</span>
                    <span className="text-primary">7:20 AM - 12:00 PM</span>
                  </div>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
                View All Bell Schedules (PDF)
              </button>
            </div>
          </div>

          {/* Block Rotation */}
          <div className="glass-effect rounded-lg p-8 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Block Rotation Schedule</h2>
                <p className="text-gray-400">5-day rotation cycle</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Day A</span>
                  <span className="px-3 py-1 bg-pink-200 text-black text-sm rounded-full font-semibold">Periods 1,2,3 Lunch 5,6,7</span>
                </div>
                <p className="text-gray-400 text-sm">Drop Periods: 4 & 8</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Day B</span>
                  <span className="px-3 py-1 bg-purple-200 text-black text-sm rounded-full font-semibold">Periods 4,1,2 Lunch 8,5,6</span>
                </div>
                <p className="text-gray-400 text-sm">Drop Periods: 3 & 7</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Day C</span>
                  <span className="px-3 py-1 bg-yellow-200 text-black text-sm rounded-full font-semibold">Periods 3,4,1 Lunch 7,8,5</span>
                </div>
                <p className="text-gray-400 text-sm">Drop Periods: 2 & 6</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Day D</span>
                  <span className="px-3 py-1 bg-cyan-300 text-black text-sm rounded-full font-semibold">Periods 2,3,4 Lunch 6,7,8</span>
                </div>
                <p className="text-gray-400 text-sm">Drop Periods: 1 & 5</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white font-semibold">Day E</span>
                  <span className="px-3 py-1 bg-lime-200 text-black text-sm rounded-full font-semibold">Periods 1,2,3,4 Lunch 5,6,7,8</span>
                </div>
                <p className="text-gray-400 text-sm">No Drop Periods</p>
              </div>

              <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
                View Full Rotation Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Academic Calendar */}
        <div className="glass-effect rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Academic Calendar</h2>
              <p className="text-gray-400">Important dates for 2025-2026</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Marking Periods</h3>
              <ul className="space-y-2 text-gray-300">
                <li>MP1: Sep 3 - Nov 8</li>
                <li>MP2: Nov 11 - Jan 24</li>
                <li>MP3: Jan 27 - Apr 3</li>
                <li>MP4: Apr 6 - Jun 19</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">Key Dates</h3>
              <ul className="space-y-2 text-gray-300">
                <li>First Day: Sep 3</li>
                <li>Thanksgiving: Nov 27-29</li>
                <li>Winter Break: Dec 23 - Jan 3</li>
                <li>Spring Break: Apr 13-17</li>
                <li>Last Day: Jun 19</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-3">No School Days</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Labor Day: Sep 1</li>
                <li>Columbus Day: Oct 13</li>
                <li>Veterans Day: Nov 11</li>
                <li>MLK Day: Jan 20</li>
                <li>Presidents Day: Feb 17</li>
              </ul>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
            Download Full Academic Calendar (PDF)
          </button>
        </div>

        {/* Testing Schedule */}
        <div className="glass-effect rounded-lg p-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <ClipboardList className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Testing Schedule</h2>
              <p className="text-gray-400">AP Exams and standardized testing dates</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">AP Exams - May 2026</h3>
              <div className="space-y-3">
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">AP English</span>
                    <span className="text-primary text-sm">May 6, 8:00 AM</span>
                  </div>
                </div>
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">AP Calculus</span>
                    <span className="text-primary text-sm">May 7, 8:00 AM</span>
                  </div>
                </div>
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">AP Biology</span>
                    <span className="text-primary text-sm">May 11, 12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Other Testing</h3>
              <div className="space-y-3">
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">SAT</span>
                    <span className="text-primary text-sm">Mar 14, Apr 25</span>
                  </div>
                </div>
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">ACT</span>
                    <span className="text-primary text-sm">Feb 8, Apr 5</span>
                  </div>
                </div>
                <div className="bg-dark-800 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white">State Assessments</span>
                    <span className="text-primary text-sm">Mar 3-14</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href="/testing"
            className="block w-full mt-6 text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
          >
            View Complete Testing Schedule
          </a>
        </div>
      </div>
    </div>
  )
}
