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
import axios from '../axios'
import { setUserToken } from '../utils/userTokenStorage'

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

  const [errorsInput, setErrorsInput] = useState({
    login: '',
    name: '',
    surname: '',
    dateOfBirth: '',
    city: '',
    branch: '',
    password: '',
    confirmPassword: '',
  })

  const [disabledEnterBtn, setDisabledEnterBtn] = useState(true)

  const [isWrongData, setIsWrongData] = useState(false)

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

  const createAccount = async () => {
    try {
      setDisabledEnterBtn(true)
      if (passwordInput !== confirmPasswordInput) {
        return setErrorsInput({
          ...errorsInput,
          confirmPassword: 'Пароль не совпадает',
        })
      }

      const { data } = await axios.post('/user/reg', {
        login: loginInput,
        password: passwordInput,
        name: nameInput,
        surname: surnameInput,
        dateOfBirth: dateBirthInput,
        city: cityInput,
        branch: branchInput,
      })

      const token = data.token

      setIsWrongData(false)
      setUserToken(token)
      navigation.reset({
        routes: [{ name: 'profile' }],
      })
      setDisabledEnterBtn(false)
    } catch (err) {
      setDisabledEnterBtn(false)
      console.log(err)
      const errors = {}
      err.response.data.map((errorObj) => {
        errors[errorObj.path] = errorObj.msg
      })
      setErrorsInput({
        ...errorsInput,
        ...errors,
      })
      setIsWrongData(true)
    }
  }

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
            onChangeText={(value) => {
              setLoginInput(value)
              setErrorsInput({
                ...errorsInput,
                login: '',
              })
            }}
            placeholder="Введите логин"
            value={loginInput}
            style={styles.signUp__input}
            errorText={errorsInput.login}
          />
          <Input
            title="Имя"
            onChangeText={(value) => {
              setNameInput(value)
              setErrorsInput({
                ...errorsInput,
                name: '',
              })
            }}
            placeholder="Введите имя"
            value={nameInput}
            style={styles.signUp__input}
            errorText={errorsInput.name}
          />
          <Input
            title="Фамилия"
            onChangeText={(value) => {
              setSurnameInput(value)
              setErrorsInput({
                ...errorsInput,
                surname: '',
              })
            }}
            placeholder="Введите фамилию"
            value={surnameInput}
            style={styles.signUp__input}
            errorText={errorsInput.surname}
          />
          <SplitLine style={styles.signUp__splitLine} />
          <Input
            title="Дата рождения"
            onChangeText={(value) => {
              setDateBirthInput(value)
              setErrorsInput({
                ...errorsInput,
                dateOfBirth: '',
              })
            }}
            placeholder="Введите дату рождения"
            value={dateBirthInput}
            style={styles.signUp__input}
            errorText={errorsInput.dateOfBirth}
          />
          <Input
            title="Город"
            placeholder="Введите город"
            value={cityInput}
            style={styles.signUp__input}
            isEditable={false}
            errorText={errorsInput.city}
          />
          <Input
            title="Филиал"
            placeholder="Введите филиал"
            value={branchInput}
            style={styles.signUp__input}
            isEditable={false}
            errorText={errorsInput.branch}
          />
          <SplitLineText text="Пароль" style={styles.signUp__splitLine} />
          <Input
            title="Пароль"
            onChangeText={(value) => {
              setPasswordInput(value)
              setErrorsInput({
                ...errorsInput,
                password: '',
              })
            }}
            placeholder="Введите пароль"
            isSecure={true}
            value={passwordInput}
            style={styles.signUp__input}
            errorText={errorsInput.password}
          />
          <Input
            title="Подтверждение пароля"
            onChangeText={(value) => {
              setConfirmPasswordInput(value)
              setErrorsInput({
                ...errorsInput,
                confirmPassword: '',
              })
            }}
            placeholder="Введите пароль ещё раз"
            isSecure={true}
            value={confirmPasswordInput}
            style={styles.signUp__input}
            errorText={errorsInput.confirmPassword}
          />
          <SplitLine style={styles.signUp__splitLine} />
          {isWrongData && (
            <Text style={[gStyles.text, styles.signUp__wrongPass]}>
              Неверно заполненные поля
            </Text>
          )}
          <InputCheckbox
            style={styles.signUp__policyCheckbox}
            text="Согласен с политикой обработки персональных данных"
            onChange={(isActive) => setPolicyCheckbox(isActive)}
          />
          <Button
            title="Создать"
            isFocusBtn={disabledEnterBtn ? false : true}
            isDisabled={disabledEnterBtn}
            onPress={createAccount}
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
  signUp__wrongPass: {
    color: colorStyles.text.error,
  },
})
