import { useCallback } from 'react'
import { ActivityIndicator, FlatList, ListRenderItem, View } from 'react-native'
import { theme } from '../../../../theme/theme'
import { IS_IOS } from '../../../../utils/device'
import { MemberListElement } from '../MemberListElement/MemberListElement'
import { MembersListWrapper } from './MembersList.styled'

type Props = {
  members: UCM.Member[]
  isRefreshing?: boolean
  onRefresh?: F0
}

export const MembersList = ({ members, isRefreshing, onRefresh }: Props) => {
  const renderItem: ListRenderItem<UCM.Member> = useCallback(
    ({ item }) => <MemberListElement member={item} />,
    []
  )

  return (
    <MembersListWrapper>
      <FlatList<UCM.Member>
        data={members}
        keyExtractor={({ id }) => id}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{ minHeight: '90%' }}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            {IS_IOS ? <ActivityIndicator color={theme.colors.primary} /> : null}
          </View>
        )}
      />
    </MembersListWrapper>
  )
}
