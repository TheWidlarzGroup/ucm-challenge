import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddMemberScreen } from '../screens/addMember/AddMemberScreen'
import { MembersListScreen } from '../screens/membersList/MembersListScreen'
import { AuthorizedRoutes } from './routes'
import { screenDefaultOptions } from './screenDefaultOptions'

const AuthorizedStack = createNativeStackNavigator()

export const AuthorizedNavigator = () => (
  <AuthorizedStack.Navigator screenOptions={screenDefaultOptions}>
    <AuthorizedStack.Screen
      name={AuthorizedRoutes.MEMBERS_LIST}
      component={MembersListScreen}
      options={{ headerTitle: 'Users List' }}
    />
    <AuthorizedStack.Screen
      name={AuthorizedRoutes.ADD_MEMBER}
      component={AddMemberScreen}
      options={{
        headerTitle: 'New user',
      }}
    />
  </AuthorizedStack.Navigator>
)
