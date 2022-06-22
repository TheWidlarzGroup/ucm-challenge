import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { Text, View } from 'react-native'
import { UnauthorizedRoutes } from '../../navigators/routes'
import { useCurrentUserQuery } from '../../reactQuery/queries/useCurrentUserQuery'
import { theme } from '../../theme/theme'

export const AuthorizingScreen = () => {
  const { reset } = useNavigation<'unauthorized'>()
  const { isLoading, data: user, isIdle } = useCurrentUserQuery()

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    if (!isLoading && !user) {
      timeoutId = setTimeout(() => {
        reset({
          index: 0,
          routes: [{ name: UnauthorizedRoutes.LOGIN }],
        })
      }, 0)
    }

    return () => {
      timeoutId && clearTimeout(timeoutId)
    }
  }, [isLoading, user, reset, isIdle])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary,
      }}>
      <Text>...</Text>
    </View>
  )
}
