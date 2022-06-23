import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthorizingScreen } from '../screens/authorizing/AuthorizingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { SignUpScreen } from '../screens/signUp/SignUpScreen'
import { UnauthorizedScreen } from '../screens/unauthorized/UnauthorizedScreen'
import { UnauthorizedRoutes } from './routes'
import { screenDefaultOptions } from './screenDefaultOptions'

const UnauthorizedStack = createNativeStackNavigator()

export const UnauthorizedNavigator = () => (
  <UnauthorizedStack.Navigator screenOptions={{ ...screenDefaultOptions, animation: 'fade' }}>
    <UnauthorizedStack.Screen
      name={UnauthorizedRoutes.AUTHORIZING}
      component={AuthorizingScreen}
      options={{ headerTitle: '' }}
    />
    <UnauthorizedStack.Screen
      name={UnauthorizedRoutes.UNAUTHORIZED}
      component={UnauthorizedScreen}
      options={{ headerTitle: 'Hi!' }}
    />
    <UnauthorizedStack.Screen
      name={UnauthorizedRoutes.LOGIN}
      component={LoginScreen}
      options={{ headerTitle: 'Log in!' }}
    />
    <UnauthorizedStack.Screen
      name={UnauthorizedRoutes.SIGN_UP}
      component={SignUpScreen}
      options={{ headerTitle: 'Sign Up!' }}
    />
  </UnauthorizedStack.Navigator>
)
