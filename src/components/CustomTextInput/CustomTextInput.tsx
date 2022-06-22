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

interface Props extends TextInputProps {
  errorMsg?: string
}

export const CustomTextInput = ({ errorMsg, ...textProps }: Props) => {
  const [isInputFocused, setIsInputFocus] = useState(false)

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsInputFocus(true)
    textProps?.onFocus?.(e)
  }

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsInputFocus(false)
    textProps?.onBlur?.(e)
  }

  return (
    <CustomTextInputWrapper>
      <CustomTextInputBorderedBox isInputFocused={isInputFocused} isError={!!errorMsg}>
        <CustomInputLabel>Label</CustomInputLabel>
        <CustomStyledTextInput
          numberOfLines={1}
          placeholder="Type something in..."
          placeholderTextColor={theme.colors.neutral}
          onFocus={onFocus}
          onBlur={onBlur}
          {...textProps}
        />
      </CustomTextInputBorderedBox>
      {errorMsg ? (
        <CustomInputErrorLabel numberOfLines={1}>{errorMsg}</CustomInputErrorLabel>
      ) : null}
    </CustomTextInputWrapper>
  )
}
