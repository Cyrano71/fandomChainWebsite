'use client'

import { motion } from 'framer-motion'
import { Play, Zap, Users, TrendingUp, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Stream',
      description: 'Link your streaming platform and verify your identity in seconds.',
      icon: Play,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      delay: 0
    },
    {
      number: '02',
      title: 'Create Your Token',
      description: 'Generate your unique stream token with custom branding and features.',
      icon: Zap,
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10',
      delay: 0.2
    },
    {
      number: '03',
      title: 'Build Your Community',
      description: 'Share your token with fans and start building your tokenized community.',
      icon: Users,
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
      delay: 0.4
    },
    {
      number: '04',
      title: 'Monetize & Grow',
      description: 'Watch your token value grow as your community trades and engages.',
      icon: TrendingUp,
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      delay: 0.6
    }
  ]

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">How</span>
            <span className="text-neon-green neon-glow ml-4">It Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in minutes and begin monetizing your stream with our simple 4-step process
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: step.delay }}
                viewport={{ once: true }}
                className={`flex items-center space-x-6 ${!isEven ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}
              >
                {/* Step Content */}
                <div className={`flex-1 ${!isEven ? 'lg:text-right' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.bgColor} rounded-full mb-4 ${!isEven ? 'lg:ml-auto' : ''}`}>
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className={`text-6xl font-bold text-gray-800 mb-2 ${!isEven ? 'lg:text-right' : ''}`}>
                    {step.number}
                  </div>
                  <h3 className={`text-2xl font-bold text-white mb-3 ${!isEven ? 'lg:text-right' : ''}`}>
                    {step.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${!isEven ? 'lg:text-right' : ''}`}>
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: step.delay + 0.3 }}
                      viewport={{ once: true }}
                      className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center"
                    >
                      <ArrowRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Visual Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            <span className="text-neon-blue">Process</span> <span className="text-neon-pink">Timeline</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-neon-pink via-neon-green to-neon-purple transform -translate-y-1/2 rounded-full"></div>
            
            {/* Timeline Points */}
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={step.number} className="text-center relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
                    viewport={{ once: true }}
                    className={`w-8 h-8 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-2 border-2 ${step.color.replace('text-', 'border-')}`}
                  >
                    <div className={`w-3 h-3 ${step.color.replace('text-', 'bg-')} rounded-full`}></div>
                  </motion.div>
                  <div className="text-sm font-semibold text-white">{step.title}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {index === 0 && '~30 seconds'}
                    {index === 1 && '~5 seconds'}
                    {index === 2 && '~2 minutes'}
                    {index === 3 && 'Ongoing'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-xl p-8 border border-neon-blue/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to <span className="text-neon-blue neon-glow">Start</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the revolution and start monetizing your stream in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-neon text-lg px-8 py-4">
                Get Started Now
              </button>
              <button className="btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
