import { Path, useController, useFormContext } from 'react-hook-form'
import { ImagePicker, ImagePickerProps } from './ImagePicker'

interface Props<T> extends ImagePickerProps {
  name: Path<T>
}

export const ControlledImagePicker = <T,>({ name, ...imagePickerProps }: Props<T>) => {
  const { control } = useFormContext()

  const {
    field,
    fieldState: { error },
  } = useController({ name, control })

  return (
    <ImagePicker
      onSelect={field.onChange}
      errorMsg={error?.message || ('' as string)}
      onBlur={field.onBlur}
      {...imagePickerProps}
    />
  )
}
