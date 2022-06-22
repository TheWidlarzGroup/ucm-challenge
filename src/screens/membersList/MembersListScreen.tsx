import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import { Button, Text, View } from 'react-native'
import { auth } from '../../firebase/setup'
import { AuthorizedRoutes } from '../../navigators/routes'
import { useMembersQuery } from '../../reactQuery/queries/useMembersQuery'

const logout = () => {
  signOut(auth)
}

export const MembersListScreen = () => {
  const { navigate } = useNavigation<'authorized'>()
  const { data: members } = useMembersQuery()

  console.log(members)

  const handleAddMemberPress = () => {
    navigate(AuthorizedRoutes.ADD_MEMBER)
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Nunito_900Black', fontSize: 40 }}>Users screen</Text>
      <Button title="signout" onPress={logout} />
      <Button title="add member" onPress={handleAddMemberPress} />
    </View>
  )
}
