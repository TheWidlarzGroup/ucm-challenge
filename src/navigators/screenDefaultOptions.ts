import { NativeStackNavigationOptions } from '@react-navigation/native-stack'
import { HeaderLeft } from '../components/HeaderLeft/HeaderLeft'
import { theme } from '../theme/theme'

export const screenDefaultOptions: NativeStackNavigationOptions = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.secondary,
  },
  contentStyle: {
    backgroundColor: theme.colors.white,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.nunitoBlack,
    color: theme.colors.primaryDark,
    fontSize: theme.fontSizes.l,
  },
  headerBackVisible: false,
  headerLeft: HeaderLeft,
}
