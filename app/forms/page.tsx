'use client'

import { FileText, ClipboardCheck } from 'lucide-react'

export default function Forms() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Student Forms
          </h1>
          <p className="text-xl text-gray-400">
            Request forms and report issues
          </p>
        </div>

        {/* Forms */}
        <div className="space-y-6">
          {/* Student ID Request */}
          <div className="glass-effect rounded-lg p-8 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <ClipboardCheck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Student ID Request Form</h2>
                <p className="text-gray-400">Request a new or replacement student ID card</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">When to use this form:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Lost or stolen ID card</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Damaged ID card</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>New student without ID</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 mb-4">
              <strong className="text-white">Note:</strong> First ID is free. Replacement fee: $5
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScVv7PCx2Bfmxa13Ho6rDFQu7F4zjnDY1FNXvfkJYFyFkPO1w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Open Student ID Request Form
            </a>
          </div>

          {/* Lost and Found */}
          <div className="glass-effect rounded-lg p-8 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Lost & Found Form</h2>
                <p className="text-gray-400">Report lost items or claim found items</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">How it works:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Submit a detailed description of your lost item</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>Check the lost & found in the main office</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                  <span>We'll contact you if your item is found</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 mb-4">
              <strong className="text-white">Location:</strong> Lost & Found is located in the Main Office, Room 100
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScVv7PCx2Bfmxa13Ho6rDFQu7F4zjnDY1FNXvfkJYFyFkPO1w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
            >
              Open Lost & Found Form
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 glass-effect rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-3">Need Help?</h3>
          <p className="text-gray-400">
            If you have questions about these forms or need assistance, please visit the Main Office 
            or contact us at <span className="text-primary">office@brrsd.k12.nj.us</span>
          </p>
        </div>
      </div>
    </div>
  )
}
