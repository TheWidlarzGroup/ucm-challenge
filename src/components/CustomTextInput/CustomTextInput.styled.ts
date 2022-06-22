import styled from 'styled-components/native'
import { CustomText } from '../CustomText/CustomText.styled'

export const CustomTextInputWrapper = styled.View`
  padding: ${({ theme }) => theme.spacings.s}px;
  margin-bottom: ${({ theme }) => theme.spacings.m}px;
`

export const CustomTextInputBorderedBox = styled.View<{
  isInputFocused?: boolean
  isError?: boolean
}>`
  padding: ${({ theme }) => theme.spacings.l * 0.8}px;
  border-radius: ${({ theme }) => theme.borderRadius.m}px;
  border: 2px solid
    ${({ theme, isInputFocused, isError }) => {
      if (isError) {
        return theme.colors.error
      }

      if (isInputFocused) {
        return theme.colors.primary
      }

      return theme.colors.gray
    }};
`

export const CustomStyledTextInput = styled.TextInput`
  font-size: ${({ theme }) => theme.fontSizes.s}px;
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  color: ${({ theme }) => theme.colors.primaryDark};
`

export const CustomInputLabel = styled(CustomText)`
  font-family: ${({ theme }) => theme.fonts.nunitoBold};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  line-height: ${({ theme }) => theme.lineHeights.l}px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacings.xs}px;
  position: absolute;
  top: -12px;
  left: 12px;
`

export const CustomInputErrorLabel = styled(CustomInputLabel)`
  color: ${({ theme }) => theme.colors.error};
  top: auto;
  background-color: transparent;
  bottom: -14px;
  padding-left: 18px;
`
