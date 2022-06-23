import styled from 'styled-components/native'
import { CustomText } from '../CustomText/CustomText.styled'

const BOX_SIZE = 100

export const ImagePickerWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacings.l * 1.5}px;
`

export const ImagePickerBox = styled.View`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  background-color: ${({ theme }) => theme.colors.neutral2};
  border-radius: ${BOX_SIZE}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const ImagePickerBoxTextContent = styled.View`
  top: -${({ theme }) => theme.spacings.xs}px;
  z-index: 1;
`

export const ImagePickerImagePreview = styled.Image`
  width: ${BOX_SIZE}px;
  height: ${BOX_SIZE}px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.4;
`

export const ImagePickerErrorText = styled(CustomText)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacings.m}px;
`
