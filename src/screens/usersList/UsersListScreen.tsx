import { signOut } from 'firebase/auth'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase/setup'

const logout = () => {
  signOut(auth)
}

export const UsersListScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Users screen</Text>
    <Button title="signout" onPress={logout} />
  </View>
)
