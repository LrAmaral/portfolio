import { Figtree } from 'next/font/google'

import MainNav from '../components/MainNav'
import './styles/globals.css'

const figtree = Figtree({ 
  subsets: ['latin'], 
  variable: '--font-fig',
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
    className={`${figtree.variable} font-sans overflow-x-hidden scrollbar-thin scrollbar-track-nav scrollbar-thumb-alt`}
    >
      <body className="bg-nav text-white cursor-default select-none">
          <MainNav />
            {children}
      </body>
    </html>
  )
}
