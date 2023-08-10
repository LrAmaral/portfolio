//import { Nav } from '@/components/layout/nav'
import { Nav } from '@/components/nav'
import './globals.css'
import type { Metadata } from 'next'
import { Esteban, Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  display: 'swap', 
  weight: '600', 
  variable: '--font-mont',
})

const esteban = Esteban({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-est',
})

export const metadata: Metadata = {
  title: 'Lucas Riello',
  description: 'Portfolio personal page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" 
    className={`${esteban.variable} ${montserrat.variable} font-sans`}
    >
    <body className="text-black dark:text-white">
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <main className='h-screen flex flex-col'>
            <Nav />
            {children}
        </main>
      </ThemeProvider>
    </body>
    </html>
  )
}
