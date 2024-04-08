import { Image, Text, View, StyleSheet } from 'react-native'
import { colorStyles, typography } from '../variables'
import gStyles from '../gStyles'

export default function OneNews() {
  return (
    <View style={styles.oneNews__container}>
      <View style={styles.oneNews__header}>
        <Text style={gStyles.h6}>Тема новости</Text>
        <Text style={gStyles.paragraph}>
          Всем привет, вы на канале куплинов плей, у нас тут постоянно всякие
          конкурсы и оооочень много всего интересного
        </Text>
      </View>
      <Image
        source={require('../assets/img/peoplesphoto.jpg')}
        style={styles.oneNews__image}
      />
      <View style={styles.oneNews__footer}>
        <Text style={gStyles.smallLightText}>12 Января 2021 г.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  oneNews__container: {
    flex: 1,
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    marginBottom: 5,
  },
  oneNews__header: {
    padding: 10,
  },
  oneNews__image: {
    width: '100%',
    height: 200,
  },
  oneNews__footer: {
    padding: 10,
  },
})
