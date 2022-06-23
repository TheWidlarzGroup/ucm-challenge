import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { CustomText } from '../CustomText/CustomText.styled'
import { CustomButtonContainer } from './CustomButton.styled'

interface Props extends TouchableOpacityProps {
  title: string
  onPress?: F0
  secondary?: boolean
}

export const CustomButton = ({ title, onPress, secondary, ...buttonProps }: Props) => (
  <CustomButtonContainer onPress={onPress} secondary={secondary} {...buttonProps}>
    <CustomText
      textAlign="center"
      fontSize="m"
      fontWeight="bold"
      color={secondary ? 'primary' : 'white'}>
      {title}
    </CustomText>
  </CustomButtonContainer>
)
