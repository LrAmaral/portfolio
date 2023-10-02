import { Montserrat } from 'next/font/google'

import MainNav from '../components/MainNav'
import './styles/globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'], 
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
    className={`${montserrat.variable} font-sans overflow-x-hidden scrollbar-thin scrollbar-track-nav scrollbar-thumb-alt`}
    >
      <body className="bg-nav text-white cursor-default select-none">
          <MainNav />
            {children}
      </body>
    </html>
  )
}
