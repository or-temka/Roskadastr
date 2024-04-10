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
import Input from '../components/Input'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import SplitLineText from '../components/SplitLineText'
import InputCheckbox from '../components/InputCheckbox'

export default function SignUp({ navigation }) {
  const [loginInput, setLoginInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [dateBirthInput, setDateBirthInput] = useState('')
  const [cityInput, setCityInput] = useState('Сыктывкар')
  const [branchInput, setBranchInput] = useState('ул. Оплеснина, д.7')
  const [passwordInput, setPasswordInput] = useState('')
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('')
  const [policyCheckbox, setPolicyCheckbox] = useState(false)

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
      policyCheckbox
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
    passwordInput,
    confirmPasswordInput,
    policyCheckbox,
  ])

  return (
    <Page navigation={navigation}>
      <ScrollView style={styles.signUp}>
        <View style={styles.signUp__container}>
          <Text style={gStyles.h4}>Создание аккаунта</Text>
          <Text style={[gStyles.lightParagraph, styles.signUp__hintText]}>
            Укажите информацию о себе. Позже ее можно будет изменить.
          </Text>
          <SplitLineText
            text="Основная информация"
            style={styles.signUp__splitLine}
          />
          <Input
            title="Логин"
            onChangeText={(value) => setLoginInput(value)}
            placeholder="Введите логин"
            value={loginInput}
            style={styles.signUp__input}
          />
          <Input
            title="Имя"
            onChangeText={(value) => setNameInput(value)}
            placeholder="Введите имя"
            value={nameInput}
            style={styles.signUp__input}
          />
          <Input
            title="Фамилия"
            onChangeText={(value) => setSurnameInput(value)}
            placeholder="Введите фамилию"
            value={surnameInput}
            style={styles.signUp__input}
          />
          <SplitLine style={styles.signUp__splitLine} />
          <Input
            title="Дата рождения"
            onChangeText={(value) => setDateBirthInput(value)}
            placeholder="Введите дату рождения"
            value={dateBirthInput}
            style={styles.signUp__input}
          />
          <Input
            title="Город"
            placeholder="Введите город"
            value={cityInput}
            style={styles.signUp__input}
            isEditable={false}
          />
          <Input
            title="Филиал"
            placeholder="Введите филиал"
            value={branchInput}
            style={styles.signUp__input}
            isEditable={false}
          />
          <SplitLineText text="Пароль" style={styles.signUp__splitLine} />
          <Input
            title="Пароль"
            onChangeText={(value) => setPasswordInput(value)}
            placeholder="Введите пароль"
            isSecure={true}
            value={passwordInput}
            style={styles.signUp__input}
          />
          <Input
            title="Подтверждение пароля"
            onChangeText={(value) => setConfirmPasswordInput(value)}
            placeholder="Введите пароль ещё раз"
            isSecure={true}
            value={confirmPasswordInput}
            style={styles.signUp__input}
          />
          <SplitLine style={styles.signUp__splitLine} />
          <InputCheckbox
            style={styles.signUp__policyCheckbox}
            text="Согласен с политикой обработки персональных данных"
            onChange={(isActive) => setPolicyCheckbox(isActive)}
          />
          <Button
            title="Создать"
            isFocusBtn={disabledEnterBtn ? false : true}
            isDisabled={disabledEnterBtn}
          />
        </View>

        <View style={styles.signUp__bottomLinksContainer}>
          <TouchableOpacity style={styles.signUp__bottomLinks}>
            <Text style={[gStyles.text, styles.signUp__bottomLink]}>
              Пользовательское соглашение
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUp__bottomLinks}>
            <Text style={[gStyles.text, styles.signUp__bottomLink]}>
              Политика конфиденциальности
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  signUp: {},
  signUp__container: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  signUp__hintText: {
    marginTop: 10,
  },
  signUp__splitLine: {
    paddingHorizontal: 0,
  },
  signUp__input: {
    marginVertical: 8,
  },
  signUp__policyCheckbox: {
    marginBottom: 12,
    marginTop: 3,
  },
  signUp__bottomLinksContainer: {
    marginTop: 15,
    paddingBottom: 40,
  },
  signUp__bottomLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  signUp__bottomLink: {
    color: colorStyles.grey,
  },
})
