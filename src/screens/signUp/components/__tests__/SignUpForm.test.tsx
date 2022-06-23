import { fireEvent, render, waitFor } from '../../../../test/test-utils'
import { SignUpForm } from '../SignUpForm'

describe('<SignUpForm />', () => {
  it('should try to log user in with firebase when the form is correctly populated', async () => {
    const onFormSubmitStub = jest.fn()

    const renderAPI = render(<SignUpForm onFormSubmit={onFormSubmitStub} />)

    const emailField = renderAPI.getByTestId('emailField')

    const passwordField = renderAPI.getByTestId('passwordField')
    const submitButton = renderAPI.getByText('Sign Up!')

    fireEvent(emailField, 'onChangeText', 'mail@mail.com')
    fireEvent(passwordField, 'onChangeText', 'password')

    await waitFor(() => {
      fireEvent(submitButton, 'onPress')
    })

    expect(onFormSubmitStub).toHaveBeenCalledTimes(1)
    expect(onFormSubmitStub).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'mail@mail.com', password: 'password' })
    )
  })

  it('should show error labels when trying to submit an empty form', async () => {
    const onFormSubmitStub = jest.fn()

    const renderAPI = render(<SignUpForm onFormSubmit={onFormSubmitStub} />)

    const submitButton = renderAPI.getByText('Sign Up!')

    await waitFor(() => {
      fireEvent(submitButton, 'onPress')
    })

    expect(onFormSubmitStub).toHaveBeenCalledTimes(0)

    renderAPI.getAllByText('Required')
  })
})
