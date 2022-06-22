import styled from 'styled-components/native'

export const CustomButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacings.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.s}px;
`
