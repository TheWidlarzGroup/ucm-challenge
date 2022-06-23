import styled from 'styled-components/native'

export const CustomButtonContainer = styled.TouchableOpacity<{ secondary?: boolean }>`
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondary : theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.s}px;
`
