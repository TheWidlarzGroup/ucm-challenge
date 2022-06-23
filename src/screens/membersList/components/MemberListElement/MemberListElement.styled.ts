import styled from 'styled-components/native'

const SIDE_SIZE = 100

export const MemberListElementWrapper = styled.View`
  padding: ${({ theme }) => theme.spacings.m}px 0;
  flex-direction: row;
`

export const MemberListElementSide = styled.View`
  width: ${SIDE_SIZE}px;
  height: ${SIDE_SIZE}px;
  margin-right: ${({ theme }) => theme.spacings.m}px;
`

export const MemberListElementMain = styled.View`
  flex: 1;
  justify-content: center;
  padding-right: ${({ theme }) => theme.spacings.m}px;
`
