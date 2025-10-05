'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Streamers',
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue/10'
    },
    {
      icon: DollarSign,
      value: '$2.5M+',
      label: 'Volume Traded',
      color: 'text-neon-green',
      bgColor: 'bg-neon-green/10'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Success Rate',
      color: 'text-neon-pink',
      bgColor: 'bg-neon-pink/10'
    },
    {
      icon: Zap,
      value: '< 5s',
      label: 'Token Creation',
      color: 'text-neon-yellow',
      bgColor: 'bg-neon-yellow/10'
    }
  ]

  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Platform</span>
            <span className="text-neon-blue neon-glow ml-4">Statistics</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of streamers already monetizing their content with FandomChain
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`${stat.bgColor} rounded-2xl p-8 mb-4 group-hover:scale-105 transition-transform duration-300`}>
                  <Icon className={`w-12 h-12 mx-auto ${stat.color} mb-4`} />
                  <motion.div
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`text-3xl lg:text-4xl font-bold ${stat.color} neon-glow`}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold text-white">{stat.label}</h3>
              </motion.div>
            )
          })}
        </div>

        {/* Animated Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="glass rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold">Streamer Growth</span>
              <span className="text-neon-green font-bold">+150%</span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "85%" }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
                className="h-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-full"
              ></motion.div>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-semibold">Token Volume</span>
              <span className="text-neon-pink font-bold">+300%</span>
            </div>
            <div className="w-full bg-dark-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "92%" }}
                transition={{ duration: 2, delay: 1.2 }}
                viewport={{ once: true }}
                className="h-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
