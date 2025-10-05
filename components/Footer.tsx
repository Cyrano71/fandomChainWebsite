'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Twitter, 
  Youtube, 
  Twitch, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  Zap,
  Shield,
  Users
} from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'Telegram', href: '#' },
      { name: 'Reddit', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Status Page', href: '#' },
      { name: 'Bug Reports', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' },
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  const features = [
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Shield, text: 'Secure & Reliable' },
    { icon: Users, text: 'Community Driven' },
  ]

  return (
    <footer id="contact" className="relative bg-dark-900/50 backdrop-blur-sm">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Image
                    src="/Logo.png"
                    alt="FandomChain Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                  <div className="absolute inset-0 animate-pulse-neon">
                    <div className="w-full h-full bg-neon-blue rounded-full opacity-20 blur-sm"></div>
                  </div>
                </div>
                <span className="text-xl font-bold text-neon-blue neon-glow">
                  FandomChain
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                The future of streaming monetization. Empowering streamers to create, 
                trade, and grow their communities through blockchain technology.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-neon-blue/20 rounded flex items-center justify-center">
                        <Icon className="w-3 h-3 text-neon-blue" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-neon-blue/20 rounded-lg flex items-center justify-center hover:bg-neon-blue/30 transition-colors duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-neon-blue group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-6 capitalize">
                  {section}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-neon-blue transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 border-t border-neon-blue/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay <span className="text-neon-blue">Connected</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new features, partnerships, and success stories from our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-800 border border-neon-blue/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors duration-300"
              />
              <button className="btn-neon px-6 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="py-8 border-t border-neon-blue/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-neon-blue" />
              <div>
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400 text-sm">hello@fandomchain.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-neon-blue" />
              <div>
                <div className="text-white font-semibold">Support</div>
                <div className="text-gray-400 text-sm">24/7 Live Chat</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-neon-blue" />
              <div>
                <div className="text-white font-semibold">Location</div>
                <div className="text-gray-400 text-sm">Global Community</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-neon-blue/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 FandomChain. All rights reserved. Built with ❤️ for the streaming community.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
