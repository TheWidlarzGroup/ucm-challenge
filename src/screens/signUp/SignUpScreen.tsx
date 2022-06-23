import { Alert, View } from 'react-native'
import { useSignUpMutation } from '../../reactQuery/mutations/useSignUpMutation'
import { theme } from '../../theme/theme'
import { AuthForm } from '../../validators/authValidator'
import { SignUpForm } from './components/SignUpForm'

export const SignUpScreen = () => {
  const { mutateAsync: signUp, isLoading } = useSignUpMutation()

  const submitSuccessCb = async (data: AuthForm) => {
    try {
      await signUp(data)
      Alert.alert('Success!', 'Your account has been sucessfully created!')
    } catch (e) {
      Alert.alert('Upss...', 'Could not sign up at the moment. Try again later!')
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.white }}>
      <SignUpForm onFormSubmit={submitSuccessCb} isLoading={isLoading} />
    </View>
  )
}
