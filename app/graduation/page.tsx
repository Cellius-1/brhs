'use client'

import { useState } from 'react'
import { GraduationCap, Calendar, FileText, Users, BookOpen, Award, CheckCircle, ChevronDown, AlertCircle, Languages, DollarSign } from 'lucide-react'

export default function Graduation() {
  const [expandedSection, setExpandedSection] = useState<string | null>('credits')

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-red-600 mb-4 shadow-lg shadow-primary/50">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Graduation Requirements
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            State-Endorsed Diploma Requirements & Information
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-effect rounded-2xl p-6 text-center border border-dark-700 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Minimum Credits</h3>
            <p className="text-3xl font-bold text-primary mb-1">120</p>
            <p className="text-gray-500 text-sm">Credits Required</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center border border-dark-700 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Core Subjects</h3>
            <p className="text-3xl font-bold text-blue-400 mb-1">4</p>
            <p className="text-gray-500 text-sm">ELA, Math, Science, Social Studies</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center border border-dark-700 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">State Tests</h3>
            <p className="text-3xl font-bold text-green-400 mb-1">2</p>
            <p className="text-gray-500 text-sm">ELA & Math Proficiency</p>
          </div>

          <div className="glass-effect rounded-2xl p-6 text-center border border-dark-700 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Diploma</h3>
            <p className="text-xl font-bold text-yellow-400 mb-1">State-Endorsed</p>
            <p className="text-gray-500 text-sm">NJ DOE Certified</p>
          </div>
        </div>

        {/* Credit Requirements - Expanded Accordion */}
        <div className="mb-8">
          <div className="glass-effect rounded-2xl overflow-hidden border border-dark-700">
            <button
              onClick={() => toggleSection('credits')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-red-600 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">Credit Requirements</h2>
                  <p className="text-gray-400 text-sm">Minimum 120 credits meeting NJ Student Learning Standards</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'credits' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedSection === 'credits' && (
              <div className="px-6 pb-6 border-t border-dark-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  <div className="space-y-4">
                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">English Language Arts</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">20 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Grades 9-12 standards aligned</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Mathematics</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">15 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Including Algebra I, Geometry, and a third year building on both</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Science</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">15 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Laboratory Biology, plus Chemistry/Environmental/Physics, plus one additional lab science</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Social Studies</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">15 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Including World History (5 credits) with civics, economics, geography integration</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Financial Literacy</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">2.5 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Business, economic, and entrepreneurial literacy</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Health & Physical Education</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">3.75 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">150 minutes per week during each year of enrollment</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Visual & Performing Arts</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">5 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Art, music, drama, or dance</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">World Languages</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">5 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Or demonstration of Novice-High proficiency (ACTFL standards)</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">21st Century Life & Careers</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">5 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Or career-technical education</p>
                    </div>

                    <div className="bg-dark-800 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-white">Electives</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">34.75 credits</span>
                      </div>
                      <p className="text-gray-400 text-sm">Additional courses to reach 120 credit minimum</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg">
                  <p className="text-sm text-gray-300">
                    <strong className="text-blue-400">Technological Literacy:</strong> Integrated throughout the curriculum consistent with NJ Student Learning Standards
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* State Proficiency Testing */}
        <div className="mb-8">
          <div className="glass-effect rounded-2xl overflow-hidden border border-dark-700">
            <button
              onClick={() => toggleSection('testing')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">State Proficiency Requirements</h2>
                  <p className="text-gray-400 text-sm">ELA & Mathematics graduation assessments</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'testing' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedSection === 'testing' && (
              <div className="px-6 pb-6 border-t border-dark-700">
                <div className="pt-6 space-y-4">
                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      Primary Options
                    </h3>
                    <ul className="space-y-2 text-gray-300 text-sm pl-7">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Achieve passing score on state graduation proficiency test in ELA and Mathematics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Multiple opportunities provided to demonstrate proficiency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Remediation support available for students needing assistance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Alternative Proficiency Pathways (Classes 2023-2025)</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">1.</span>
                        <span>Substitute competency test approved by NJ State Board of Education</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">2.</span>
                        <span>Portfolio appeals process demonstrating proficiency</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-blue-400">Multilingual Learners:</strong> May demonstrate proficiency through portfolio appeals in native language (when available) plus NJ DOE-approved English fluency assessment
                    </p>
                  </div>

                  <div className="bg-purple-500/10 border-l-4 border-purple-500 rounded-r-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-purple-400">Students with Disabilities:</strong> Those participating in alternative assessments are not required to take repeated high school assessment components
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Financial Aid Requirement */}
        <div className="mb-8">
          <div className="glass-effect rounded-2xl overflow-hidden border border-dark-700">
            <button
              onClick={() => toggleSection('finaid')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">Financial Aid Application Requirement</h2>
                  <p className="text-gray-400 text-sm">Grade 11 classes beginning 2023-2024</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'finaid' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedSection === 'finaid' && (
              <div className="px-6 pb-6 border-t border-dark-700">
                <div className="pt-6 space-y-4">
                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Requirement</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Students and parents must complete and submit a financial aid application (FAFSA or prescribed form) as a prerequisite for receiving a high school diploma.
                    </p>
                    <p className="text-gray-400 text-xs">
                      Form prescribed by NJ Higher Education Student Assistance Authority
                    </p>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Exemption/Waiver</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Students may be exempted by submitting a waiver form signed by:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Parent (if student under 18), OR</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Student (if 18 or older), OR</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>School counselor (if student under 18 and parent signature cannot be reasonably obtained)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border-l-4 border-green-500 rounded-r-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-green-400">Important:</strong> No adverse action will be taken against students who receive an exemption. Counselors are not required to assist with application completion.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* State Seal of Biliteracy */}
        <div className="mb-8">
          <div className="glass-effect rounded-2xl overflow-hidden border border-dark-700">
            <button
              onClick={() => toggleSection('biliteracy')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Languages className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">State Seal of Biliteracy</h2>
                  <p className="text-gray-400 text-sm">Optional distinction for multilingual students</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'biliteracy' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedSection === 'biliteracy' && (
              <div className="px-6 pb-6 border-t border-dark-700">
                <div className="pt-6 space-y-4">
                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Eligibility</h3>
                    <p className="text-gray-300 text-sm mb-3">
                      Students who meet all graduation requirements AND demonstrate proficiency in:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>English Language Arts (per state graduation requirements)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>One or more world languages via NJ DOE-approved assessment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">World Languages Include:</h3>
                    <p className="text-gray-300 text-sm">
                      Traditional foreign languages, American Sign Language, Latin, and Native American languages
                    </p>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Recognition</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>NJ DOE-issued certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Special insignia on transcript</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <span>Recognition at graduation ceremony</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-blue-400">Assessment:</strong> Completed during student's next-to-last or final year of high school using NJ State Board-approved nationally recognized assessments
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Students with Disabilities */}
        <div className="mb-12">
          <div className="glass-effect rounded-2xl overflow-hidden border border-dark-700">
            <button
              onClick={() => toggleSection('iep')}
              className="w-full flex items-center justify-between p-6 hover:bg-dark-800 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h2 className="text-2xl font-bold text-white">Students with Disabilities</h2>
                  <p className="text-gray-400 text-sm">IEP alternate requirements & protections</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 transition-transform ${expandedSection === 'iep' ? 'rotate-180' : ''}`} 
              />
            </button>
            
            {expandedSection === 'iep' && (
              <div className="px-6 pb-6 border-t border-dark-700">
                <div className="pt-6 space-y-4">
                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Alternate Requirements</h3>
                    <p className="text-gray-300 text-sm">
                      The Board may specify alternate graduation requirements for individual students with disabilities through the IEP process. Any alternate requirements must be specifically addressed in the student's IEP.
                    </p>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Graduation as Change of Placement</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Written notice required to parents with procedural safeguards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Parents may request mediation or due process hearing prior to graduation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Reevaluation not required for graduation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Summary of academic achievement and functional performance provided</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-dark-800 rounded-xl p-5">
                    <h3 className="font-bold text-white mb-3">Diploma Options</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Students attending schools outside their district of residence may choose:
                    </p>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Diploma from school attended, OR</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Diploma from district of residence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border-l-4 border-green-500 rounded-r-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong className="text-green-400">Equal Participation:</strong> Students with disabilities who meet graduation standards shall have the opportunity to participate in graduation exercises and related activities on a nondiscriminatory basis.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Important Notice */}
        <div className="glass-effect rounded-2xl p-6 border-l-4 border-primary mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-white font-bold mb-2">Continued Enrollment</h3>
              <p className="text-gray-300 text-sm">
                Students exiting grade 12 without a diploma have the opportunity for continued high school enrollment until age 20 or until requirements are met, whichever comes first. Out-of-school individuals up to age 20 may demonstrate proficiency through alternative means applicable to their graduating class.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass-effect rounded-2xl p-6 text-center border border-dark-700">
          <h3 className="text-lg font-bold text-white mb-2">Questions about Graduation Requirements?</h3>
          <p className="text-gray-400">
            Contact the Guidance Department at <span className="text-primary">HSGuidance@brrsd.k12.nj.us</span> or (908) 231-8660 ext. 477200
          </p>
        </div>
      </div>
    </div>
  )
}
