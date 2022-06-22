import { theme } from '../theme/theme'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

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
}
