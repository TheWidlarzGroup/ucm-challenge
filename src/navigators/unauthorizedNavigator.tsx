import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthorizingScreen } from '../screens/authorizing/AuthorizingScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { UnauthorizedRoutes } from './routes'

const UnauthorizedStack = createNativeStackNavigator()

export const UnauthorizedNavigator = () => (
  <UnauthorizedStack.Navigator>
    <UnauthorizedStack.Screen name={UnauthorizedRoutes.AUTHORIZING} component={AuthorizingScreen} />
    <UnauthorizedStack.Screen name={UnauthorizedRoutes.LOGIN} component={LoginScreen} />
  </UnauthorizedStack.Navigator>
)
