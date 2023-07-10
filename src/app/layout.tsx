import { ReactNode } from 'react'
import { Roboto } from 'next/font/google'

import { Header } from './components/Header'
import StitchesRegistry from './registry'
import { AuthContextProvider } from './contexts/AuthContext'

export const metadata = {
  title: 'App Masters Game',
  icon: '/app.png',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <StitchesRegistry>
          <AuthContextProvider>
            <Header />
            {children}
          </AuthContextProvider>
        </StitchesRegistry>
      </body>
    </html>
  )
}
