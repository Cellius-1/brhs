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
    <section className="max-w-7xl mx-auto px-6 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Today's Events</h2>
        <button className="text-red-500 text-sm font-medium">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl p-5 bg-gradient-to-br from-dark-800 to-dark-700 border border-dark-700 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="px-2.5 py-1 bg-red-600/10 text-red-500 text-xs font-semibold rounded-full border border-red-600/20">
                {event.category}
              </span>
              <Clock className="w-4 h-4 text-gray-500" />
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm mb-1">{event.time}</p>
            <p className="text-gray-500 text-sm">{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
