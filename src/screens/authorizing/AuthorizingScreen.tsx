import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { UnauthorizedRoutes } from '../../navigators/routes'
import { useCurrentUserQuery } from '../../reactQuery/queries/useCurrentUserQuery'

export const AuthorizingScreen = () => {
  const { reset } = useNavigation<'unauthorized'>()
  const { isLoading, data: user } = useCurrentUserQuery()

  useEffect(() => {
    if (!isLoading && !user) {
      reset({
        index: 0,
        routes: [{ name: UnauthorizedRoutes.LOGIN }],
      })
    }
  }, [isLoading, user, reset])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Loading</Text>
    </View>
  )
}
