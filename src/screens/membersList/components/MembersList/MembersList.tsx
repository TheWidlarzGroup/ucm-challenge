import { FlatList } from 'react-native'
import { MemberListElement } from '../MemberListElement/MemberListElement'
import { MembersListWrapper } from './MembersList.styled'

type Props = {
  members: UCM.Member[]
}

export const MembersList = ({ members }: Props) => {
  return (
    <MembersListWrapper>
      <FlatList<UCM.Member>
        data={members}
        renderItem={({ item }) => <MemberListElement member={item} />}
      />
    </MembersListWrapper>
  )
}
