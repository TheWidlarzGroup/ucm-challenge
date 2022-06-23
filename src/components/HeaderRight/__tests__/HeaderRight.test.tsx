import { Alert } from 'react-native'
import { fireEvent, render } from '../../../test/test-utils'
import { HeaderRight } from '../HeaderRight'

describe('<HeaderRight />', () => {
  it('should persent a native Alert upon clicking on the button', () => {
    const spiedAlert = jest.spyOn(Alert, 'alert')

    const renderAPI = render(<HeaderRight />)

    const button = renderAPI.getByTestId('headerRightButton')

    fireEvent(button, 'onPress')

    expect(spiedAlert).toHaveBeenCalledTimes(1)
    expect(spiedAlert).toHaveBeenCalledWith(
      'Are you sure?',
      'Do you really want to log out?',
      expect.arrayContaining([expect.objectContaining({ text: 'Sign Out' })])
    )
  })
})
