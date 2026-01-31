'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function OutboundDemo() {
  const [selectedScenario, setSelectedScenario] = useState('missed')

  const scenarios = {
    missed: {
      title: 'Missed Appointment Follow-Up',
      message: 'Hi Sarah, we noticed you missed your appointment today at 10am. No worries! Would you like to reschedule?',
      options: ['Reschedule', 'Cancel', 'Call Me']
    },
    reminder: {
      title: 'Appointment Reminder',
      message: 'Hi John! Just a friendly reminder about your appointment tomorrow at 2pm. Reply YES to confirm or CHANGE to reschedule.',
      options: ['YES', 'CHANGE', 'CANCEL']
    },
    feedback: {
      title: 'Post-Service Feedback',
      message: 'Thanks for your visit today! How was your experience? Rate us 1-5 stars and let us know how we did.',
      options: ['⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐']
    },
    reengage: {
      title: 'Re-Engagement Campaign',
      message: 'We miss you! It\'s been a while since your last visit. We\'d love to see you again. Book now and get 15% off your next service!',
      options: ['Book Now', 'Maybe Later', 'Unsubscribe']
    }
  }

  const currentScenario = scenarios[selectedScenario as keyof typeof scenarios]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-lighthouse-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🏮</span>
              </div>
              <span className="text-xl font-bold text-lighthouse-blue">Lighthouse AI</span>
            </Link>
            <Link href="/" className="text-lighthouse-blue hover:text-blue-900">
              ← Back to Hub
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Outbound Follow-Up Demo</h1>
          <p className="text-lg text-gray-600">Automated SMS & Email Campaigns</p>
        </div>

        {/* Scenario Selector */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Select a Scenario:</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedScenario === key
                      ? 'border-lighthouse-blue bg-lighthouse-blue text-white'
                      : 'border-gray-200 hover:border-lighthouse-blue'
                  }`}
                >
                  <div className="font-semibold text-sm">{scenario.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* SMS Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-700">📱 SMS Preview</h3>
                  <span className="text-sm text-gray-500">Sent: 2:15 PM</span>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="max-w-md mx-auto">
                <div className="bg-gray-100 rounded-3xl p-4 shadow-xl">
                  <div className="bg-white rounded-2xl p-4 min-h-[400px] flex flex-col">
                    <div className="flex-1">
                      <div className="bg-gray-200 rounded-lg p-4 mb-4">
                        <p className="text-sm">{currentScenario.message}</p>
                      </div>
                    </div>

                    {/* Response Options */}
                    <div className="space-y-2">
                      {currentScenario.options.map((option, idx) => (
                        <button
                          key={idx}
                          className="w-full py-3 px-4 bg-lighthouse-blue text-white rounded-lg hover:bg-blue-900 transition"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How It Works</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <div className="font-semibold">Trigger Detection</div>
                    <div className="text-gray-600">System detects missed appointment, upcoming date, or engagement window</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <div className="font-semibold">Personalization</div>
                    <div className="text-gray-600">Message includes client name, specific details, and relevant context</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <div className="font-semibold">Smart Delivery</div>
                    <div className="text-gray-600">Sent at optimal time based on client preferences</div>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <div className="font-semibold">Response Handling</div>
                    <div className="text-gray-600">AI processes replies and updates booking system automatically</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-lighthouse-gold/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Result:</strong> 40% increase in appointment adherence and 25% boost in re-bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
