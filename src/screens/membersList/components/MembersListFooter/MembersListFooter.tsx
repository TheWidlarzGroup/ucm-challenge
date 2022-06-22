import { useNavigation } from '@react-navigation/native'
import { CustomButton } from '../../../../components/CustomButton/CustomButton'
import { AuthorizedRoutes } from '../../../../navigators/routes'
import { MembersListFooterWrapper } from './MembersListFooter.styled'

export const MembersListFooter = () => {
  const { navigate } = useNavigation<'authorized'>()

  const handleAddMemberPress = () => {
    navigate(AuthorizedRoutes.ADD_MEMBER)
  }

  return (
    <MembersListFooterWrapper>
      <CustomButton title="+ Add new user" onPress={handleAddMemberPress} />
    </MembersListFooterWrapper>
  )
}
