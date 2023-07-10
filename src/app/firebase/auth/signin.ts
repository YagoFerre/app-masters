/* eslint-disable camelcase */
import { app } from '../config'
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(app)

export async function signIn(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password)
}
