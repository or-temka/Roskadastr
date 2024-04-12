import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import Input from '../components/Input'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import SplitLineText from '../components/SplitLineText'
import ButtonForm from '../components/ButtonForm'
import ModalConfirm from '../components/ModalConfirm'
import PageForUser from './PageForUser'
import axios from '../axios'
import { getUserToken } from '../utils/userTokenStorage'

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
  const [isLoadning, setIsLoading] = useState(true)

  const [errorsInput, setErrorsInput] = useState({
    login: '',
    name: '',
    surname: '',
    dateOfBirth: '',
    city: '',
    branch: '',
    password: '',
    confirmPassword: '',
    oldPassword: '',
  })

  //Добавление данных в поля
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('/user/me', {
          headers: {
            Authorization: await getUserToken(),
          },
        })
        setLoginInput(data.login)
        setNameInput(data.name)
        setSurnameInput(data.surname)
        setDateBirthInput(data.dateOfBirth)
        setCityInput(data.city)
        setBranchInput(data.branch)

        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserData()
  }, [])

  //Обработка ошибки в поле
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

  // Для обработки нажатия на сохранения изменений
  const editAccount = async () => {
    try {
      setDisabledEnterBtn(true)
      if (passwordInput !== confirmPasswordInput) {
        return setErrorsInput({
          ...errorsInput,
          confirmPassword: 'Пароль не совпадает',
        })
      }

      const { data } = await axios.patch(
        '/user/updateMe',
        {
          login: loginInput,
          password: passwordInput,
          oldPassword: oldPasswordInput,
          name: nameInput,
          surname: surnameInput,
          dateOfBirth: dateBirthInput,
          city: cityInput,
          branch: branchInput,
        },
        {
          headers: {
            Authorization: await getUserToken(),
          },
        }
      )

      navigation.reset({
        routes: [{ name: 'profile' }],
      })
      setDisabledEnterBtn(false)
    } catch (err) {
      setDisabledEnterBtn(false)
      const errorMsg = err.response.data.errorMsg
      console.log(err + ' ' + errorMsg)
      if (errorMsg === 'Старый пароль указан неверно') {
        return setErrorsInput({
          ...errorsInput,
          oldPassword: 'Старый пароль указан неверно',
        })
      }
      const errors = {}
      err.response.data.map((errorObj) => {
        errors[errorObj.path] = errorObj.msg
      })
      setErrorsInput({
        ...errorsInput,
        ...errors,
      })
    }
  }

  //for modal
  const [modalVisible, setModalVisible] = useState(false)

  function confirmModalHandler() {
    console.log('Аккаунт удален из бд')
    setModalVisible(false)
    navigation.navigate('signIn')
  }
  function cancelModalHandler() {
    setModalVisible(false)
  }

  if (isLoadning) {
    return (
      <PageForUser navigation={navigation}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      </PageForUser>
    )
  }
  return (
    <PageForUser navigation={navigation}>
      <ScrollView style={styles.editProfile}>
        <View style={styles.editProfile__container}>
          <Text style={gStyles.h4}>Редактирование профиля</Text>
          <SplitLineText
            text="Основная информация"
            style={styles.editProfile__splitLine}
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
            style={styles.editProfile__input}
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
            style={styles.editProfile__input}
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
            style={styles.editProfile__input}
            errorText={errorsInput.surname}
          />
          <SplitLine style={styles.editProfile__splitLine} />
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
            style={styles.editProfile__input}
            errorText={errorsInput.dateOfBirth}
          />
          <Input
            title="Город"
            placeholder="Введите город"
            value={cityInput}
            style={styles.editProfile__input}
            isEditable={false}
            errorText={errorsInput.city}
          />
          <Input
            title="Филиал"
            placeholder="Введите филиал"
            value={branchInput}
            style={styles.editProfile__input}
            isEditable={false}
            errorText={errorsInput.branch}
          />
          <SplitLineText text="Пароль" style={styles.editProfile__splitLine} />
          <Input
            title="Старый пароль"
            onChangeText={(value) => {
              setOldPasswordInput(value)
              setErrorsInput({
                ...errorsInput,
                oldPassword: '',
              })
            }}
            placeholder="Введите старый пароль"
            isSecure={true}
            value={oldPasswordInput}
            style={styles.editProfile__input}
            errorText={errorsInput.oldPassword}
          />
          <Input
            title="Новый пароль"
            onChangeText={(value) => {
              setPasswordInput(value)
              setErrorsInput({
                ...errorsInput,
                password: '',
              })
            }}
            placeholder="Введите новый пароль"
            isSecure={true}
            value={passwordInput}
            style={styles.editProfile__input}
            errorText={errorsInput.password}
          />
          <Input
            title="Подтверждение нового пароля"
            onChangeText={(value) => {
              setConfirmPasswordInput(value)
              setErrorsInput({
                ...errorsInput,
                confirmPassword: '',
              })
            }}
            placeholder="Введите новый пароль ещё раз"
            isSecure={true}
            value={confirmPasswordInput}
            style={styles.editProfile__input}
            errorText={errorsInput.confirmPassword}
          />
          <SplitLine style={styles.editProfile__splitLine} />
          <Button
            title="Сохранить"
            isFocusBtn={disabledEnterBtn ? false : true}
            isDisabled={disabledEnterBtn}
            onPress={editAccount}
          />
          <SplitLine style={styles.editProfile__splitLine} />
          <ButtonForm
            title="Удалить аккаунт"
            textColor={colorStyles.text.error}
            onPress={() => setModalVisible(true)}
          />
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
      {modalVisible && (
        <ModalConfirm
          label="Вы уверены, что хотите удалить свой аккаунт?"
          visible={modalVisible}
          confirmHandler={() => confirmModalHandler()}
          confirmBtnText="Да, уверен"
          cancelHandler={cancelModalHandler}
        />
      )}
    </PageForUser>
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
