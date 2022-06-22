import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MembersListScreen } from '../screens/membersList/MembersListScreen'
import { AuthorizedRoutes } from './routes'

const AuthorizedStack = createNativeStackNavigator()

export const AuthorizedNavigator = () => (
  <AuthorizedStack.Navigator>
    <AuthorizedStack.Screen name={AuthorizedRoutes.MEMBERS_LIST} component={MembersListScreen} />
  </AuthorizedStack.Navigator>
)
