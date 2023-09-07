//import { Nav } from '@/components/layout/nav'
import Link from 'next/link'
import { Nav } from '../components/layout/nav'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  display: 'swap', 
  weight: '600', 
  variable: '--font-mont',
})

export const metadata = {
  title: '{ Lucas Amaral }',
  description: 'Portfolio personal page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
    className={`${montserrat.variable} font-sans`}
    >
    <body className="bg-nav text-white scrollbar-thin scrollbar-track-nav scrollbar-thumb-alt">
        <main className='relative h-screen flex flex-col '>
            <Nav />
            {children}
        </main>
    </body>
    </html>
  )
}
