/* eslint-disable camelcase */
import { app } from '../config'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const auth = getAuth(app)

export async function signUp(email: string, password: string) {
  await createUserWithEmailAndPassword(auth, email, password)
}
