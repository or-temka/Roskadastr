import { Image, Text, View, StyleSheet } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

export default function OneNews({
  label = '',
  textContent = ['', ''],
  imgSrc = 'https://slabstore.ru/portfolio/26/3.jpg',
  dateCreate = '',
  imgHeight = 200,
}) {
  const [textContentNews, setTextContentNews] = useState(
    textContent.slice(0, 190)
  )
  const [showMoreTextBtn, setShowMoreTextBtn] = useState(false)

  // Показ кнопки "показать ещё", если много текста
  useEffect(() => {
    if (textContent.length > 190) {
      setTextContentNews(textContentNews + '...')
      setShowMoreTextBtn(true)
    }
  }, [])

  // Отображение много текста
  const showFullTextContent = () => {
    setTextContentNews(textContent)
    setShowMoreTextBtn(false)
  }

  return (
    <View style={styles.oneNews__container}>
      <View style={styles.oneNews__header}>
        <Text style={gStyles.h6}>{label}</Text>
        <Text style={gStyles.paragraph}>{textContentNews}</Text>
        {showMoreTextBtn && (
          <TouchableOpacity onPress={showFullTextContent}>
            <Text style={[gStyles.paragraph, styles.oneNews__showMoreTextBtn]}>
              Показать ещё...
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <Image
        source={{ uri: imgSrc }}
        style={[styles.oneNews__image, { height: imgHeight }]}
      />
      <View style={styles.oneNews__footer}>
        <Text style={gStyles.smallLightText}>{dateCreate}</Text>
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
  },
  oneNews__footer: {
    padding: 10,
  },
  oneNews__showMoreTextBtn: {
    color: colorStyles.text.linkBlue,
  },
})
