import { TextProps } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'

interface CustomTextProps extends TextProps {
  fontWeight?: 'bold' | 'medium' | 'black'
  fontSize?: keyof DefaultTheme['fontSizes']
  color?: keyof DefaultTheme['colors']
  textAlign?: 'left' | 'right' | 'center'
}

const getFont = (fontWeight: CustomTextProps['fontWeight'], theme: DefaultTheme) => {
  switch (fontWeight) {
    case 'bold':
      return theme.fonts.nunitoBold
    case 'black':
      return theme.fonts.nunitoBlack
    case 'medium':
      return theme.fonts.nunitoMedium
    default:
      return theme.fonts.nunitoMedium
  }
}

export const CustomText = styled.Text<CustomTextProps>`
  font-family: ${({ theme, fontWeight = 'medium' }) => getFont(fontWeight, theme)};
  font-size: ${({ theme, fontSize = 'm' }) => theme.fontSizes[fontSize]}px;
  color: ${({ theme, color = 'primaryDark' }) => theme.colors[color]};
  text-align: ${({ textAlign = 'left' }) => textAlign};
`
