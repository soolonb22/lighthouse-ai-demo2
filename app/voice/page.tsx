'use client'

import Link from 'next/link'

export default function VoiceDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Phone/Voice Call Handling Demo</h1>
          <p className="text-lg text-gray-600">AI-Powered Phone Support</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">☎️</div>
              <h3 className="text-2xl font-bold mb-2">Incoming Call: (07) 4944 XXXX</h3>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-lighthouse-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🎙️</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700 mb-2">
                      "Thank you for calling Lighthouse Support Services. I'm the virtual assistant. 
                      I can help you book an appointment, answer questions about our services, or connect 
                      you with a team member. What would you like help with today?"
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>🔊</span>
                      <span>Natural, friendly voice tone</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">👤</span>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-gray-700">"I need to book an appointment for support services"</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-lighthouse-blue rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">📞</span>
                  Call Capabilities
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Book appointments via voice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Answer FAQs instantly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Route to appropriate staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Take detailed messages</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Request callbacks</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-lighthouse-gold rounded-lg p-6">
                <h4 className="font-bold mb-3 flex items-center">
                  <span className="mr-2">⚡</span>
                  Smart Features
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Natural language understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Sentiment detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Escalation when needed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Call transcription & logging</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-lighthouse-blue/10 rounded-lg">
              <h4 className="font-bold mb-2 text-gray-900">Why Voice AI Matters</h4>
              <p className="text-gray-700 text-sm">
                Never miss a call again. Our AI handles calls 24/7, ensuring every enquiry is captured and 
                processed immediately. Urgent matters are escalated to staff, routine requests are handled 
                automatically, and all interactions are logged for quality and compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
