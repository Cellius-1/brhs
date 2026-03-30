'use client'

import { useState, useMemo } from 'react'
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, addMonths, subMonths, isSameMonth, isSameDay, parse } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, MapPin, Users, Banknote, Heart, Share2, Bell, ChevronDown, Clock, BarChart3, Zap, Eye, ChevronLeft, ChevronRight, AlertCircle, Sparkles, TrendingUp } from 'lucide-react'

interface Event {
  id: string
  title: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  category: 'Academic' | 'Sports' | 'Fundraiser' | 'Social' | 'Club' | 'Assembly' | 'Workshop'
  type: 'In-Person' | 'Virtual' | 'Hybrid'
  isFundraiser: boolean
  fundraiserGoal?: number
  fundraiserCurrent?: number
  organizer: string
  capacity?: number
  attendees?: number
  rsvpLink?: string
  image?: string
  priority: 'High' | 'Medium' | 'Low'
  tags: string[]
}

const events: Event[] = [
  {
    id: '1',
    title: 'Spring Carnival & Fundraiser',
    description: 'Annual BRHS Spring Carnival featuring games, food, music, and entertainment. All proceeds support student organizations and athletic programs.',
    date: 'April 12, 2026',
    startTime: '10:00 AM',
    endTime: '4:00 PM',
    location: 'BRHS Athletic Fields',
    category: 'Fundraiser',
    type: 'In-Person',
    isFundraiser: true,
    fundraiserGoal: 5000,
    fundraiserCurrent: 3200,
    organizer: 'Student Council',
    capacity: 500,
    attendees: 240,
    priority: 'High',
    tags: ['Games', 'Food', 'Entertainment', 'Family Friendly'],
  },
  {
    id: '2',
    title: 'STEM Innovation Day',
    description: 'Showcase student projects from Computer Science, Engineering, and Robotics programs. Interactive demonstrations and career exploration.',
    date: 'April 5, 2026',
    startTime: '2:00 PM',
    endTime: '5:00 PM',
    location: 'BRHS Tech Center',
    category: 'Academic',
    type: 'In-Person',
    isFundraiser: false,
    organizer: 'STEM Department',
    capacity: 300,
    attendees: 185,
    priority: 'High',
    tags: ['STEM', 'Innovation', 'Showcase'],
  },
  {
    id: '3',
    title: 'Junior Prom',
    description: 'Celebrate your junior year! Elegant evening with music, dancing, and dinner. Tickets available at student council.',
    date: 'April 25, 2026',
    startTime: '7:00 PM',
    endTime: '11:00 PM',
    location: 'BRHS Gymnasium',
    category: 'Social',
    type: 'In-Person',
    isFundraiser: true,
    fundraiserGoal: 400,
    fundraiserCurrent: 356,
    organizer: 'Student Council',
    capacity: 150,
    attendees: 87,
    priority: 'Low',
    tags: ['Dance', 'Social', 'Fundraiser'],
  },
  {
    id: '11',
    title: 'Film Festival: Student Shorts',
    description: 'Watch and celebrate student-created films! Reception and awards ceremony following screenings.',
    date: 'April 28, 2026',
    startTime: '6:30 PM',
    endTime: '9:00 PM',
    location: 'BRHS Auditorium',
    category: 'Academic',
    type: 'In-Person',
    isFundraiser: false,
    organizer: 'Media & Film Department',
    capacity: 400,
    attendees: 239,
    priority: 'Medium',
    tags: ['Film', 'Showcase', 'Creative'],
  },
  {
    id: '12',
    title: 'Track & Field Invitational',
    description: 'Regional track and field competition. Cheer on BRHS athletes competing against other schools.',
    date: 'April 26, 2026',
    startTime: '8:00 AM',
    endTime: '3:00 PM',
    location: 'BRHS Athletic Complex',
    category: 'Sports',
    type: 'In-Person',
    isFundraiser: false,
    organizer: 'Athletic Department',
    capacity: 800,
    attendees: 634,
    priority: 'High',
    tags: ['Track', 'Sports', 'Competition'],
  },
]

const parseEventDate = (dateStr: string): Date => {
  return parse(dateStr, 'MMMM d, yyyy', new Date())
}

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [showFundraisersOnly, setShowFundraisersOnly] = useState(false)
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('calendar')
  const [currentDate, setCurrentDate] = useState(new Date(2026, 3, 1))
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [savedEvents, setSavedEvents] = useState<string[]>([])
  const [hoveredDay, setHoveredDay] = useState<string | null>(null)
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  // Event processing
  const eventsByDate = useMemo(() => {
    const map = new Map<string, Event[]>()
    events.forEach(event => {
      const eventDate = parseEventDate(event.date)
      const dateKey = format(eventDate, 'yyyy-MM-dd')
      if (!map.has(dateKey)) map.set(dateKey, [])
      map.get(dateKey)!.push(event)
    })
    return map
  }, [])

  const categories = ['All', 'Academic', 'Sports', 'Fundraiser', 'Social', 'Club', 'Assembly', 'Workshop']

  // Filter events based on search and category
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
      const matchesFundraiser = !showFundraisersOnly || event.isFundraiser

      return matchesSearch && matchesCategory && matchesFundraiser
    }).sort((a, b) => parseEventDate(a.date).getTime() - parseEventDate(b.date).getTime())
  }, [searchTerm, selectedCategory, showFundraisersOnly])

  const toggleSavedEvent = (eventId: string) => {
    setSavedEvents(prev =>
      prev.includes(eventId) ? prev.filter(id => id !== eventId) : [...prev, eventId]
    )
  }

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      'Fundraiser': { bg: 'from-amber-500/20 to-orange-500/20', text: 'text-amber-400', border: 'border-amber-500/50' },
      'Academic': { bg: 'from-blue-500/20 to-cyan-500/20', text: 'text-blue-400', border: 'border-blue-500/50' },
      'Sports': { bg: 'from-green-500/20 to-emerald-500/20', text: 'text-green-400', border: 'border-green-500/50' },
      'Social': { bg: 'from-pink-500/20 to-rose-500/20', text: 'text-pink-400', border: 'border-pink-500/50' },
      'Club': { bg: 'from-purple-500/20 to-violet-500/20', text: 'text-purple-400', border: 'border-purple-500/50' },
      'Assembly': { bg: 'from-indigo-500/20 to-blue-500/20', text: 'text-indigo-400', border: 'border-indigo-500/50' },
      'Workshop': { bg: 'from-teal-500/20 to-cyan-500/20', text: 'text-teal-400', border: 'border-teal-500/50' },
    }
    return colors[category]?.text || 'text-gray-400'
  }

  const getCategoryGradient = (category: string): string => {
    const gradients: Record<string, string> = {
      'Fundraiser': 'from-amber-600 to-orange-600',
      'Academic': 'from-blue-600 to-cyan-600',
      'Sports': 'from-green-600 to-emerald-600',
      'Social': 'from-pink-600 to-rose-600',
      'Club': 'from-purple-600 to-violet-600',
      'Assembly': 'from-indigo-600 to-blue-600',
      'Workshop': 'from-teal-600 to-cyan-600',
    }
    return gradients[category] || 'from-gray-600 to-gray-600'
  }

  // Calendar generation
  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)
  const weekStart = startOfWeek(monthStart)
  const weekEnd = endOfWeek(monthEnd)

  const days: Date[] = []
  let current = weekStart
  while (current <= weekEnd) {
    days.push(current)
    current = addDays(current, 1)
  }

  const fundraisers = events.filter(e => e.isFundraiser)
  const monthEvents = filteredEvents.filter(e => isSameMonth(parseEventDate(e.date), currentDate))

  const selectedDateEvents = selectedDate ? filteredEvents.filter(e => isSameDay(parseEventDate(e.date), selectedDate)) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-800 to-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-white mb-2 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-amber-500" />
                School Events
              </h1>
              <p className="text-gray-400 text-lg">Discover upcoming events, fundraisers, and activities</p>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl font-semibold transition-all ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50'
                    : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
                }`}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <BarChart3 className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('calendar')}
                className={`p-3 rounded-xl font-semibold transition-all ${
                  viewMode === 'calendar'
                    ? 'bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50'
                    : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
                }`}
                aria-label="Calendar view"
                aria-pressed={viewMode === 'calendar'}
              >
                <Calendar className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Total Events', value: events.length, icon: Eye, color: 'from-red-500 to-red-600' },
              { label: 'Fundraisers', value: fundraisers.length, icon: Banknote, color: 'from-amber-500 to-orange-600' },
              { label: 'Saved', value: savedEvents.length, icon: Heart, color: 'from-pink-500 to-rose-600' },
              { label: 'This Month', value: monthEvents.length, icon: TrendingUp, color: 'from-cyan-500 to-blue-600' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-xl p-4 border border-dark-700 backdrop-blur hover:border-dark-600 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white opacity-20 group-hover:opacity-30 transition-all`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-2xl p-6 border border-dark-700 mb-8 backdrop-blur shadow-xl"
        >
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search events, organizers, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-dark-700 text-white rounded-xl pl-12 pr-4 py-3 border border-dark-600 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all placeholder-gray-500"
                aria-label="Search events"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm font-semibold text-gray-400 mb-3 block">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        selectedCategory === cat
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/50'
                          : 'bg-dark-700 text-gray-400 hover:text-gray-200 hover:bg-dark-600'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFundraisersOnly(!showFundraisersOnly)}
                className={`self-end flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                  showFundraisersOnly
                    ? 'bg-gradient-to-br from-amber-500/30 to-orange-500/30 text-amber-400 border border-amber-500/50'
                    : 'bg-dark-700 text-gray-400 hover:text-gray-200'
                }`}
              >
                <Banknote className="w-4 h-4" />
                <span>Fundraisers</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {viewMode === 'calendar' ? (
            <motion.div
              key="calendar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Calendar */}
              <div className="lg:col-span-2">
                <motion.div
                  className="bg-gradient-to-br from-dark-800/70 to-dark-700/70 rounded-2xl p-6 border border-dark-700 backdrop-blur shadow-2xl"
                  layoutId="calendar"
                >
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-8">
                    <motion.h2
                      className="text-3xl font-bold text-white"
                      key={format(currentDate, 'MMMM yyyy')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      {format(currentDate, 'MMMM yyyy')}
                    </motion.h2>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                        className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 transition-all"
                        aria-label="Previous month"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentDate(new Date(2026, 3, 1))}
                        className="px-3 py-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 text-sm font-medium transition-all"
                      >
                        Today
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                        className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 text-gray-400 transition-all"
                        aria-label="Next month"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-2 mb-3">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                      <div key={day} className="text-center font-bold text-gray-500 py-3 text-sm">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2">
                    {days.map((day, idx) => {
                      const isCurrentMonth = isSameMonth(day, currentDate)
                      const isSelected = selectedDate && isSameDay(day, selectedDate)
                      const isToday = isSameDay(day, new Date())
                      const dayEvents = eventsByDate.get(format(day, 'yyyy-MM-dd')) || []
                      const dayKey = format(day, 'yyyy-MM-dd')

                      return (
                        <motion.button
                          key={dayKey}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={() => setHoveredDay(dayKey)}
                          onMouseLeave={() => setHoveredDay(null)}
                          onClick={() => setSelectedDate(isSelected ? null : day)}
                          className={`aspect-square p-2 rounded-xl font-semibold transition-all border-2 flex flex-col justify-between relative group ${
                            isSelected
                              ? 'bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white shadow-lg shadow-red-600/50'
                              : isToday
                              ? 'border-blue-500 bg-dark-700'
                              : isCurrentMonth
                              ? 'border-dark-600 bg-dark-700 hover:border-dark-500'
                              : 'border-dark-700 bg-dark-800 text-gray-600'
                          }`}
                          aria-label={`${format(day, 'MMMM d, yyyy')} - ${dayEvents.length} events`}
                          aria-pressed={isSelected || false}
                        >
                          <span className="text-sm">{format(day, 'd')}</span>
                          {dayEvents.length > 0 && (
                            <div className="flex gap-0.5 flex-wrap">
                              {dayEvents.slice(0, 3).map((evt, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    evt.category === 'Fundraiser' ? 'bg-amber-400' :
                                    evt.category === 'Sports' ? 'bg-green-400' :
                                    evt.category === 'Social' ? 'bg-pink-400' :
                                    'bg-blue-400'
                                  }`}
                                />
                              ))}
                              {dayEvents.length > 3 && (
                                <span className="text-xs text-gray-500">+{dayEvents.length - 3}</span>
                              )}
                            </div>
                          )}

                          {/* Hover Preview */}
                          {hoveredDay === dayKey && dayEvents.length > 0 && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="absolute bottom-full left-0 right-0 mb-2 z-50 bg-dark-700 rounded-lg p-3 shadow-lg border border-dark-600 w-48"
                            >
                              {dayEvents.slice(0, 2).map(evt => (
                                <div key={evt.id} className="text-xs text-gray-300 mb-2 last:mb-0">
                                  <p className="font-semibold text-white truncate">{evt.title}</p>
                                  <p className="text-gray-500">{evt.startTime}</p>
                                </div>
                              ))}
                              {dayEvents.length > 2 && (
                                <p className="text-xs text-gray-500">+{dayEvents.length - 2} more</p>
                              )}
                            </motion.div>
                          )}
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Event Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="bg-gradient-to-br from-dark-800/70 to-dark-700/70 rounded-2xl p-6 border border-dark-700 backdrop-blur shadow-2xl sticky top-32">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {selectedDate ? format(selectedDate, 'EEEE, MMMM d') : 'Select a Date'}
                  </h3>

                  <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-dark-600 scrollbar-track-dark-700">
                    {selectedDate ? (
                      selectedDateEvents.length > 0 ? (
                        selectedDateEvents.map((event, idx) => (
                          <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className={`p-3 rounded-lg border text-sm cursor-pointer transition-all hover:shadow-lg ${event.isFundraiser ? 'bg-amber-500/10 border-amber-500/30 hover:border-amber-500/50' : 'bg-dark-700/50 border-dark-600 hover:border-dark-500'}`}
                          >
                            <p className="font-bold text-white mb-1">{event.title}</p>
                            <p className="text-xs text-gray-400">{event.startTime}</p>
                            <div className="flex gap-1 mt-2">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(event.category)}`}>
                                {event.category}
                              </span>
                              {event.isFundraiser && (
                                <span className="px-2 py-1 rounded text-xs font-semibold bg-amber-500/20 text-amber-400">
                                  Fundraiser
                                </span>
                              )}
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <AlertCircle className="w-12 h-12 text-gray-600 mx-auto mb-2 opacity-50" />
                          <p className="text-gray-500 text-sm">No events on this date</p>
                        </div>
                      )
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-2 opacity-50" />
                        <p className="text-gray-500 text-sm">Pick a date to see events</p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // LIST VIEW
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {showFundraisersOnly ? 'All Fundraisers' : 'All Events'}
              </h2>
              <div className="space-y-4">
                {filteredEvents.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12 rounded-2xl bg-dark-800 border border-dark-700"
                  >
                    <Search className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                    <p className="text-gray-400 mb-4">No events found</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                        setShowFundraisersOnly(false)
                      }}
                      className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-all"
                    >
                      Clear Filters
                    </motion.button>
                  </motion.div>
                ) : (
                  filteredEvents.map((event, idx) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`group p-5 rounded-2xl border backdrop-blur transition-all hover:shadow-lg hover:border-dark-600 ${event.isFundraiser ? 'bg-gradient-to-br from-amber-950/30 to-orange-900/20 border-amber-700/30' : 'bg-gradient-to-br from-dark-800 to-dark-700 border-dark-700'}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <div className="flex items-start gap-2 mb-2 flex-wrap">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${getCategoryGradient(event.category)}`}>
                              {event.category}
                            </span>
                            {event.priority === 'High' && (
                              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                                ðŸ”¥ High Priority
                              </span>
                            )}
                            {event.isFundraiser && (
                              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/50 flex items-center gap-1">
                                <Banknote className="w-3 h-3" />
                                Fundraiser
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                          <p className="text-gray-400 text-sm">{event.description}</p>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => toggleSavedEvent(event.id)}
                          className="p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-all"
                        >
                          <Heart
                            className={`w-5 h-5 ${savedEvents.includes(event.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-500'}`}
                          />
                        </motion.button>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-t border-dark-600 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Date</p>
                          <p className="text-sm font-semibold text-white">{event.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Time</p>
                          <p className="text-sm font-semibold text-white">{event.startTime}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Location</p>
                          <p className="text-sm font-semibold text-white flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-red-500" />
                            {event.location}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Type</p>
                          <p className="text-sm font-semibold text-white">{event.type}</p>
                        </div>
                      </div>

                      {event.isFundraiser && (
                        <div className="mb-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-amber-400 font-semibold">Fundraiser Progress</span>
                            <span className="text-amber-400">{Math.round(((event.fundraiserCurrent || 0) / (event.fundraiserGoal || 1)) * 100)}%</span>
                          </div>
                          <div className="w-full bg-amber-950 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${Math.min(((event.fundraiserCurrent || 0) / (event.fundraiserGoal || 1)) * 100, 100)}%` }}
                              transition={{ duration: 0.6, delay: idx * 0.05 }}
                              className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                            />
                          </div>
                          <p className="text-xs text-amber-400/70 mt-2">
                            ${event.fundraiserCurrent?.toLocaleString()} / ${event.fundraiserGoal?.toLocaleString()}
                          </p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-4">
                        {event.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 rounded-full text-xs font-medium bg-dark-700 text-gray-400 border border-dark-600">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600/10 text-red-400 hover:bg-red-600/20 border border-red-600/30 transition-all text-sm font-semibold"
                        >
                          <Clock className="w-4 h-4" />
                          Learn More
                        </motion.button>
                        {event.isFundraiser && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-600/10 text-amber-400 hover:bg-amber-600/20 border border-amber-600/30 transition-all text-sm font-semibold"
                          >
                            <TrendingUp className="w-4 h-4" />
                            Support
                          </motion.button>
                        )}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
  }

