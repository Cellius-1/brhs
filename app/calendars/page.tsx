'use client'

import React, { useState, useCallback } from 'react'
import { Calendar, Clock, AlertCircle, ChevronDown } from 'lucide-react'
import { format, parse, isAfter, isBefore, addDays } from 'date-fns'

type ScheduleType = 'regular' | 'delayed' | 'half-day' | 'half-e-day' | 'four-hour' | 'emergency'

interface Period {
  block: string
  startTime: string
  endTime: string
  duration: number
  period?: string
}

interface ScheduleDefinition {
  name: string
  schoolStart: string
  schoolEnd: string
  note?: string
  color: string
  periods: Period[]
}

const schedules: { [key in ScheduleType]: ScheduleDefinition } = {
  'regular': {
    name: 'Regular Bell Schedule',
    schoolStart: '7:20 AM',
    schoolEnd: '2:03 PM',
    periods: [
      { block: 'B1', startTime: '7:20', endTime: '8:16', duration: 56 },
      { block: 'B2', startTime: '8:21', endTime: '9:14', duration: 53 },
      { block: 'B3', startTime: '9:20', endTime: '10:13', duration: 53 },
      { block: 'LUNCH', startTime: '10:18', endTime: '11:07', duration: 49, period: 'Lab: 10:52-11:12' },
      { block: 'B4', startTime: '11:12', endTime: '12:05', duration: 53 },
      { block: 'B5', startTime: '12:11', endTime: '1:04', duration: 53 },
      { block: 'B6', startTime: '1:10', endTime: '2:03', duration: 53 },
    ],
    color: 'from-blue-500 to-blue-600',
  },
  'delayed': {
    name: 'Delayed Opening',
    schoolStart: '9:20 AM',
    schoolEnd: '2:03 PM',
    note: 'A delay or half day will follow the block schedule rotation.',
    periods: [
      { block: 'B1', startTime: '9:20', endTime: '9:56', duration: 36 },
      { block: 'B2', startTime: '10:02', endTime: '10:36', duration: 34 },
      { block: 'B3', startTime: '10:42', endTime: '11:16', duration: 34 },
      { block: 'LUNCH', startTime: '11:21', endTime: '12:04', duration: 43 },
      { block: 'B4', startTime: '12:09', endTime: '12:43', duration: 34 },
      { block: 'B5', startTime: '12:49', endTime: '1:23', duration: 34 },
      { block: 'B6', startTime: '1:29', endTime: '2:03', duration: 34 },
    ],
    color: 'from-orange-500 to-orange-600',
  },
  'half-day': {
    name: 'Half Day Schedule',
    schoolStart: '7:20 AM',
    schoolEnd: '12:00 PM',
    note: '*Please note labs will not meet during a Delayed Opening or Half Day schedule.',
    periods: [
      { block: 'B1', startTime: '7:20', endTime: '8:05', duration: 45 },
      { block: 'B2', startTime: '8:11', endTime: '8:52', duration: 41 },
      { block: 'B3', startTime: '8:58', endTime: '9:39', duration: 41 },
      { block: 'B4', startTime: '9:45', endTime: '10:26', duration: 41 },
      { block: 'B5', startTime: '10:32', endTime: '11:13', duration: 41 },
      { block: 'B6', startTime: '11:19', endTime: '12:00', duration: 41 },
    ],
    color: 'from-green-500 to-green-600',
  },
  'half-e-day': {
    name: 'Half E Day',
    schoolStart: '7:20 AM',
    schoolEnd: '12:00 PM',
    periods: [
      { block: 'B1', startTime: '7:20', endTime: '7:55', duration: 35 },
      { block: 'B2', startTime: '8:00', endTime: '8:30', duration: 30 },
      { block: 'B3', startTime: '8:36', endTime: '9:05', duration: 30 },
      { block: 'B4', startTime: '9:10', endTime: '9:40', duration: 30 },
      { block: 'B5', startTime: '9:45', endTime: '10:15', duration: 30 },
      { block: 'B6', startTime: '10:20', endTime: '10:50', duration: 30 },
      { block: 'B7', startTime: '10:55', endTime: '11:25', duration: 30 },
      { block: 'B8', startTime: '11:30', endTime: '12:00', duration: 30 },
    ],
    color: 'from-purple-500 to-purple-600',
  },
  'four-hour': {
    name: '4-Hour Session',
    schoolStart: '7:20 AM',
    schoolEnd: '12:00 PM',
    periods: [
      { block: 'B1', startTime: '7:20', endTime: '8:05', duration: 45 },
      { block: 'B2', startTime: '8:11', endTime: '8:52', duration: 41 },
      { block: 'B3', startTime: '8:58', endTime: '9:39', duration: 41 },
      { block: 'B4', startTime: '9:45', endTime: '10:26', duration: 41 },
      { block: 'B5', startTime: '10:32', endTime: '11:13', duration: 41 },
      { block: 'B6', startTime: '11:19', endTime: '12:00', duration: 41 },
    ],
    color: 'from-red-500 to-red-600',
  },
  'emergency': {
    name: 'Emergency/Early Dismissal',
    schoolStart: '7:20 AM',
    schoolEnd: '12:00 PM',
    note: 'School is dismissed early in case of emergency.',
    periods: [
      { block: 'B1', startTime: '7:20', endTime: '8:05', duration: 45 },
      { block: 'B2', startTime: '8:11', endTime: '8:52', duration: 41 },
      { block: 'B3', startTime: '8:58', endTime: '9:39', duration: 41 },
      { block: 'B4', startTime: '9:45', endTime: '10:26', duration: 41 },
      { block: 'B5', startTime: '10:32', endTime: '11:13', duration: 41 },
      { block: 'B6', startTime: '11:19', endTime: '12:00', duration: 41 },
    ],
    color: 'from-yellow-500 to-yellow-600',
  },
}

const scheduleOptions: { id: ScheduleType; label: string }[] = [
  { id: 'regular', label: 'Regular Schedule' },
  { id: 'delayed', label: 'Delayed Opening' },
  { id: 'half-day', label: 'Half Day' },
  { id: 'half-e-day', label: 'Half E Day' },
  { id: 'four-hour', label: '4-Hour Session' },
  { id: 'emergency', label: 'Emergency/Early Dismissal' },
]

export default function Calendars() {
  const [selectedSchedule, setSelectedSchedule] = useState<ScheduleType>('regular')
  const currentSchedule = schedules[selectedSchedule]

  const handleScheduleChange = useCallback((scheduleType: ScheduleType) => {
    setSelectedSchedule(scheduleType)
  }, [])

  const getTimeInMinutes = (timeStr: string): number => {
    const [time, period] = timeStr.split(' ')
    const [hours, minutes] = time.split(':').map(Number)
    const isAM = period === 'AM' || (!period && hours < 12)
    const adjustedHours = isAM ? hours : hours + 12
    return adjustedHours * 60 + minutes
  }

  const getProgressPercentage = (): number => {
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    const [schoolStart] = currentSchedule.schoolStart.split(' ')
    const [, schoolEnd] = currentSchedule.schoolEnd.split(' ')
    
    const startMinutes = getTimeInMinutes(schoolStart + ' AM')
    const endMinutes = getTimeInMinutes(schoolEnd)

    if (currentMinutes < startMinutes) return 0
    if (currentMinutes > endMinutes) return 100
    return ((currentMinutes - startMinutes) / (endMinutes - startMinutes)) * 100
  }

  const getBlockDay = useCallback(() => {
    const now = new Date()
    const blockDays = ['A', 'B', 'C', 'D', 'E']
    
    // Reference date: January 29, 2026 is Day A
    const referenceDate = new Date(2026, 0, 29) // January 29, 2026 (Day A)
    
    // Check if current time is after school end time
    const currentTimeStr = format(now, 'HH:mm')
    const schoolEndTime = currentSchedule.schoolEnd
    let endTimeStr: string
    
    // Parse school end time
    if (schoolEndTime.includes('AM') || schoolEndTime.includes('PM')) {
      const parsed = parse(schoolEndTime, 'h:mm a', now)
      endTimeStr = format(parsed, 'HH:mm')
    } else {
      endTimeStr = schoolEndTime
    }
    
    const currentMinutes = parseInt(currentTimeStr.split(':')[0]) * 60 + parseInt(currentTimeStr.split(':')[1])
    const endMinutes = parseInt(endTimeStr.split(':')[0]) * 60 + parseInt(endTimeStr.split(':')[1])
    const isAfterSchool = currentMinutes > endMinutes
    
    const currentDayOfWeek = now.getDay()
    const isWeekend = currentDayOfWeek === 0 || currentDayOfWeek === 6
    
    // Helper to normalize date to midnight for comparison
    const normalizeDate = (date: Date) => {
      const normalized = new Date(date)
      normalized.setHours(0, 0, 0, 0)
      return normalized
    }
    
    // Helper function to count school days between two dates (normalized to midnight)
    const countSchoolDaysBetween = (startDate: Date, endDate: Date) => {
      let days = 0
      const start = normalizeDate(startDate)
      const end = normalizeDate(endDate)
      
      if (start.getTime() === end.getTime()) {
        return 0
      }
      
      const isReverse = start > end
      
      if (isReverse) {
        // Count backwards
        const temp = new Date(end)
        while (temp < start) {
          const dow = temp.getDay()
          if (dow !== 0 && dow !== 6) {
            days++
          }
          temp.setDate(temp.getDate() + 1)
        }
        return -days
      } else {
        // Count forwards
        const temp = new Date(start)
        while (temp < end) {
          const dow = temp.getDay()
          if (dow !== 0 && dow !== 6) {
            days++
          }
          temp.setDate(temp.getDate() + 1)
        }
        return days
      }
    }
    
    // If weekend or after school hours, show next school day
    if (isWeekend || isAfterSchool) {
      let nextSchoolDate = new Date(now)
      let daysUntilSchool = 0
      
      // Find next weekday
      if (isWeekend) {
        daysUntilSchool = currentDayOfWeek === 0 ? 1 : (8 - currentDayOfWeek) % 7 || 7
        nextSchoolDate.setDate(nextSchoolDate.getDate() + daysUntilSchool)
      } else {
        // After school, show tomorrow
        nextSchoolDate = addDays(now, 1)
        // If tomorrow is weekend, find next Monday
        const tomorrowDayOfWeek = nextSchoolDate.getDay()
        if (tomorrowDayOfWeek === 0) {
          nextSchoolDate = addDays(nextSchoolDate, 1)
          daysUntilSchool = 2
        } else if (tomorrowDayOfWeek === 6) {
          nextSchoolDate = addDays(nextSchoolDate, 2)
          daysUntilSchool = 3
        } else {
          daysUntilSchool = 1
        }
      }
      
      const daysFromReference = countSchoolDaysBetween(referenceDate, nextSchoolDate)
      const blockIndex = ((daysFromReference % 5) + 5) % 5 // Handle negative numbers
      
      return {
        blockDay: blockDays[blockIndex],
        isWeekend: isWeekend,
        isAfterSchool: isAfterSchool && !isWeekend,
        daysUntil: daysUntilSchool,
        date: nextSchoolDate
      }
    }
    
    // During school hours on a weekday
    const daysFromReference = countSchoolDaysBetween(referenceDate, now)
    const blockIndex = ((daysFromReference % 5) + 5) % 5 // Handle negative numbers
    
    return {
      blockDay: blockDays[blockIndex],
      isWeekend: false,
      isAfterSchool: false,
      daysUntil: 0,
      date: now
    }
  }, [currentSchedule.schoolEnd])

  const todayBlockInfo = getBlockDay()
  const dayColors: { [key: string]: string } = {
    'A': 'from-blue-500 to-blue-600',
    'B': 'from-purple-500 to-purple-600',
    'C': 'from-yellow-500 to-yellow-600',
    'D': 'from-cyan-500 to-cyan-600',
    'E': 'from-green-500 to-green-600'
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            School Schedules
          </h1>
          <p className="text-xl text-gray-400">
            Find your daily bell schedule and class times
          </p>
        </div>

        {/* Today's Block Day */}
        <div className={`mb-12 glass-effect rounded-lg p-8 border-2 bg-gradient-to-r ${dayColors[todayBlockInfo.blockDay]} border-opacity-30`}>
          <div className="text-center">
            {todayBlockInfo.isWeekend ? (
              <>
                <p className="text-gray-300 text-lg mb-3">Weekend - Next School Day</p>
                <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
                  Day {todayBlockInfo.blockDay}
                </h2>
                <p className="text-2xl text-gray-200 mb-2">
                  {todayBlockInfo.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-lg text-gray-300">
                  In {todayBlockInfo.daysUntil} {todayBlockInfo.daysUntil === 1 ? 'day' : 'days'}
                </p>
              </>
            ) : todayBlockInfo.isAfterSchool ? (
              <>
                <p className="text-gray-300 text-lg mb-3">School Day Ended - Next School Day</p>
                <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
                  Day {todayBlockInfo.blockDay}
                </h2>
                <p className="text-2xl text-gray-200 mb-2">
                  {todayBlockInfo.date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-lg text-gray-300">
                  {todayBlockInfo.daysUntil === 1 ? 'Tomorrow' : `In ${todayBlockInfo.daysUntil} days`}
                </p>
              </>
            ) : (
              <>
                <p className="text-gray-300 text-lg mb-3">Today's Block</p>
                <h2 className="text-6xl md:text-7xl font-black text-white mb-4">
                  Day {todayBlockInfo.blockDay}
                </h2>
                <p className="text-xl text-gray-200">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </p>
              </>
            )}
          </div>
        </div>

        {/* School Hours Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-white">School Start</h3>
            </div>
            <p className="text-3xl font-bold text-primary">{currentSchedule.schoolStart}</p>
          </div>
          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-white">School End</h3>
            </div>
            <p className="text-3xl font-bold text-primary">{currentSchedule.schoolEnd}</p>
          </div>
          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-white">Lunch Period</h3>
            </div>
            {(() => {
              const lunchPeriod = currentSchedule.periods.find(p => p.block === 'LUNCH')
              return lunchPeriod ? (
                <p className="text-2xl font-bold text-primary">{lunchPeriod.startTime} - {lunchPeriod.endTime}</p>
              ) : null
            })()}
          </div>
        </div>

        {/* Schedule Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Select Schedule Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {scheduleOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleScheduleChange(option.id)}
                className={`p-4 rounded-lg font-semibold transition-all ${
                  selectedSchedule === option.id
                    ? `bg-gradient-to-r ${schedules[option.id].color} text-white shadow-lg`
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Important Notes */}
        {currentSchedule.note && (
          <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg flex gap-3">
            <AlertCircle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-amber-300 text-sm">
              <span className="font-semibold">Note: </span>
              {currentSchedule.note}
            </p>
          </div>
        )}

        {/* Day Progress Bar */}
        <div className="mb-12 glass-effect rounded-lg p-6 border border-dark-700">
          <h3 className="text-lg font-semibold text-white mb-4">School Day Progress</h3>
          <div className="space-y-2">
            <div className="w-full bg-dark-800 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${currentSchedule.color} transition-all duration-1000`}
                style={{ width: `${getProgressPercentage()}%` }}
              />
            </div>
            <p className="text-sm text-gray-400 text-center">{getProgressPercentage().toFixed(0)}% through school day</p>
          </div>
        </div>

        {/* Bell Schedule Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Bell Schedule</h2>
          <div className="overflow-x-auto">
            <div className="glass-effect rounded-lg border border-dark-700 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className={`bg-gradient-to-r ${currentSchedule.color}`}>
                    <th className="px-6 py-4 text-left text-white font-semibold">Block/Period</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Start Time</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">End Time</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-dark-700">
                  {currentSchedule.periods.map((period, idx) => (
                    <tr
                      key={idx}
                      className={`${
                        period.block === 'LUNCH'
                          ? 'bg-dark-800/60 border-l-4 border-primary'
                          : 'hover:bg-dark-800/40 transition-colors'
                      }`}
                    >
                      <td className={`px-6 py-4 font-semibold ${period.block === 'LUNCH' ? 'text-primary text-lg' : 'text-white'}`}>
                        {period.block}
                      </td>
                      <td className="px-6 py-4 text-gray-300">{period.startTime}</td>
                      <td className="px-6 py-4 text-gray-300">{period.endTime}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{period.duration} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {currentSchedule.periods[0]?.period && (
                <div className="px-6 py-3 bg-dark-800 text-gray-400 text-sm border-t border-dark-700">
                  <span className="font-semibold">Lab Schedule:</span> {currentSchedule.periods[0].period}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Block Rotation Schedule */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">5-Day Block Rotation Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Day A */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700 hover:border-primary/50 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-primary mb-2">Day A</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Class Periods</p>
                  <p className="text-white font-semibold">1, 2, 3</p>
                  <p className="text-gray-400 text-sm">LUNCH</p>
                  <p className="text-white font-semibold">4, 5, 6, 7</p>
                </div>
                <div className="pt-3 border-t border-dark-600">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Drop Periods</p>
                  <p className="text-amber-400 font-semibold">8</p>
                </div>
              </div>
            </div>

            {/* Day B */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700 hover:border-primary/50 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Day B</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Class Periods</p>
                  <p className="text-white font-semibold">4, 1, 2</p>
                  <p className="text-gray-400 text-sm">LUNCH</p>
                  <p className="text-white font-semibold">8, 5, 6</p>
                </div>
                <div className="pt-3 border-t border-dark-600">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Drop Periods</p>
                  <p className="text-amber-400 font-semibold">3, 7</p>
                </div>
              </div>
            </div>

            {/* Day C */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700 hover:border-primary/50 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Day C</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Class Periods</p>
                  <p className="text-white font-semibold">3, 4, 1</p>
                  <p className="text-gray-400 text-sm">LUNCH</p>
                  <p className="text-white font-semibold">7, 8, 5</p>
                </div>
                <div className="pt-3 border-t border-dark-600">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Drop Periods</p>
                  <p className="text-amber-400 font-semibold">2, 6</p>
                </div>
              </div>
            </div>

            {/* Day D */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700 hover:border-primary/50 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">Day D</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Class Periods</p>
                  <p className="text-white font-semibold">2, 3, 4</p>
                  <p className="text-gray-400 text-sm">LUNCH</p>
                  <p className="text-white font-semibold">6, 7, 8</p>
                </div>
                <div className="pt-3 border-t border-dark-600">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Drop Periods</p>
                  <p className="text-amber-400 font-semibold">1, 5</p>
                </div>
              </div>
            </div>

            {/* Day E */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700 hover:border-primary/50 transition-all">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Day E</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Class Periods</p>
                  <p className="text-white font-semibold">1, 2, 3, 4</p>
                  <p className="text-gray-400 text-sm">LUNCH</p>
                  <p className="text-white font-semibold">5, 6, 7, 8</p>
                </div>
                <div className="pt-3 border-t border-dark-600">
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Drop Periods</p>
                  <p className="text-green-300 font-semibold">None</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quick Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <h3 className="text-xl font-bold text-white mb-4">Schedule Summary</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl leading-none">•</span>
                <div>
                  <p className="text-gray-300 font-semibold">Total School Hours</p>
                  <p className="text-gray-400 text-sm">See times above for exact duration</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl leading-none">•</span>
                <div>
                  <p className="text-gray-300 font-semibold">Class Periods</p>
                  <p className="text-gray-400 text-sm">{currentSchedule.periods.length - 1} blocks per day</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl leading-none">•</span>
                <div>
                  <p className="text-gray-300 font-semibold">Lunch Period</p>
                  <p className="text-gray-400 text-sm">Designated lunch block with passing time</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <h3 className="text-xl font-bold text-white mb-4">Tips for Success</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl leading-none">✓</span>
                <div>
                  <p className="text-gray-300 font-semibold">Arrive Early</p>
                  <p className="text-gray-400 text-sm">Allow extra time for delays or traffic</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl leading-none">✓</span>
                <div>
                  <p className="text-gray-300 font-semibold">Check Local News</p>
                  <p className="text-gray-400 text-sm">Stay updated on weather delays/closings</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl leading-none">✓</span>
                <div>
                  <p className="text-gray-300 font-semibold">Plan Your Day</p>
                  <p className="text-gray-400 text-sm">Use the schedule to manage your time</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
