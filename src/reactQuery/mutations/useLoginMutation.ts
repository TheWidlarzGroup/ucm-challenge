import { useMutation } from 'react-query'
import { signInWithEmailAndPassword, User } from 'firebase/auth'
import { auth } from '../../firebase/setup'

type LoginPayload = {
  email: string
  password: string
}

const logIn = async ({ email, password }: LoginPayload) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    const { user } = userCredentials

    return user
  } catch (_e) {
    throw 'Unauthorized'
  }
}

export const useLoginMutation = () => useMutation<User | null, unknown, LoginPayload>(logIn)
