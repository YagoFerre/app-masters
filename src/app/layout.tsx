import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './contexts/AuthContext'

import StitchesRegistry from './registry'

export const metadata = {
  title: 'App Game',
  icon: '/app.png',
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
