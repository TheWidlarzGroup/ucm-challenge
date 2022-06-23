import { Picker } from '@react-native-picker/picker'
import { PropsWithChildren, useRef, useState } from 'react'
import { Button, Modal, TouchableOpacity } from 'react-native'
import { CustomText } from '../CustomText/CustomText.styled'
import {
  CustomListPickerModalBackdropTouchable,
  CustomListPickerModalContainer,
  CustomListPickerModalPickerHeader,
  CustomListPickerModalPickerWrapper,
} from './CustomListPicker.styled'
import {
  CustomInputErrorLabel,
  CustomInputLabel,
  CustomTextInputBorderedBox,
  CustomTextInputWrapper,
} from '../CustomTextInput/CustomTextInput.styled'
import { theme } from '../../theme/theme'
import { IS_IOS } from '../../utils/device'

export type ListPickerItem = {
  label: string
  value: string
}

export type CustomListPickerProps = {
  errorMsg?: string
  label?: string
  items?: ListPickerItem[]
  placeholder?: string
  onSelect?: F1<ListPickerItem>
  onBlur?: F0
  onFocus?: F0
}

const IOSModalWrapper = ({
  children,
  modalVisible,
  toggleModal,
}: PropsWithChildren<{ modalVisible?: boolean; toggleModal: F0 }>) => {
  if (!IS_IOS) {
    return <>{children}</>
  }

  return (
    <Modal animationType="fade" visible={modalVisible} transparent>
      <CustomListPickerModalContainer>
        <CustomListPickerModalBackdropTouchable onPress={toggleModal} />
        <CustomListPickerModalPickerWrapper pointerEvents="box-none">
          <CustomListPickerModalPickerHeader>
            <Button
              title="Close"
              onPress={() => {
                toggleModal()
              }}
            />
          </CustomListPickerModalPickerHeader>
          {children}
        </CustomListPickerModalPickerWrapper>
      </CustomListPickerModalContainer>
    </Modal>
  )
}

export const CustomListPicker = ({
  errorMsg,
  label,
  placeholder,
  items = [],
  onSelect,
  onBlur,
  onFocus,
}: CustomListPickerProps) => {
  const isChanged = useRef(false)
  const pickerRef = useRef<Picker<string>>(null)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedValue, setSelectedValue] = useState('')

  const toggleModal = () => {
    pickerRef?.current?.focus?.()

    if (!selectedValue && !modalVisible) {
      setSelectedValue(items?.[0]?.value || '')
      onSelect?.(items?.[0])
    }

    if (modalVisible && IS_IOS) {
      onBlur?.()
    }

    if (!modalVisible && IS_IOS) {
      onFocus?.()
    }

    setModalVisible((prev) => !prev)

    isChanged.current = true
  }

  return (
    <CustomTextInputWrapper>
      <CustomTextInputBorderedBox isError={!!errorMsg}>
        {label ? <CustomInputLabel>{label}</CustomInputLabel> : null}

        <TouchableOpacity onPress={toggleModal}>
          <CustomText fontWeight="bold" color={selectedValue ? 'primary' : 'neutral'}>
            {items.find((i) => i.value === selectedValue)?.label || placeholder || '...'}
          </CustomText>
        </TouchableOpacity>

        <IOSModalWrapper modalVisible={modalVisible} toggleModal={toggleModal}>
          <Picker
            ref={pickerRef}
            mode="dialog"
            itemStyle={{
              fontFamily: theme.fonts.nunitoMedium,
            }}
            style={!IS_IOS && { height: 0, width: 0, opacity: 0 }}
            selectedValue={selectedValue}
            onFocus={onFocus} // android
            onBlur={onBlur} // For andorid, additionally
            onValueChange={(itemValue) => {
              const selected = items.find((i) => i?.value === itemValue)

              if (!isChanged.current) {
                return null
              }

              if (selected) {
                onSelect?.(selected)
              }

              setSelectedValue(itemValue)
            }}>
            {items.map((i) => (
              <Picker.Item label={i.label} value={i.value} key={i.value} />
            ))}
          </Picker>
        </IOSModalWrapper>
      </CustomTextInputBorderedBox>
      {errorMsg ? (
        <CustomInputErrorLabel numberOfLines={1}>{errorMsg}</CustomInputErrorLabel>
      ) : null}
    </CustomTextInputWrapper>
  )
}
