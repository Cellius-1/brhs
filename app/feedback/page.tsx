'use client'

import { useState } from 'react'
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react'

type FeedbackType = 'Bug' | 'Suggestion' | 'Content Update' | 'Accessibility' | 'Other'

export default function FeedbackPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('Suggestion')
  const [pageUrl, setPageUrl] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <header className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">Website Feedback</h1>
          <p className="text-gray-400">
            Tell us what is working, what is confusing, or what should be improved on the BRHS Student Hub.
          </p>
        </header>

        <section className="glass-effect rounded-2xl border border-dark-700 p-6">
          {submitted ? (
            <div className="text-center py-6" role="status" aria-live="polite">
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-white mb-2">Thanks for your feedback!</h2>
              <p className="text-gray-300 mb-4">
                Your input helps us improve the BRHS website experience for students, families, and staff.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white hover:border-primary/40 transition-colors"
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Website feedback form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="feedback-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name (optional)
                  </label>
                  <input
                    id="feedback-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="feedback-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email (optional)
                  </label>
                  <input
                    id="feedback-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="feedback-type" className="block text-sm font-medium text-gray-300 mb-2">
                  Feedback Type
                </label>
                <select
                  id="feedback-type"
                  value={feedbackType}
                  onChange={(e) => setFeedbackType(e.target.value as FeedbackType)}
                  className="w-full px-3 py-2.5 bg-dark-900 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Bug</option>
                  <option>Suggestion</option>
                  <option>Content Update</option>
                  <option>Accessibility</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="feedback-page-url" className="block text-sm font-medium text-gray-300 mb-2">
                  Page URL or section (optional)
                </label>
                <input
                  id="feedback-page-url"
                  type="text"
                  value={pageUrl}
                  onChange={(e) => setPageUrl(e.target.value)}
                  className="w-full px-3 py-2.5 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Example: /events or Course Catalog filter"
                />
              </div>

              <div>
                <label htmlFor="feedback-message" className="block text-sm font-medium text-gray-300 mb-2">
                  Feedback message
                </label>
                <textarea
                  id="feedback-message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2.5 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe your feedback in detail."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-xs text-gray-500">
                  This form currently records feedback in-session for quick collection UI. Integrate with your backend or form service to store responses.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                  Submit Feedback
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
