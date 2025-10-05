import type { Metadata } from 'next'
import { Orbitron } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MatrixBackground from '@/components/MatrixBackground'

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'FandomChain - Monetize Your Stream',
  description: 'The blockchain solution for streamers to instantly create tokens and monetize their content. Join the future of streaming with FandomChain.',
  keywords: 'blockchain, streaming, tokens, monetization, gaming, crypto',
  authors: [{ name: 'FandomChain Team' }],
  openGraph: {
    title: 'FandomChain - Monetize Your Stream',
    description: 'The blockchain solution for streamers to instantly create tokens and monetize their content.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body className={`${orbitron.className} min-h-screen bg-dark-900`}>
        <MatrixBackground />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
