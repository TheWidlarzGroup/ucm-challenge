import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthorizingScreen } from '../screens/authorizing/AuthorizingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
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
      name={UnauthorizedRoutes.LOGIN}
      component={LoginScreen}
      options={{ headerTitle: 'Hi!' }}
    />
  </UnauthorizedStack.Navigator>
)
