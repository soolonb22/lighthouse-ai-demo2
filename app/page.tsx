'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lighthouse-blue rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl">🏮</span>
              </div>
              <h1 className="text-2xl font-bold text-lighthouse-blue">Lighthouse AI</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-lighthouse-blue">Features</a>
              <a href="#demos" className="text-gray-600 hover:text-lighthouse-blue">Demos</a>
              <a href="#contact" className="text-gray-600 hover:text-lighthouse-blue">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          AI Assistant Demo Platform
        </h2>
        <p className="text-xl md:text-2xl text-lighthouse-gold mb-4 font-semibold">
          Guiding every conversation
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          See how AI handles customer support, intake, follow-ups, and staff assistance — 
          all in one intelligent system
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#demos" 
            className="bg-lighthouse-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Explore Demos
          </a>
          <a 
            href="#contact" 
            className="border-2 border-lighthouse-blue text-lighthouse-blue px-8 py-4 rounded-lg font-semibold hover:bg-lighthouse-blue hover:text-white transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Demo Cards */}
      <section id="demos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Experience Our AI in Action
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Inbound Enquiries */}
          <Link href="/inbound">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-lighthouse-blue">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Inbound Enquiries</h4>
              <p className="text-gray-600 mb-4">
                Handle customer questions, appointment bookings, and document collection automatically
              </p>
              <div className="text-lighthouse-blue font-semibold">Try Demo →</div>
            </div>
          </Link>

          {/* Outbound Follow-Ups */}
          <Link href="/outbound">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-lighthouse-blue">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Outbound Follow-Ups</h4>
              <p className="text-gray-600 mb-4">
                Automated appointment reminders, re-engagement campaigns, and post-service feedback
              </p>
              <div className="text-lighthouse-blue font-semibold">Try Demo →</div>
            </div>
          </Link>

          {/* Internal Staff Support */}
          <Link href="/internal">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-lighthouse-blue">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Internal Staff Support</h4>
              <p className="text-gray-600 mb-4">
                Help your team find answers fast with instant access to policies, procedures, and resources
              </p>
              <div className="text-lighthouse-blue font-semibold">Try Demo →</div>
            </div>
          </Link>

          {/* Voice/Phone Handling */}
          <Link href="/voice">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer border-2 border-transparent hover:border-lighthouse-blue">
              <div className="text-4xl mb-4">☎️</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Phone/Voice Call Handling</h4>
              <p className="text-gray-600 mb-4">
                AI-powered phone support that handles calls, takes messages, and routes to the right person
              </p>
              <div className="text-lighthouse-blue font-semibold">Try Demo →</div>
            </div>
          </Link>
        </div>

        {/* Customization Card */}
        <Link href="/customize">
          <div className="bg-gradient-to-r from-lighthouse-blue to-lighthouse-teal p-8 rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer">
            <div className="text-center text-white">
              <div className="text-4xl mb-4">🎨</div>
              <h4 className="text-2xl font-bold mb-3">See How It's Customised</h4>
              <p className="mb-4 opacity-90">
                Industry templates for NDIS providers, trades, real estate, health & fitness, and more
              </p>
              <div className="font-semibold">Explore Templates →</div>
            </div>
          </div>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Every Business
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h5 className="text-xl font-bold mb-2">24/7 Availability</h5>
              <p className="text-gray-600">Never miss an enquiry, even after hours</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h5 className="text-xl font-bold mb-2">Seamless Integration</h5>
              <p className="text-gray-600">Works with your existing tools and workflows</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h5 className="text-xl font-bold mb-2">Smart Analytics</h5>
              <p className="text-gray-600">Track performance and improve continuously</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Customer Support?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          See how Lighthouse AI can automate your workflows and delight your customers
        </p>
        <button className="bg-lighthouse-gold text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition text-lg">
          Schedule a Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-lighthouse-gold rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🏮</span>
            </div>
            <span className="text-xl font-bold">Lighthouse AI</span>
          </div>
          <p className="text-gray-400">Guiding every conversation</p>
          <p className="text-gray-500 text-sm mt-4">© 2025 Lighthouse AI. Built with care in Australia.</p>
        </div>
      </footer>
    </div>
  )
}
