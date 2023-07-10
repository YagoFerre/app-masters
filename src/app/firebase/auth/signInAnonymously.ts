/* eslint-disable camelcase */
import { app } from '../config'
import { signInAnonymously, getAuth } from 'firebase/auth'

const auth = getAuth(app)

export async function signInWithVisitor() {
  await signInAnonymously(auth)
}
