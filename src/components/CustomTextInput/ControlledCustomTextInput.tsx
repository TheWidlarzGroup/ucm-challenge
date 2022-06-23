import { Path, useController, useFormContext } from 'react-hook-form'
import { CustomTextInput, CustomTextInputProps } from './CustomTextInput'

interface Props<T> extends CustomTextInputProps {
  name: Path<T>
}

export const ControlledCustomTextInput = <T,>({ name, ...customTextInputProps }: Props<T>) => {
  const { control } = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <CustomTextInput
      value={field.value || ''}
      onChangeText={field.onChange}
      errorMsg={error?.message || ('' as string)}
      onBlur={field.onBlur}
      {...customTextInputProps}
    />
  )
}
