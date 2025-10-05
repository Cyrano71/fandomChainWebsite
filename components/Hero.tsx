'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play, Zap, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <Image
                src="/Logo.png"
                alt="FandomChain Logo"
                width={120}
                height={120}
                className="mx-auto lg:mx-0 w-24 h-24 lg:w-32 lg:h-32 object-contain"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-neon-blue neon-glow">Monetize</span>
              <br />
              <span className="text-white">Your</span>
              <br />
              <span className="text-neon-pink neon-glow">Stream</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              The blockchain solution allowing streamers to instantly create tokens and start selling them to their community. Join the future of streaming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-neon flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <Play className="w-5 h-5" />
                <span>Start Streaming</span>
              </button>
              <button className="btn-neon border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black flex items-center justify-center space-x-2 text-lg px-8 py-4">
                <Zap className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-12 max-w-md mx-auto lg:mx-0"
            >
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Central Token */}
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass rounded-full flex items-center justify-center"
              >
                <div className="text-4xl font-bold text-neon-blue neon-glow">FC</div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-green rounded-full neon-glow"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-pink rounded-full neon-glow"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-neon-blue rounded-full neon-glow"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-neon-yellow rounded-full neon-glow"></div>
              </motion.div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <motion.line
                  x1="200" y1="200" x2="100" y2="100"
                  stroke="url(#gradient1)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <motion.line
                  x1="200" y1="200" x2="300" y2="100"
                  stroke="url(#gradient2)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                <motion.line
                  x1="200" y1="200" x2="100" y2="300"
                  stroke="url(#gradient3)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2 }}
                />
                <motion.line
                  x1="200" y1="200" x2="300" y2="300"
                  stroke="url(#gradient4)" strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                />
                
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="100%" stopColor="#00f5ff" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#ff0080" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff0080" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ffff00" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 left-10 glass p-3 rounded-lg"
              >
                <TrendingUp className="w-6 h-6 text-neon-green" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute top-10 right-10 glass p-3 rounded-lg"
              >
                <Users className="w-6 h-6 text-neon-pink" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute bottom-10 left-10 glass p-3 rounded-lg"
              >
                <Zap className="w-6 h-6 text-neon-blue" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
