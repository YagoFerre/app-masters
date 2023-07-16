/* eslint-disable camelcase */
/* eslint-disable dot-notation */
'use client'

import { ReactNode, createContext, useEffect, useContext, useState } from 'react'
import { onAuthStateChanged, getAuth, User } from 'firebase/auth'
import { app } from '../app/firebase/config'

export interface AuthContextDataProps {
  user: User | null
}

interface AuthContextProviderProps {
  children: ReactNode
}

const auth = getAuth(app)

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)

export const useAuthContext = () => useContext(AuthContext)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
