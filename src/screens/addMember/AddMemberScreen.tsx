import { SafeAreaScreen } from '../../components/SafeAreaScreen/SafeAreaScreen.styled'
import { AddMemberForm } from './components/AddMemberForm/AddMemberForm'

export const AddMemberScreen = () => (
  <SafeAreaScreen edges={['bottom']}>
    <AddMemberForm />
  </SafeAreaScreen>
)
