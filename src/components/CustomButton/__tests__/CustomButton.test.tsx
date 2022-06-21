import { render } from '../../../test/test-utils'
import { CustomButton } from '../CustomButton'

describe('<CustomButton />', () => {
  it('renders correctly', () => {
    const renderAPI = render(<CustomButton />)

    renderAPI.getByText('Button')
  })
})
