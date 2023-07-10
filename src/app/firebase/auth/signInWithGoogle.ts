/* eslint-disable camelcase */
import { app } from '../config'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export async function signInWithGoogle() {
  await signInWithPopup(auth, provider)
}
