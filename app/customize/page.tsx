'use client'

import Link from 'next/link'

export default function CustomizeDemo() {
  const industries = [
    {
      name: 'NDIS Providers',
      icon: '🤝',
      features: ['Participant intake', 'Service booking', 'Document collection', 'Compliance tracking']
    },
    {
      name: 'Trades & Services',
      icon: '🔧',
      features: ['Quote requests', 'Job scheduling', 'Site photos', 'Invoice tracking']
    },
    {
      name: 'Real Estate',
      icon: '🏠',
      features: ['Property enquiries', 'Inspection bookings', 'Tenant support', 'Maintenance requests']
    },
    {
      name: 'Health & Fitness',
      icon: '💪',
      features: ['Class bookings', 'PT sessions', 'Membership queries', 'Health assessments']
    },
    {
      name: 'Beauty & Wellness',
      icon: '✨',
      features: ['Appointment booking', 'Service packages', 'Product recommendations', 'Loyalty programs']
    },
    {
      name: 'Customer Support',
      icon: '🎧',
      features: ['Ticket management', 'FAQ automation', 'Escalation routing', 'Feedback collection']
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Build Your Custom Assistant</h1>
          <p className="text-lg text-gray-600">Choose your industry template to get started</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="text-5xl mb-4 text-center">{industry.icon}</div>
              <h3 className="text-xl font-bold text-center mb-4">{industry.name}</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {industry.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-2 text-lighthouse-blue">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-4 py-2 bg-lighthouse-blue text-white rounded-lg hover:bg-blue-900 transition">
                Select Template
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">What's Included in Every Template</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-bold mb-2">Conversation Flows</h4>
              <p className="text-sm text-gray-600">Pre-built dialogues specific to your industry</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h4 className="font-bold mb-2">Brand Customization</h4>
              <p className="text-sm text-gray-600">Match your colors, tone, and style</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔗</div>
              <h4 className="font-bold mb-2">Integration Ready</h4>
              <p className="text-sm text-gray-600">Connect to your existing tools</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-lighthouse-gold text-white rounded-lg font-semibold hover:bg-yellow-600 transition">
              Schedule a Demo Call
            </button>
            <button className="px-8 py-4 border-2 border-lighthouse-blue text-lighthouse-blue rounded-lg font-semibold hover:bg-lighthouse-blue hover:text-white transition">
              View Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
