import React from 'react'
import { CustomText } from '../CustomText/CustomText.styled'
import { CustomButtonContainer } from './CustomButton.styled'

type Props = {
  title: string
  onPress?: F0
}

export const CustomButton = ({ title, onPress }: Props) => (
  <CustomButtonContainer onPress={onPress}>
    <CustomText textAlign="center" fontSize="m" fontWeight="bold">
      {title}
    </CustomText>
  </CustomButtonContainer>
)
