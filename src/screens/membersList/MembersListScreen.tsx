import { signOut } from 'firebase/auth'
import { Button } from 'react-native'
import { SafeAreaScreen } from '../../components/SafeAreaScreen/SafeAreaScreen.styled'
import { auth } from '../../firebase/setup'
import { useMembersQuery } from '../../reactQuery/queries/useMembersQuery'
import { MembersList } from './components/MembersList/MembersList'
import { MembersListFooter } from './components/MembersListFooter/MembersListFooter'

const logout = () => {
  signOut(auth)
}

export const MembersListScreen = () => {
  const { data: members } = useMembersQuery()

  return (
    <SafeAreaScreen edges={['bottom']}>
      <MembersList members={members || []} />
      <Button title="signout" onPress={logout} />
      <MembersListFooter />
    </SafeAreaScreen>
  )
}
