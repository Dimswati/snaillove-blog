import Header from '@/components/globals/Header'
import '../globals.css'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import { cn } from '@/lib/utils'

export const cabin = Cabin({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Snail farming done professionally',
  description: 'Learn snail farming from industry experts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(cabin.className,'bg-gray-100')}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
