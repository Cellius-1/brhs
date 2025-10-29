'use client'

import { useState } from 'react'
import { ClipboardList, Calendar, FileText, ChevronDown } from 'lucide-react'

export default function Testing() {
  const [expandedWeek, setExpandedWeek] = useState<'week1' | 'week2' | null>('week1')

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <ClipboardList className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testing Schedule
          </h1>
          <p className="text-xl text-gray-400">
            AP Exams, SAT, ACT, and state assessments
          </p>
        </div>

        {/* AP Exams */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">AP Exams - May 2026</h2>
          
          {/* Week 1 Accordion */}
          <div className="glass-effect rounded-lg mb-4 overflow-hidden">
            <button
              onClick={() => setExpandedWeek(expandedWeek === 'week1' ? null : 'week1')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Week 1</h3>
                  <p className="text-gray-400 text-sm">May 4-8, 2026</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedWeek === 'week1' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedWeek === 'week1' && (
              <div className="px-6 pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-dark-700">
                        <th className="py-3 px-4 text-primary font-semibold">Date</th>
                        <th className="py-3 px-4 text-primary font-semibold">Morning (8:00 AM)</th>
                        <th className="py-3 px-4 text-primary font-semibold">Afternoon (12:00 PM)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Monday, May 4</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Biology</div>
                            <div>Latin</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>European History</div>
                            <div>Microeconomics</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Tuesday, May 5</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Chemistry</div>
                            <div>Human Geography</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>US Government and Politics</div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Wednesday, May 6</td>
                        <td className="py-4 px-4">
                          <div>English Literature and Composition</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Comparative Government and Politics</div>
                            <div>Physics 1: Algebra-Based</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Thursday, May 7</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Physics 2: Algebra-Based</div>
                            <div>World History: Modern</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>African American Studies</div>
                            <div>Statistics</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Friday, May 8</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Italian Language and Culture</div>
                            <div>United States History</div>
                            <div>Chinese Language and Culture</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>Macroeconomics</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">AP Art and Design Deadline:</strong> Friday, May 8, 2026 (8:00 PM ET) - Submit portfolio components as final in the AP Digital Portfolio.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Week 2 Accordion */}
          <div className="glass-effect rounded-lg overflow-hidden">
            <button
              onClick={() => setExpandedWeek(expandedWeek === 'week2' ? null : 'week2')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-primary mr-3" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white">Week 2</h3>
                  <p className="text-gray-400 text-sm">May 11-15, 2026</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedWeek === 'week2' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedWeek === 'week2' && (
              <div className="px-6 pb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-dark-700">
                        <th className="py-3 px-4 text-primary font-semibold">Date</th>
                        <th className="py-3 px-4 text-primary font-semibold">Morning (8:00 AM)</th>
                        <th className="py-3 px-4 text-primary font-semibold">Afternoon (12:00 PM)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Monday, May 11</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Calculus AB</div>
                            <div>Calculus BC</div>
                            <div>Music Theory</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>Seminar</div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Tuesday, May 12</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>French Language and Culture</div>
                            <div>Precalculus</div>
                            <div>Japanese Language and Culture</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>Psychology</div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Wednesday, May 13</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>English Language and Composition</div>
                            <div>German Language and Culture</div>
                            <div>Physics C: Mechanics</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>Spanish Literature and Culture</div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Thursday, May 14</td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Art History</div>
                            <div>Spanish Language and Culture</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="space-y-1">
                            <div>Computer Science Principles</div>
                            <div>Physics C: Electricity and Magnetism</div>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-dark-800 hover:bg-dark-800 transition-colors">
                        <td className="py-4 px-4 font-medium text-white">Friday, May 15</td>
                        <td className="py-4 px-4">
                          <div>Environmental Science</div>
                        </td>
                        <td className="py-4 px-4">
                          <div>Computer Science A</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SAT & ACT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">SAT Test Dates</h2>
            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">March 14, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: February 14</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">April 25, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: March 25</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">June 6, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: May 6</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              <strong className="text-white">Fee:</strong> $60 (Fee waivers available)
            </p>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-6">ACT Test Dates</h2>
            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">February 8, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: January 8</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">April 5, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: March 5</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">June 13, 2026</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Open</span>
                </div>
                <p className="text-gray-400 text-sm">Registration deadline: May 13</p>
                <button className="mt-3 text-primary text-sm hover:underline">Register Now</button>
              </div>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              <strong className="text-white">Fee:</strong> $63 (Fee waivers available)
            </p>
          </div>
        </div>

        {/* State Assessments */}
        <div className="glass-effect rounded-lg p-8 mb-12">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-primary/20 rounded-lg">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">State Assessments</h2>
              <p className="text-gray-400">Required standardized testing</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">English Language Arts</h3>
              <p className="text-gray-400 text-sm mb-2">March 3-7, 2026</p>
              <p className="text-gray-500 text-xs">Grades: 9-11</p>
            </div>

            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Mathematics</h3>
              <p className="text-gray-400 text-sm mb-2">March 10-14, 2026</p>
              <p className="text-gray-500 text-xs">Grades: 9-11</p>
            </div>

            <div className="bg-dark-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Science</h3>
              <p className="text-gray-400 text-sm mb-2">March 17-21, 2026</p>
              <p className="text-gray-500 text-xs">Grade: 11 only</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-dark-900 rounded-lg">
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Important:</strong> State assessments are required for graduation. 
              Students who do not pass may retake the exam. Accommodations available for eligible students.
            </p>
          </div>
        </div>

        {/* Testing Center Info */}
        <div className="glass-effect rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Testing Center Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
            <div>
              <h4 className="text-primary font-semibold mb-2">Location</h4>
              <p>Main Building, Rooms 301-305</p>
            </div>
            <div>
              <h4 className="text-primary font-semibold mb-2">Questions?</h4>
              <p>Contact: testing@brrsd.k12.nj.us</p>
              <p>(908) 685-2777 ext. 400</p>
            </div>
            <div>
              <h4 className="text-primary font-semibold mb-2">Resources</h4>
              <button className="text-primary hover:underline">Test Prep Resources</button>
              <br />
              <button className="text-primary hover:underline">Fee Waiver Info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
