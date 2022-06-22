import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddMemberScreen } from '../screens/addMember/AddMemberScreen'
import { MembersListScreen } from '../screens/membersList/MembersListScreen'
import { AuthorizedRoutes } from './routes'

const AuthorizedStack = createNativeStackNavigator()

export const AuthorizedNavigator = () => (
  <AuthorizedStack.Navigator>
    <AuthorizedStack.Screen name={AuthorizedRoutes.MEMBERS_LIST} component={MembersListScreen} />
    <AuthorizedStack.Screen name={AuthorizedRoutes.ADD_MEMBER} component={AddMemberScreen} />
  </AuthorizedStack.Navigator>
)
