'use client'

import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Users, 
  TrendingUp, 
  Clock, 
  Smartphone,
  DollarSign,
  Gamepad2
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Instant Token Creation',
      description: 'Create your stream token in under 5 seconds. No technical knowledge required.',
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Build and engage with your fanbase through exclusive token benefits and rewards.',
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10',
      borderColor: 'border-neon-pink/30'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Trading',
      description: 'Your tokens can be traded 24/7, creating continuous value for your community.',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10',
      borderColor: 'border-neon-green/30'
    },
    {
      icon: Shield,
      title: 'Secure Blockchain',
      description: 'Built on secure blockchain technology ensuring transparency and security.',
      color: 'text-neon-purple',
      bgColor: 'bg-neon-purple/10',
      borderColor: 'border-neon-purple/30'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Your tokens never sleep. Fans can trade and interact anytime, anywhere.',
      color: 'text-neon-yellow',
      bgColor: 'bg-neon-yellow/10',
      borderColor: 'border-neon-yellow/30'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'Full mobile support for streamers and fans on the go.',
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10',
      borderColor: 'border-neon-blue/30'
    }
  ]

  const gamingFeatures = [
    {
      title: 'Gaming Integration',
      description: 'Seamlessly integrate with popular gaming platforms and streaming software.',
      icon: Gamepad2,
      color: 'text-neon-green'
    },
    {
      title: 'Revenue Sharing',
      description: 'Earn from every transaction in your token economy with transparent fee structures.',
      icon: DollarSign,
      color: 'text-neon-pink'
    }
  ]

  return (
    <section id="features" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Powerful</span>
            <span className="text-neon-pink neon-glow ml-4">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to monetize your stream and build a thriving community
          </p>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass rounded-xl p-6 border ${feature.borderColor} hover:scale-105 transition-all duration-300 group`}
              >
                <div className={`${feature.bgColor} rounded-lg p-4 w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Gaming & Revenue Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {gamingFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="glass rounded-xl p-8 border border-neon-blue/20">
                <div className="flex items-start space-x-4">
                  <div className={`${feature.color} p-3 rounded-lg glass`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-neon-green/30">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-neon-green" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to <span className="text-neon-green neon-glow">Transform</span> Your Stream?
            </h3>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of streamers who have already discovered the power of tokenized communities. 
              Start building your digital empire today.
            </p>
            <button className="btn-neon text-lg px-8 py-4">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
