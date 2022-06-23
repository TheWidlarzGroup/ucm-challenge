import styled from 'styled-components/native'

export const CustomListPickerModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`

export const CustomListPickerModalBackdropTouchable = styled.TouchableOpacity`
  flex: 1;
`

export const CustomListPickerModalPickerWrapper = styled.View`
  background-color: white;
  padding-top: ${({ theme }) => theme.spacings.m}px;
  padding-bottom: ${({ theme }) => theme.spacings.m}px;
`

export const CustomListPickerModalPickerHeader = styled.View`
  justify-content: flex-end;
  margin-bottom: -${({ theme }) => theme.spacings.m}px;
`
