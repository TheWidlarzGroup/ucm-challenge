import { useState } from 'react'
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from 'react-native'
import { theme } from '../../theme/theme'
import {
  CustomInputErrorLabel,
  CustomInputLabel,
  CustomStyledTextInput,
  CustomTextInputBorderedBox,
  CustomTextInputWrapper,
} from './CustomTextInput.styled'

export interface CustomTextInputProps extends TextInputProps {
  errorMsg?: string
  label?: string
}

export const CustomTextInput = ({
  label,
  errorMsg,
  onBlur,
  onFocus,
  ...textProps
}: CustomTextInputProps) => {
  const [isInputFocused, setIsInputFocus] = useState(false)

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsInputFocus(true)
    onFocus?.(e)
  }

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsInputFocus(false)
    onBlur?.(e)
  }

  return (
    <CustomTextInputWrapper>
      <CustomTextInputBorderedBox isInputFocused={isInputFocused} isError={!!errorMsg}>
        {label ? <CustomInputLabel>{label}</CustomInputLabel> : null}
        <CustomStyledTextInput
          numberOfLines={1}
          placeholder="Type something in..."
          placeholderTextColor={theme.colors.neutral}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...textProps}
        />
      </CustomTextInputBorderedBox>
      {errorMsg ? (
        <CustomInputErrorLabel numberOfLines={1}>{errorMsg}</CustomInputErrorLabel>
      ) : null}
    </CustomTextInputWrapper>
  )
}
