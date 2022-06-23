import { signOut } from 'firebase/auth'
import { Alert, Image } from 'react-native'
import { images } from '../../assets/images/images'
import { auth } from '../../firebase/setup'
import { HeaderRightWrapper } from './HeaderRight.styled'

export const HeaderRight = () => (
  <HeaderRightWrapper
    testID="headerRightButton"
    onPress={() => {
      Alert.alert('Are you sure?', 'Do you really want to log out?', [
        {
          text: 'Sign Out',
          onPress: () => {
            signOut(auth)
          },
          style: 'destructive',
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ])
    }}>
    <Image source={images.logout} />
  </HeaderRightWrapper>
)
