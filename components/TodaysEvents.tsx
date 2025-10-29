'use client'

import { Calendar, Clock } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Basketball Game - Home',
    time: '4:00 PM',
    location: 'Main Gymnasium',
    category: 'Athletics',
  },
  {
    id: 2,
    title: 'Robotics Club Meeting',
    time: '3:15 PM',
    location: 'Room 204',
    category: 'Clubs',
  },
  {
    id: 3,
    title: 'Student Council Elections',
    time: '2:00 PM',
    location: 'Auditorium',
    category: 'Student Council',
  },
  {
    id: 4,
    title: 'NHS Volunteer Event',
    time: '3:30 PM',
    location: 'Community Center',
    category: 'NHS',
  },
]

export default function TodaysEvents() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-white">Today's Events</h2>
        </div>
        <button className="text-primary hover:text-primary-light transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="glass-effect rounded-lg p-6 card-hover cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                {event.category}
              </span>
              <Clock className="w-4 h-4 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm mb-1">{event.time}</p>
            <p className="text-gray-500 text-sm">{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
