import styled from 'styled-components/native'

export const FormLayoutFormWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const FormLayoutFormInputsWrapper = styled.ScrollView`
  flex: 1;
  padding: ${({ theme }) => theme.spacings.m}px;
`

export const FormLayoutFormFooter = styled.View`
  padding: ${({ theme }) => theme.spacings.l}px;
`
