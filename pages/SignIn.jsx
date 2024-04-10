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
import { useState, useEffect } from 'react'
import Button from '../components/Button'

export default function SignIn({ navigation }) {
  const [loginInput, setLoginInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const [disabledEnterBtn, setDisabledEnterBtn] = useState(true)

  useEffect(() => {
    const condition = loginInput && passwordInput
    if (condition) {
      setDisabledEnterBtn(false)
    } else {
      setDisabledEnterBtn(true)
    }
  }, [loginInput, passwordInput])

  return (
    <Page navigation={navigation}>
      <ScrollView style={styles.signIn}>
        <View style={styles.signIn__container}>
          <Text style={gStyles.h4}>Вход в аккаунт</Text>
          <SplitLine style={styles.signIn__splitLine} />
          <Input
            title="Логин"
            onChangeText={(value) => setLoginInput(value)}
            placeholder="Введите логин"
            value={loginInput}
            style={styles.signIn__input}
          />
          <Input
            title="Пароль"
            onChangeText={(value) => setPasswordInput(value)}
            placeholder="Введите пароль"
            isSecure={true}
            value={passwordInput}
            style={styles.signIn__input}
          />
          <SplitLine style={styles.signIn__splitLine} />
          <Button
            title="Войти"
            isFocusBtn={disabledEnterBtn ? false : true}
            isDisabled={disabledEnterBtn}
          />
          <TouchableOpacity style={styles.signIn__forgot}>
            <Text style={[gStyles.text, styles.signIn__forgotText]}>
              Забыл логин или пароль
            </Text>
          </TouchableOpacity>
          <Button
            title="У меня нет аккаунта"
            onPress={() => navigation.navigate('signUp')}
          />
        </View>

        <View style={styles.signIn__bottomLinksContainer}>
          <TouchableOpacity style={styles.signIn__bottomLinks}>
            <Text style={[gStyles.text, styles.signIn__bottomLink]}>
              Пользовательское соглашение
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signIn__bottomLinks}>
            <Text style={[gStyles.text, styles.signIn__bottomLink]}>
              Политика конфиденциальности
            </Text>
          </TouchableOpacity>
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
    </Page>
  )
}

const styles = StyleSheet.create({
  signIn: {},
  signIn__container: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
  },
  signIn__splitLine: {
    paddingHorizontal: 0,
  },
  signIn__input: {
    marginVertical: 8,
  },
  signIn__forgot: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
    marginVertical: 5,
  },
  signIn__forgotText: {
    color: colorStyles.text.linkBlue,
  },
  signIn__bottomLinksContainer: {
    marginTop: 15,
  },
  signIn__bottomLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  signIn__bottomLink: {
    color: colorStyles.grey,
  },
})
