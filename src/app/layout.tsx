import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { Dancing_Script } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const dancing_script = Dancing_Script({ weight: ['400','700'],subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Next',
  description: 'Next Js Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
        
        </Header>
        {children}
        </body>
    </html>
  )
}
