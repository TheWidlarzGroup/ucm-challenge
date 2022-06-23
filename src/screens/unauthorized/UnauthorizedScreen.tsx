import { useNavigation } from '@react-navigation/native'
import { ActivityIndicator, Image, View } from 'react-native'
import { images } from '../../assets/images/images'
import { CustomButton } from '../../components/CustomButton/CustomButton'
import { CustomText } from '../../components/CustomText/CustomText.styled'
import { UnauthorizedRoutes } from '../../navigators/routes'
import { useCurrentUserQuery } from '../../reactQuery/queries/useCurrentUserQuery'
import { theme } from '../../theme/theme'

export const UnauthorizedScreen = () => {
  const { navigate } = useNavigation<'unauthorized'>()
  const { isLoading } = useCurrentUserQuery()

  const handleLoginPress = () => {
    navigate(UnauthorizedRoutes.LOGIN)
  }

  const handleSignUpPress = () => {
    navigate(UnauthorizedRoutes.SIGN_UP)
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.secondary,
      }}>
      <Image source={images.man} />
      <CustomText fontWeight="bold">Log into you account!</CustomText>
      <CustomText fontWeight="medium" fontSize="s">
        Don't have an account? Sign in!
      </CustomText>
      {isLoading ? <ActivityIndicator color={theme.colors.primary} /> : null}
      <CustomButton
        title="Log in"
        onPress={handleLoginPress}
        style={{ marginVertical: theme.spacings.m }}
      />
      <CustomButton title="Sign Up" secondary onPress={handleSignUpPress} />
    </View>
  )
}
