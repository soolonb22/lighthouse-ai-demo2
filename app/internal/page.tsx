'use client'

import Link from 'next/link'

export default function InternalDemo() {
  const commonQuestions = [
    {
      q: 'What documents do I need for new participant intake?',
      a: 'Required: NDIS Plan (current), Consent Form (signed), Photo ID. Optional: Recent reports (OT/Psych/Physio), GP referral, Support coordination letter.'
    },
    {
      q: 'How do I process an incident report?',
      a: 'Complete the incident form within 24 hours, notify your supervisor immediately, document witness statements, and submit via the portal.'
    },
    {
      q: 'What\'s our cancellation policy?',
      a: 'Clients must provide 48 hours notice. Short notice cancellations may incur fees as per service agreement.'
    }
  ]

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Internal Staff Support Demo</h1>
          <p className="text-lg text-gray-600">AI Assistant for Your Team</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Common Staff Questions</h3>
            <div className="space-y-6">
              {commonQuestions.map((item, idx) => (
                <div key={idx} className="border-l-4 border-lighthouse-blue pl-4">
                  <div className="font-semibold text-gray-900 mb-2">{item.q}</div>
                  <div className="text-gray-600 text-sm">{item.a}</div>
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs px-3 py-1 bg-lighthouse-blue/10 text-lighthouse-blue rounded">
                      📎 Download Checklist
                    </button>
                    <button className="text-xs px-3 py-1 bg-lighthouse-blue/10 text-lighthouse-blue rounded">
                      📋 View Template
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <div className="font-semibold mb-1">Instant Answers</div>
                  <div className="text-sm text-gray-600">No more waiting for supervisor responses</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📚</div>
                <div>
                  <div className="font-semibold mb-1">Centralized Knowledge</div>
                  <div className="text-sm text-gray-600">All policies and procedures in one place</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🎯</div>
                <div>
                  <div className="font-semibold mb-1">Consistent Responses</div>
                  <div className="text-sm text-gray-600">Everyone gets the same correct information</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
