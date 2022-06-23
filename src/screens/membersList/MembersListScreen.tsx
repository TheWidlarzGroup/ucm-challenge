import { SafeAreaScreen } from '../../components/SafeAreaScreen/SafeAreaScreen.styled'
import { useMembersQuery } from '../../reactQuery/queries/useMembersQuery'
import { MembersList } from './components/MembersList/MembersList'
import { MembersListFooter } from './components/MembersListFooter/MembersListFooter'

export const MembersListScreen = () => {
  const { data: members, isLoading, isFetching, isRefetching, refetch } = useMembersQuery()

  return (
    <SafeAreaScreen edges={['bottom']}>
      <MembersList
        members={members || []}
        isRefreshing={isLoading || isFetching || isRefetching}
        onRefresh={refetch}
      />
      <MembersListFooter />
    </SafeAreaScreen>
  )
}
