import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { AuthContextProvider } from '../contexts/AuthContext'

import StitchesRegistry from './registry'

export const metadata: Metadata = {
  title: 'App Game',
  icons: {
    icon: '/app.png',
  },
}

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <StitchesRegistry>
          <AuthContextProvider>{children}</AuthContextProvider>
        </StitchesRegistry>
      </body>
    </html>
  )
}
