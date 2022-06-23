import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { NewMemberForm, NewMemberValidationSchema } from '../../../../validators/newMemberValidator'
import { ControlledCustomTextInput } from '../../../../components/CustomTextInput/ControlledCustomTextInput'
import { useJobsQuery } from '../../../../reactQuery/queries/useJobsQuery'
import { ControlledCustomListPicker } from '../../../../components/CustomListPicker/ControlledCustomListPicker'
import { CustomButton } from '../../../../components/CustomButton/CustomButton'
import { IS_IOS } from '../../../../utils/device'
import { useCreateMemberMutation } from '../../../../reactQuery/mutations/useCreateMemberMutation'
import { theme } from '../../../../theme/theme'
import {
  FormLayoutFormFooter,
  FormLayoutFormInputsWrapper,
  FormLayoutFormWrapper,
} from '../../../../components/FormLayout/FormLayout.styled'
import { ControlledImagePicker } from '../../../../components/ImagePicker/ControlledImagePicker'

export const AddMemberForm = () => {
  const { goBack } = useNavigation()
  const { mutateAsync: createMember, isLoading } = useCreateMemberMutation()
  const { data: jobs } = useJobsQuery()
  const form = useForm<NewMemberForm>({
    resolver: zodResolver(NewMemberValidationSchema),
    mode: 'onBlur',
  })

  const submitSuccessCb = async (data: NewMemberForm) => {
    try {
      const newMember = await createMember({ ...data, jobId: data.job })
      if (newMember) {
        goBack()
      }
    } catch (e) {
      Alert.alert('Upsss...', 'Unfortunatelly, something did not work. Try again later')
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={IS_IOS ? 'padding' : undefined}
      keyboardVerticalOffset={80}>
      <FormLayoutFormWrapper>
        <FormProvider {...form}>
          <FormLayoutFormInputsWrapper bounces={false}>
            <ControlledImagePicker<NewMemberForm> name="picture" />
            <ControlledCustomTextInput<NewMemberForm>
              name="name"
              label="Name"
              placeholder="Type in your name"
            />
            <ControlledCustomListPicker<NewMemberForm>
              name="job"
              label="Job"
              items={(jobs || []).map((j) => ({
                value: j.id,
                label: j.jobTitle,
              }))}
            />
            {isLoading ? <ActivityIndicator color={theme.colors.primary} /> : null}
          </FormLayoutFormInputsWrapper>
          <FormLayoutFormFooter>
            <CustomButton title="Create user" onPress={form.handleSubmit(submitSuccessCb)} />
          </FormLayoutFormFooter>
        </FormProvider>
      </FormLayoutFormWrapper>
    </KeyboardAvoidingView>
  )
}
