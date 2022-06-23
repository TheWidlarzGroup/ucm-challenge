import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import * as ExpoImagePicker from 'expo-image-picker'
import {
  ImagePickerBox,
  ImagePickerBoxTextContent,
  ImagePickerErrorText,
  ImagePickerImagePreview,
  ImagePickerWrapper,
} from './ImagePicker.styled'
import { CustomText } from '../CustomText/CustomText.styled'

export type ImagePickerProps = {
  onSelect?: F1<string>
  onBlur?: F0
  errorMsg?: string
}

export const ImagePicker = ({ errorMsg, onSelect, onBlur }: ImagePickerProps) => {
  const [image, setImage] = useState('')
  const [permission, requestPermission] = ExpoImagePicker.useMediaLibraryPermissions()

  const pickImage = async () => {
    if (
      permission?.status !== ExpoImagePicker.PermissionStatus.GRANTED &&
      permission?.canAskAgain
    ) {
      requestPermission()
    }

    const result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    })

    if (!result.cancelled) {
      setImage(result.uri)
      onSelect?.(result.uri)
    }

    onBlur?.()
  }

  return (
    <ImagePickerWrapper>
      <TouchableOpacity onPress={pickImage}>
        <ImagePickerBox>
          <ImagePickerBoxTextContent>
            <CustomText
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              style={{ marginBottom: -6 }}>
              +
            </CustomText>
            <CustomText fontSize="xxs" fontWeight="bold" textAlign="center">
              Add image
            </CustomText>
          </ImagePickerBoxTextContent>
          {image ? <ImagePickerImagePreview source={{ uri: image }} /> : null}
        </ImagePickerBox>
      </TouchableOpacity>
      <ImagePickerErrorText fontSize="xxs" fontWeight="bold" textAlign="center" color="error">
        {errorMsg || ''}
      </ImagePickerErrorText>
    </ImagePickerWrapper>
  )
}
