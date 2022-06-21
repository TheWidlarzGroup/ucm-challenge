import { signInWithEmailAndPassword } from 'firebase/auth'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase/setup'
import { useCurrentUserQuery } from '../../reactQuery/queries/useCurrentUserQuery'

const login = () => {
  signInWithEmailAndPassword(auth, 'grchtol.daniel@gmail.com', 'Admin!123')
}

export const LoginScreen = () => {
  const { isLoading } = useCurrentUserQuery()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login screen</Text>
      <Text>{isLoading ? 'Loading' : ''}</Text>
      <Button title="login" onPress={login} />
    </View>
  )
}
