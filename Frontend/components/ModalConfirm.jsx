import { StyleSheet, View, Text, Modal } from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import Button from './Button'

export default function ModalConfirm({
  label = 'Вы уверены?',
  confirmHandler = () => {},
  cancelHandler = () => {},
  confirmBtnText = 'Ок',
  cancelBtnText = 'Отмена',
  visible = true,
}) {
  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={cancelHandler}
    >
      <View style={styles.modalConfirm}>
        <View style={styles.modalConfirm__window}>
          <Text style={[gStyles.text, styles.modalConfirm__label]}>
            {label}
          </Text>
          <Button
            title={confirmBtnText}
            isFocusBtn={true}
            onPress={confirmHandler}
          />
          <Button title={cancelBtnText} onPress={cancelHandler} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalConfirm: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalConfirm__window: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  modalConfirm__label: {
    textAlign: 'center',
    marginBottom: 10,
  },
})
