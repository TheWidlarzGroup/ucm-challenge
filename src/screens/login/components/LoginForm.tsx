import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ActivityIndicator, KeyboardAvoidingView } from 'react-native'
import { CustomButton } from '../../../components/CustomButton/CustomButton'
import { ControlledCustomTextInput } from '../../../components/CustomTextInput/ControlledCustomTextInput'
import {
  FormLayoutFormFooter,
  FormLayoutFormInputsWrapper,
  FormLayoutFormWrapper,
} from '../../../components/FormLayout/FormLayout.styled'
import { theme } from '../../../theme/theme'
import { IS_IOS } from '../../../utils/device'
import { AuthForm, AuthValidationSchema } from '../../../validators/authValidator'

type Props = {
  isLoading?: boolean
  onFormSubmit?: F1<AuthForm, Promise<void>>
}

export const LoginForm = ({ isLoading, onFormSubmit }: Props) => {
  const form = useForm<AuthForm>({
    resolver: zodResolver(AuthValidationSchema),
    mode: 'onBlur',
  })

  const submitSuccessCb = (data: AuthForm) => onFormSubmit?.(data)

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={IS_IOS ? 'padding' : undefined}
      keyboardVerticalOffset={80}>
      <FormLayoutFormWrapper>
        <FormProvider {...form}>
          <FormLayoutFormInputsWrapper bounces={false}>
            <ControlledCustomTextInput<AuthForm>
              name="email"
              label="Email"
              placeholder="Type in your email"
              keyboardType="email-address"
              autoCapitalize="none"
              testID="emailField"
            />
            <ControlledCustomTextInput<AuthForm>
              name="password"
              label="Password"
              placeholder="Your password"
              secureTextEntry
              autoCapitalize="none"
              testID="passwordField"
            />
            {isLoading ? <ActivityIndicator color={theme.colors.primary} /> : null}
          </FormLayoutFormInputsWrapper>
          <FormLayoutFormFooter>
            <CustomButton title="Log In!" onPress={form.handleSubmit(submitSuccessCb)} />
          </FormLayoutFormFooter>
        </FormProvider>
      </FormLayoutFormWrapper>
    </KeyboardAvoidingView>
  )
}
