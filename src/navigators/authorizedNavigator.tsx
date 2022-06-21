import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UsersListScreen } from '../screens/usersList/UsersListScreen'
import { AuthorizedRoutes } from './routes'

const AuthorizedStack = createNativeStackNavigator()

export const AuthorizedNavigator = () => (
  <AuthorizedStack.Navigator>
    <AuthorizedStack.Screen name={AuthorizedRoutes.USERS_LIST} component={UsersListScreen} />
  </AuthorizedStack.Navigator>
)
