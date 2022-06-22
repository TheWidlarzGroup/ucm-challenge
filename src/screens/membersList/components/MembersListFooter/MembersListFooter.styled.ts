import styled from 'styled-components/native'

export const MembersListFooterWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.l}px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-bottom-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`
