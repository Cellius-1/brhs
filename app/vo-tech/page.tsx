'use client'

import { useState } from 'react'
import { School, Wrench, Calendar, Bus, Clock, ChevronDown, AlertCircle } from 'lucide-react'

export default function VoTech() {
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null)

  const programs = [
    'Agricultural Science',
    'Automotive-Diesel Technology',
    'Auto Body',
    'Biomedical',
    'Business Entrepreneurship & Management',
    'Carpentry',
    'Computer Science',
    'Cosmetology',
    'Culinary',
    'Dance',
    'Electrical Construction',
    'Finance',
    'Global Business Operations',
    'Graphic Communications',
    'Health Occupations',
    'HVACR',
    'Law & Public Safety',
    'Mechatronics, Engineering and Advanced Manufacturing',
    'Plumbing - Environmental Technology',
    'Theater Arts - Acting/Acting with Vocal Music',
    'Welding'
  ]

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Wrench className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Somerset County Vocational & Technical High School
          </h1>
          <p className="text-xl text-gray-400">
            Career and Technical Education Programs
          </p>
        </div>

        {/* Important Notice */}
        <div className="mb-8 glass-effect rounded-lg p-6 border-l-4 border-primary">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold mb-2">Important Updates</h3>
              <p className="text-gray-300 mb-2">
                <strong className="text-primary">November 6th and 7th:</strong> Both BRHS and SCVTH will be closed for the NJEA Convention.
              </p>
              <p className="text-gray-400 text-sm">
                Check back often for schedule updates. Thank you!
              </p>
            </div>
          </div>
        </div>

        {/* Career & Technical Programs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Career & Technical Programs</h2>
          <div className="space-y-3">
            {programs.map((program) => (
              <div key={program} className="glass-effect rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedProgram(expandedProgram === program ? null : program)}
                  className="w-full flex items-center justify-between p-5 hover:bg-dark-800 transition-colors"
                >
                  <span className="text-white font-semibold text-left">{program}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${expandedProgram === program ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                {expandedProgram === program && (
                  <div className="px-5 pb-5 border-t border-dark-700">
                    <div className="pt-4 space-y-3">
                      <p className="text-gray-300">
                        Comprehensive career and technical education program with hands-on training and industry certifications.
                      </p>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>Industry-standard equipment and facilities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>Professional certifications upon completion</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>Dual enrollment college credit opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span>Career placement assistance</span>
                        </li>
                      </ul>
                      <button className="mt-3 text-primary text-sm hover:underline">
                        Program Overviews (Printable) →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bell Schedules */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Bell Schedules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Daily Schedule */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center pb-3 border-b border-dark-700">
                Daily Schedule
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">First Bell</span>
                  <span className="text-white">7:45AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">A* SHOP 1</span>
                  <span className="text-white">7:50AM - 8:30AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">2</span>
                  <span className="text-white">8:30AM - 9:16AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">3</span>
                  <span className="text-white">9:16AM - 9:56AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">B* SHOP 4</span>
                  <span className="text-white">10:00AM - 10:40AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">5</span>
                  <span className="text-white">10:40AM - 11:23AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">6</span>
                  <span className="text-white">11:26AM - 12:00PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">C* SHOP 7</span>
                  <span className="text-white">12:00PM - 12:49PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">8</span>
                  <span className="text-white">12:59PM - 1:32PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400 font-semibold">9</span>
                  <span className="text-white">1:35PM - 2:15PM</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-dark-800">
                Staff: Full day reporting time 5 7:30am. During a delayed opening, please allow enough time to be at school prior to students.
              </p>
            </div>

            {/* Early Dismissal Schedule */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center pb-3 border-b border-dark-700">
                Early Dismissal Schedule
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">First Bell</span>
                  <span className="text-white">7:45AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">A* SHOP 1</span>
                  <span className="text-white">7:50AM - 8:30AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">2</span>
                  <span className="text-white">8:30AM - 9:04AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">3</span>
                  <span className="text-white">9:16AM - 9:56AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">B* SHOP 4</span>
                  <span className="text-white">10:00AM - 10:40AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">5</span>
                  <span className="text-white">10:43AM - 11:23AM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400 font-semibold">6</span>
                  <span className="text-white">11:26AM - 12:00PM</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-dark-800">
                <strong className="text-white">Parents/Guardians & Students:</strong> When SCVTHS is open and your sending district is closed, your sending district should provide transportation. If your sending district closes due to unforeseen events such as inclement weather notification will be sent via email and posted on social media and the website regarding transportation.
              </p>
            </div>

            {/* Delayed Opening Schedule */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4 text-center pb-3 border-b border-dark-700">
                Delayed Opening Schedule
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">First Bell</span>
                  <span className="text-white">9:55AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">A* SHOP 4</span>
                  <span className="text-white">10:00AM - 10:40AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">5</span>
                  <span className="text-white">10:43AM - 11:26AM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">6</span>
                  <span className="text-white">11:26AM - 12:08PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">C* SHOP 7</span>
                  <span className="text-white">12:09PM - 12:49PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-dark-800">
                  <span className="text-gray-400 font-semibold">8</span>
                  <span className="text-white">12:52PM - 1:32PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400 font-semibold">9</span>
                  <span className="text-white">1:35PM - 2:15PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-12">
          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Bus className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Transportation</h2>
                <p className="text-gray-400">Shuttle schedules for BRHS students</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              All Bridgewater-Raritan Students will be bussed from home to the High School in the morning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* A Session */}
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-dark-700">
                  A Session Students*
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">7:20am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Transfer to shuttle bus for VoTech A Session Classes (Bus is located in front loop near the 100 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">10:00am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Shuttle departs VoTech to BRHS (front of 900 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">10:40am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Shuttle departs VoTech to BRHS (front of 900 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">2:03pm</span>
                    </div>
                    <p className="text-gray-400 text-xs">PM Bus from BRHS to home</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-dark-700">
                  <p className="text-xs text-gray-500">
                    * "A" Session Students who take a 4th class at Vo-Tech are given permission to arrive late to their block 4 classes so that they will have enough time to eat their lunch.
                  </p>
                </div>
              </div>

              {/* B Session */}
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-dark-700">
                  B Session Students
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">7:20am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Transfer to shuttle bus for VoTech (All Day at VoTech) (Bus is located in front loop near the 100 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">2:15pm</span>
                    </div>
                    <p className="text-gray-400 text-xs">PM Bus from VoTech to home</p>
                  </div>
                </div>
              </div>

              {/* C Session */}
              <div className="bg-dark-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-dark-700">
                  C Session Students
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">11:15am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Shuttle departs BRHS to VoTech (front of 900 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">11:45am</span>
                    </div>
                    <p className="text-gray-400 text-xs">Shuttle departs BRHS to VoTech (front of 900 Building)</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-primary font-semibold">2:15pm</span>
                    </div>
                    <p className="text-gray-400 text-xs">PM Bus from VoTech to home</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Shuttle Info */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-dark-900 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="text-white font-semibold mb-2">PM Shuttle Bus from VoTech to BRHS</h4>
                <p className="text-gray-400 text-sm mb-2">
                  <strong className="text-primary">2:15pm</strong> - Shuttle bus VT02 from VoTech to BRHS Field House
                </p>
                <p className="text-gray-500 text-xs">
                  Available for students who need to return to BRHS at dismissal. No pass required. Please tell the driver upon boarding the bus that you need to go to the BRHS Field House.
                </p>
              </div>

              <div className="bg-dark-900 rounded-lg p-4 border-l-4 border-primary">
                <h4 className="text-white font-semibold mb-2">PM Shuttle Bus from BRHS to VoTech</h4>
                <p className="text-gray-400 text-sm mb-2">
                  <strong className="text-primary">2:03pm</strong> - Shuttle bus R02 from BRHS to VoTech
                </p>
                <p className="text-gray-500 text-xs">
                  Available for students who need to return to VoTech after BRHS dismissal. No pass required. Please tell the driver upon boarding the bus that you need to go to VoTech.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <School className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Program Benefits</h2>
                <p className="text-gray-400">Why choose Vo-Tech?</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Half-day or full-day programs available</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Industry-standard equipment and facilities</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Dual enrollment college credits</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Career certifications upon completion</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Job placement assistance</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span>Hands-on learning with experienced instructors</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-lg p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Important Dates</h2>
                <p className="text-gray-400">Application and enrollment</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Application Period</h3>
                <p className="text-gray-400 text-sm">January 15 - March 1</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Acceptance Notifications</h3>
                <p className="text-gray-400 text-sm">April 1</p>
              </div>

              <div className="bg-dark-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-1">Orientation</h3>
                <p className="text-gray-400 text-sm">August (before school year)</p>
              </div>

              <button className="w-full px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-effect rounded-lg p-6 text-center">
          <h3 className="text-lg font-bold text-white mb-2">Questions about Vo-Tech Programs?</h3>
          <p className="text-gray-400">
            Contact the SCVTH Coordinator at BRHS for more information about programs, applications, and enrollment.
          </p>
        </div>
      </div>
    </div>
  )
}
