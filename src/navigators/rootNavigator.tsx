import { useCurrentUserQuery } from '../reactQuery/queries/useCurrentUserQuery'
import { AuthorizedNavigator } from './authorizedNavigator'
import { UnauthorizedNavigator } from './unauthorizedNavigator'

export const RootNavigator = () => {
  const { data: user } = useCurrentUserQuery()

  const isAuthorized = !!user

  if (isAuthorized) {
    return <AuthorizedNavigator />
  }

  return <UnauthorizedNavigator />
}
