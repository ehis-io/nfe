import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neat Frequency Entertainment | Sound, Light, Stage',
  description: 'Premium Sound, Light, and Stage entertainment solutions.',
}

import Navbar from './components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
