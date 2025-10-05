'use client'

import { motion } from 'framer-motion'
import { Zap, Rocket, Users, TrendingUp } from 'lucide-react'

export default function CTA() {
  const benefits = [
    {
      icon: Zap,
      text: 'Create tokens in under 5 seconds',
      color: 'text-neon-blue'
    },
    {
      icon: Users,
      text: 'Build engaged communities',
      color: 'text-neon-pink'
    },
    {
      icon: TrendingUp,
      text: 'Increase revenue by 300%+',
      color: 'text-neon-green'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA Card */}
          <div className="glass rounded-3xl p-12 border border-neon-blue/30 max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">Ready to</span>
              <br />
              <span className="text-neon-blue neon-glow">Launch</span>
              <span className="text-white"> Your</span>
              <br />
              <span className="text-neon-pink neon-glow">Stream Token</span>
              <span className="text-white">?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Join thousands of streamers who are already monetizing their content with FandomChain. 
              Start building your tokenized community today.
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                    <div className={`w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${benefit.color}`} />
                    </div>
                    <span className="text-gray-300 font-medium">{benefit.text}</span>
                  </div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="btn-neon text-lg px-12 py-4 flex items-center justify-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Start Creating Now</span>
              </button>
              <button className="btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black text-lg px-12 py-4 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Join Community</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-neon-blue/20"
            >
              <p className="text-gray-400 text-sm mb-4">Trusted by streamers worldwide</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-neon-blue">10,000+</div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="text-2xl font-bold text-neon-pink">$2.5M+</div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="text-2xl font-bold text-neon-green">98%</div>
                <div className="w-px h-8 bg-gray-600"></div>
                <div className="text-2xl font-bold text-neon-purple">24/7</div>
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Active Streamers • Volume Traded • Success Rate • Support
              </p>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <div className="glass rounded-xl p-6 border border-neon-green/20">
              <h3 className="text-xl font-bold text-white mb-4">
                <span className="text-neon-green">✨</span> Limited Time Offer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get started with <span className="text-neon-blue font-semibold">zero setup fees</span> and 
                <span className="text-neon-pink font-semibold"> premium support</span> for the first 1000 streamers. 
                Don't miss out on the future of streaming monetization!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
