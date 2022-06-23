import { fireEvent, render } from '../../../test/test-utils'
import { CustomButton } from '../CustomButton'

describe('<CustomButton />', () => {
  it('renders correctly', () => {
    const renderAPI = render(<CustomButton title="Button" />)

    renderAPI.getByText('Button')
  })

  it('invokes the provided onPress callback', () => {
    const onPress = jest.fn()

    const renderAPI = render(<CustomButton title="Button" onPress={onPress} />)

    const button = renderAPI.getByText('Button')

    fireEvent(button, 'onPress')

    expect(onPress).toHaveBeenCalled()
  })
})
