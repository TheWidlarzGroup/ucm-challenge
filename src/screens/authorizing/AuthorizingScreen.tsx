import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { CustomText } from '../../components/CustomText/CustomText.styled'
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
          routes: [{ name: UnauthorizedRoutes.UNAUTHORIZED }],
        })
      }, 0)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
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
      <ActivityIndicator color={theme.colors.primary} style={{ marginBottom: theme.spacings.l }} />
      <CustomText fontSize="xs" fontWeight="medium">
        Authorizing...
      </CustomText>
    </View>
  )
}
