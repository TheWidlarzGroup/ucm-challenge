import { useMutation } from 'react-query'
import { createUserWithEmailAndPassword, User } from 'firebase/auth'
import { auth } from '../../firebase/setup'

type SignUpPayload = {
  email: string
  password: string
}

const signUp = async ({ email, password }: SignUpPayload) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = userCredentials

    return user
  } catch (_e) {
    throw 'Sign up error'
  }
}

export const useSignUpMutation = () => useMutation<User | null, unknown, SignUpPayload>(signUp)
