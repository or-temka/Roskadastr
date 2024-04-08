import { Image, StyleSheet, Text, View } from 'react-native'
import { colorStyles, typography } from '../variables'
import MenuButtonSVG from './svg/MenuButtonSVG'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

export default function Header({ navigation }) {
  const [visibleMenu, setVisibleMenu] = useState(false)

  function changeVisibleMenu() {
    visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true)
  }

  function openPageFromMenu(pageName) {
    changeVisibleMenu()
    navigation.navigate(pageName)
  }

  return (
    <View style={styles.header}>
      {visibleMenu && <View style={styles.header__menuBackground}></View>}
      <View style={styles.header__header}>
        <View style={styles.header__logo}>
          <Image
            source={require('../assets/icon.png')}
            style={styles.header__logoImg}
          />
          <Text style={styles.header__logoText}>Роскадастр</Text>
        </View>
        <TouchableOpacity
          style={styles.header__menuBtn}
          onPress={changeVisibleMenu}
        >
          <MenuButtonSVG />
        </TouchableOpacity>
      </View>
      {visibleMenu && (
        <View style={styles.header__menu}>
          <TouchableOpacity
            style={styles.header__menuItem}
            onPress={() => openPageFromMenu('news')}
          >
            <Text>Новости</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.header__menuItem}
            onPress={() => openPageFromMenu('serviceAdd')}
          >
            <Text>Услуги</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.header__menuItem}
            onPress={() => openPageFromMenu('aboutUs')}
          >
            <Text>О нас</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.header__menuItem}
            onPress={() => openPageFromMenu('vacancy')}
          >
            <Text>Вакансии</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    display: 'flex',
  },
  header__header: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'absolute',
    backgroundColor: colorStyles.backgroundFocus,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: colorStyles.border,
  },
  header__logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: 8.5,
    paddingBottom: 8.5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  header__logoImg: {
    width: 25,
    height: 25,
  },
  header__logoText: {
    ...typography.h4,
    fontFamily: 'Noto-Sans',
    fontWeight: '700',
    color: colorStyles.text.text,
  },
  header__menuBtn: {
    width: 40,
    height: 42,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header__menu: {
    position: 'absolute',
    marginTop: 83,
    backgroundColor: colorStyles.backgroundFocus,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: '100%',
    paddingBottom: 5,
  },
  header__menuBackground: {
    opacity: 0.4,
    backgroundColor: 'black',
    position: 'absolute',
    width: '100%',
    height: 2000,
    top: 0,
  },
  header__menuItem: {
    padding: 10,
    paddingLeft: 15,
  },
})
