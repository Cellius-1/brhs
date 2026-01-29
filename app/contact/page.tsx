'use client'

import React from 'react'
import { Phone, Mail, MapPin, Laptop, DollarSign, Heart, Calendar } from 'lucide-react'

export default function Contact() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-400">
            High School Contact Information
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* General Questions */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">General Questions or Concerns</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:HighSchool@brrsd.k12.nj.us" className="text-white hover:text-primary transition-colors">
                    HighSchool@brrsd.k12.nj.us
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call</p>
                  <a href="tel:9082318660,477000" className="text-white hover:text-primary transition-colors">
                    908-231-8660 ext. 477000
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Counseling Office */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Heart className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Counseling Office</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:hsguidance@brrsd.k12.nj.us" className="text-white hover:text-green-400 transition-colors">
                    hsguidance@brrsd.k12.nj.us
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call</p>
                  <a href="tel:9082318660,477200" className="text-white hover:text-green-400 transition-colors">
                    908-231-8660 ext. 477200
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Absence Reporting */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Calendar className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Absence Reporting</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300">
                Please use our Absence Reporting Form.
              </p>
              <a 
                href="#" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-yellow-500/50"
              >
                Report Absence
              </a>
            </div>
          </div>

          {/* Nurse's Office */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-red-500/20 rounded-lg">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Nurse's Office</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call</p>
                  <a href="tel:9082318660,477100" className="text-white hover:text-red-400 transition-colors">
                    908-231-8660 ext. 477100
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Athletics */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Athletics</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call</p>
                  <a href="tel:9082318660,478001" className="text-white hover:text-blue-400 transition-colors">
                    908-231-8660 ext. 478001
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Chromebook Issues */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Laptop className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Chromebook Issues</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Visit the <span className="font-semibold text-purple-400">Genius Bar</span> in the Library during Unit Lunch
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Outstanding Fines */}
          <div className="glass-effect rounded-lg p-8 border border-dark-700 card-hover">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <DollarSign className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Questions Regarding Outstanding Fines</h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a href="mailto:BRHSFines@brrsd.k12.nj.us" className="text-white hover:text-amber-400 transition-colors">
                    BRHSFines@brrsd.k12.nj.us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="glass-effect rounded-lg p-8 border border-dark-700">
          <h3 className="text-2xl font-bold text-white mb-6">Quick Tips</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl leading-none">•</span>
              <div>
                <p className="text-gray-300">For urgent matters during school hours, call the main office at <span className="text-primary font-semibold">908-231-8660 ext. 477000</span></p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl leading-none">•</span>
              <div>
                <p className="text-gray-300">When calling, have your student's name and grade level ready for faster assistance</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl leading-none">•</span>
              <div>
                <p className="text-gray-300">Email responses typically take 1-2 business days</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl leading-none">•</span>
              <div>
                <p className="text-gray-300">For technology issues, visit the Genius Bar during your lunch period for immediate help</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
