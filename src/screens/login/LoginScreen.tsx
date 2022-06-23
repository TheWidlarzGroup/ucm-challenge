import { Alert, View } from 'react-native'
import { useLoginMutation } from '../../reactQuery/mutations/useLoginMutation'
import { theme } from '../../theme/theme'
import { AuthForm } from '../../validators/authValidator'
import { LoginForm } from './components/LoginForm'

export const LoginScreen = () => {
  const { mutateAsync: logIn, isLoading } = useLoginMutation()

  const submitSuccessCb = async (data: AuthForm) => {
    try {
      await logIn(data)
      Alert.alert('Success!', 'Successfully sign in!')
    } catch (e) {
      Alert.alert('Upss...', 'Wrong credentials')
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: theme.colors.white }}>
      <LoginForm isLoading={isLoading} onFormSubmit={submitSuccessCb} />
    </View>
  )
}
