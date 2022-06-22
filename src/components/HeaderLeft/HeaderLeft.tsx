import { useNavigation } from '@react-navigation/native'
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { Image } from 'react-native'
import { images } from '../../assets/images/images'
import { HeaderLeftWrapper } from './HeaderLeft.styled'

export const HeaderLeft = ({ canGoBack }: HeaderBackButtonProps) => {
  const { goBack } = useNavigation()

  if (!canGoBack) {
    return null
  }

  return (
    <HeaderLeftWrapper onPress={goBack}>
      <Image source={images.backArrow} />
    </HeaderLeftWrapper>
  )
}
