'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex "GamerPro" Rodriguez',
      role: 'Twitch Streamer',
      followers: '150K+',
      avatar: 'AR',
      content: 'FandomChain revolutionized my streaming career. My token has created a whole new revenue stream and my community is more engaged than ever!',
      rating: 5,
      tokenValue: '+340%',
      color: 'text-neon-blue'
    },
    {
      name: 'Sarah "PixelQueen" Chen',
      role: 'YouTube Gaming',
      followers: '89K+',
      avatar: 'SC',
      content: 'The instant token creation was a game-changer. My fans love having exclusive access through my tokens, and I love the passive income!',
      rating: 5,
      tokenValue: '+280%',
      color: 'text-neon-pink'
    },
    {
      name: 'Mike "StreamMaster" Johnson',
      role: 'Multi-Platform',
      followers: '220K+',
      avatar: 'MJ',
      content: 'Finally, a way to monetize that actually benefits both me and my community. The trading features keep everyone engaged 24/7.',
      rating: 5,
      tokenValue: '+450%',
      color: 'text-neon-green'
    }
  ]

  const stats = [
    { label: 'Average Token Growth', value: '320%', color: 'text-neon-blue' },
    { label: 'Community Engagement', value: '+85%', color: 'text-neon-pink' },
    { label: 'Streamer Satisfaction', value: '98%', color: 'text-neon-green' }
  ]

  return (
    <section className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What</span>
            <span className="text-neon-purple neon-glow ml-4">Streamers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of successful streamers who have transformed their communities with FandomChain
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 border border-neon-blue/20 hover:scale-105 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-12 h-12 ${testimonial.color.replace('text-', 'bg-').replace('neon-', 'neon-')}/20 rounded-full flex items-center justify-center`}>
                  <span className={`font-bold ${testimonial.color}`}>{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role} • {testimonial.followers}</p>
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-neon-blue/30" />
                <p className="text-gray-300 leading-relaxed pl-4 italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-neon-yellow fill-current" />
                ))}
              </div>

              {/* Token Performance */}
              <div className="flex items-center justify-between pt-4 border-t border-neon-blue/20">
                <span className="text-gray-400 text-sm">Token Growth:</span>
                <span className={`font-bold ${testimonial.color} neon-glow`}>
                  {testimonial.tokenValue}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.8 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${stat.color} neon-glow mb-2`}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Success Story Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 text-center border border-neon-green/30"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-neon-green" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the <span className="text-neon-green neon-glow">Success</span> Stories
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            "Since launching my FandomChain token, my monthly revenue has increased by 340% and my community engagement is at an all-time high. This is the future of streaming monetization."
          </p>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center">
              <span className="font-bold text-neon-blue">AR</span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Alex "GamerPro" Rodriguez</div>
              <div className="text-gray-400 text-sm">150K+ Followers • Top 1% Streamer</div>
            </div>
          </div>
          <button className="btn-neon text-lg px-8 py-4">
            Start Your Success Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}
