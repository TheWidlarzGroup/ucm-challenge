import { signOut } from 'firebase/auth'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase/setup'
import { useMembersQuery } from '../../reactQuery/queries/useMembersQuery'

const logout = () => {
  signOut(auth)
}

export const MembersListScreen = () => {
  const { data: members } = useMembersQuery()

  console.log(members)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Users screen</Text>
      <Button title="signout" onPress={logout} />
    </View>
  )
}
