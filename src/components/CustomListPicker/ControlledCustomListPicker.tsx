import { Path, useController, useFormContext } from 'react-hook-form'
import { CustomListPicker, CustomListPickerProps } from './CustomListPicker'

interface Props<T> extends CustomListPickerProps {
  name: Path<T>
}

export const ControlledCustomListPicker = <T,>({ name, ...customListPickerProps }: Props<T>) => {
  const { control } = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <CustomListPicker
      onSelect={(data) => field.onChange(data.value)}
      errorMsg={error?.message || ('' as string)}
      onBlur={field.onBlur}
      {...customListPickerProps}
    />
  )
}
