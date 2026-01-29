'use client'

import { Heart, Calendar, Phone, Mail, Award, Users, BookOpen, ClipboardCheck } from 'lucide-react'

export default function Counseling() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            School Counseling
          </h1>
          <p className="text-xl text-gray-400">
            Supporting your academic, personal, social, and professional development
          </p>
        </div>

        {/* About Us Section */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">About Us</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              The School Counseling Department at BRHS is a comprehensive and innovative center, which assists students in grades 9 - 12 with academic, personal, social, and professional development. Counselors are pro-active in their approach and emphasize technology to support learning goals.
            </p>
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-white font-semibold mb-2">🏆 Award-Winning Program</p>
              <p className="text-sm">
                The New Jersey School Boards Association has selected the BRHS School Counseling Department as a winner of the <strong>School Leader award for 2002</strong>. The department received the award for their innovative program "Integrating Technology in the Developmental Guidance Model."
              </p>
            </div>
          </div>
        </div>

        {/* Contacting Your Counselor */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">Contacting Your Counselor</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Students can obtain the assistance of a counselor in several ways:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="text-gray-300">Ask a teacher for permission to see the counselor</p>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="text-gray-300">Go to your counselor's Google Classroom and select the "youcanbookme" link</p>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="text-gray-300">Ask a parent/guardian to make initial contact with the counselor</p>
              </div>
            </div>
            <div className="bg-dark-800 rounded-lg p-4 border border-dark-700">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <p className="text-gray-300">Parents can call or email the counselor with any questions or concerns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="glass-effect rounded-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Supervisor</h3>
                <p className="text-white font-medium">Alan Iachini</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Office Phone</h3>
                <a href="tel:9082318660" className="flex items-center text-gray-300 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  (908) 231-8660 ext. 477200
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:HSGuidance@brrsd.k12.nj.us" className="flex items-center text-gray-300 hover:text-primary transition-colors break-all">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  HSGuidance@brrsd.k12.nj.us
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Fax</h3>
                <p className="text-gray-300">(908) 253-9480</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Information */}
        <div className="glass-effect rounded-lg p-8">
          <div className="flex items-center mb-6">
            <ClipboardCheck className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold text-white">Testing Information</h2>
          </div>

          {/* SAT Testing */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">SAT Test Dates 2025-2026</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="py-3 px-4 text-gray-400 font-semibold">Test Date</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Registration Deadline</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Late Registration*</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">Nov. 8, 2025</td>
                    <td className="py-3 px-4">Oct. 24, 2025</td>
                    <td className="py-3 px-4">Oct. 28, 2025</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">Dec. 6, 2025</td>
                    <td className="py-3 px-4">Nov. 21, 2025</td>
                    <td className="py-3 px-4">Nov. 25, 2025</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">March 14, 2026</td>
                    <td className="py-3 px-4">Feb. 27, 2026</td>
                    <td className="py-3 px-4">March 3, 2026</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">May 2, 2026</td>
                    <td className="py-3 px-4">Apr. 17, 2026</td>
                    <td className="py-3 px-4">April 21, 2026</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">June 6, 2026</td>
                    <td className="py-3 px-4">May 22, 2026</td>
                    <td className="py-3 px-4">May 26, 2026</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 p-4 bg-dark-800 rounded-lg border border-dark-700">
              <p className="text-sm text-gray-300">
                <strong className="text-primary">*Device Borrowing:</strong> Students who need to borrow a device from College Board will need to register and request their device earlier than the registration deadline—at least 30 days before test day.
              </p>
            </div>
          </div>

          {/* ACT Testing */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ACT Test Dates 2025-2026</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-dark-700">
                    <th className="py-3 px-4 text-gray-400 font-semibold">Test Date</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Regular Deadline</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Late Deadline</th>
                    <th className="py-3 px-4 text-gray-400 font-semibold">Standby Deadline</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">December 13, 2025</td>
                    <td className="py-3 px-4">November 7</td>
                    <td className="py-3 px-4">November 24</td>
                    <td className="py-3 px-4">December 5</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">February 14, 2026</td>
                    <td className="py-3 px-4">January 9</td>
                    <td className="py-3 px-4">January 23</td>
                    <td className="py-3 px-4">February 6</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">April 11, 2026</td>
                    <td className="py-3 px-4">March 6</td>
                    <td className="py-3 px-4">March 24</td>
                    <td className="py-3 px-4">April 3</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">June 13, 2026</td>
                    <td className="py-3 px-4">May 8</td>
                    <td className="py-3 px-4">May 29</td>
                    <td className="py-3 px-4">June 5</td>
                  </tr>
                  <tr className="border-b border-dark-800">
                    <td className="py-3 px-4 font-medium">July 11, 2026*</td>
                    <td className="py-3 px-4">June 5</td>
                    <td className="py-3 px-4">June 24</td>
                    <td className="py-3 px-4">July 3</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
