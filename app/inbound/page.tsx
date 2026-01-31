'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function InboundDemo() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '👋 Hi! I\'m here to help you get started. What brings you here today?' }
  ])
  const [activeProcess, setActiveProcess] = useState<string[]>([])

  const quickReplies = [
    'Book an appointment',
    'Learn about services',
    'Submit documents',
    'Speak with someone'
  ]

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { role: 'user', content: reply }])
    
    // Simulate AI processing
    setActiveProcess(['✓ Intent detected', '✓ Context gathered'])
    
    setTimeout(() => {
      let response = ''
      switch(reply) {
        case 'Book an appointment':
          response = 'I\'d be happy to help you book an appointment! What type of service are you interested in, and when works best for you?'
          setActiveProcess(prev => [...prev, '✓ Response generated', '✓ Calendar checked'])
          break
        case 'Learn about services':
          response = 'We offer a range of support services including personal care, community access, and skill development. Which area interests you most?'
          setActiveProcess(prev => [...prev, '✓ Response generated', '✓ Info retrieved'])
          break
        case 'Submit documents':
          response = 'I can help you submit your documents securely. What type of document would you like to upload? (NDIS Plan, Consent Form, ID, etc.)'
          setActiveProcess(prev => [...prev, '✓ Response generated', '✓ Upload ready'])
          break
        case 'Speak with someone':
          response = 'I\'ll connect you with a team member right away. Can I have your name and the best way to reach you?'
          setActiveProcess(prev => [...prev, '✓ Response generated', '✓ Staff notified'])
          break
        default:
          response = 'I understand. How can I assist you further?'
      }
      
      setMessages(prev => [...prev, { role: 'assistant', content: response }])
    }, 1000)
  }

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Inbound Enquiries Demo</h1>
          <p className="text-lg text-gray-600">NDIS Provider Example</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-[600px] flex flex-col">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <div className="w-10 h-10 bg-lighthouse-blue rounded-full flex items-center justify-center">
                  <span className="text-white">🤖</span>
                </div>
                <div>
                  <div className="font-semibold">AI Assistant</div>
                  <div className="text-sm text-green-600">● Online</div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-lighthouse-blue text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Replies */}
              {messages.length === 1 && (
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-3">Quick options:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleQuickReply(reply)}
                        className="text-left px-4 py-3 border-2 border-lighthouse-blue text-lighthouse-blue rounded-lg hover:bg-lighthouse-blue hover:text-white transition"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="border-t pt-4 mt-4">
                <input 
                  type="text" 
                  placeholder="Type your message or select an option above..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lighthouse-blue"
                />
              </div>
            </div>
          </div>

          {/* What's Happening Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What's Happening</h3>
              
              {activeProcess.length > 0 && (
                <div className="space-y-2 mb-6">
                  {activeProcess.map((process, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-green-600">
                      <span>{process}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-3 text-gray-700">Behind the scenes:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Natural language processing identifies intent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Jotform triggered for document collection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Zapier workflow automates data capture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>CRM updated in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Staff notifications sent when needed</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 bg-lighthouse-blue/10 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Demo Tip:</strong> Click any quick reply button to see the AI in action!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
