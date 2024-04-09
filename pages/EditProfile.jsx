import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import Page from './Page'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import Input from '../components/input'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import SplitLineText from '../components/SplitLineText'
import InputCheckbox from '../components/InputCheckbox'

export default function EditProfile({ navigation }) {
  const [loginInput, setLoginInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [dateBirthInput, setDateBirthInput] = useState('')
  const [cityInput, setCityInput] = useState('Сыктывкар')
  const [branchInput, setBranchInput] = useState('ул. Оплеснина, д.7')
  const [oldPasswordInput, setOldPasswordInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('')

  const [disabledEnterBtn, setDisabledEnterBtn] = useState(true)

  useEffect(() => {
    const condition =
      loginInput &&
      nameInput &&
      surnameInput &&
      dateBirthInput &&
      cityInput &&
      branchInput &&
      passwordInput &&
      confirmPasswordInput &&
      oldPasswordInput
    if (condition) {
      setDisabledEnterBtn(false)
    } else {
      setDisabledEnterBtn(true)
    }
  }, [
    loginInput,
    nameInput,
    surnameInput,
    dateBirthInput,
    cityInput,
    branchInput,
    oldPasswordInput,
    passwordInput,
    confirmPasswordInput,
  ])

  return (
    <Page navigation={navigation}>
      <ScrollView style={styles.editProfile}>
        <View style={styles.editProfile__container}>
          <Text style={gStyles.h4}>Редактирование профиля</Text>
          <SplitLineText
            text="Основная информация"
            style={styles.editProfile__splitLine}
          />
          <Input
            title="Логин"
            onChangeText={(value) => setLoginInput(value)}
            placeholder="Введите логин"
            value={loginInput}
            style={styles.editProfile__input}
          />
          <Input
            title="Имя"
            onChangeText={(value) => setNameInput(value)}
            placeholder="Введите имя"
            value={nameInput}
            style={styles.editProfile__input}
          />
          <Input
            title="Фамилия"
            onChangeText={(value) => setSurnameInput(value)}
            placeholder="Введите фамилию"
            value={surnameInput}
            style={styles.editProfile__input}
          />
          <SplitLine style={styles.editProfile__splitLine} />
          <Input
            title="Дата рождения"
            onChangeText={(value) => setDateBirthInput(value)}
            placeholder="Введите дату рождения"
            value={dateBirthInput}
            style={styles.editProfile__input}
          />
          <Input
            title="Город"
            placeholder="Введите город"
            value={cityInput}
            style={styles.editProfile__input}
            isEditable={false}
          />
          <Input
            title="Филиал"
            placeholder="Введите филиал"
            value={branchInput}
            style={styles.editProfile__input}
            isEditable={false}
          />
          <SplitLineText text="Пароль" style={styles.editProfile__splitLine} />
          <Input
            title="Старый пароль"
            onChangeText={(value) => setOldPasswordInput(value)}
            placeholder="Введите старый пароль"
            isSecure={true}
            value={oldPasswordInput}
            style={styles.editProfile__input}
          />
          <Input
            title="Новый пароль"
            onChangeText={(value) => setPasswordInput(value)}
            placeholder="Введите новый пароль"
            isSecure={true}
            value={passwordInput}
            style={styles.editProfile__input}
          />
          <Input
            title="Подтверждение нового пароля"
            onChangeText={(value) => setConfirmPasswordInput(value)}
            placeholder="Введите новый пароль ещё раз"
            isSecure={true}
            value={confirmPasswordInput}
            style={styles.editProfile__input}
          />
          <SplitLine style={styles.editProfile__splitLine} />
          <Button
            title="Сохранить"
            isFocusBtn={disabledEnterBtn ? false : true}
            isDisabled={disabledEnterBtn}
          />
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  editProfile: {},
  editProfile__container: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  editProfile__splitLine: {
    paddingHorizontal: 0,
  },
  editProfile__input: {
    marginVertical: 8,
  },
  editProfile__policyCheckbox: {
    marginBottom: 12,
    marginTop: 3,
  },
})
