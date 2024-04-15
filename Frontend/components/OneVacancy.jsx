import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colorStyles } from '../variables'
import gStyles from '../gStyles'

export default function OneVacancy({
  name,
  price,
  experience,
  employment,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.vacancy} onPress={onPress}>
      <Text style={[gStyles.h6, styles.vacancy__name]}>{name}</Text>
      <Text style={gStyles.paragraph}>{price}</Text>
      <View style={gStyles.mergeText}>
        <Text style={gStyles.lightParagraph}>Требуемый опыт:</Text>
        <Text style={gStyles.paragraph}>{experience}</Text>
      </View>
      <Text style={gStyles.paragraph}>{employment}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  vacancy: {
    padding: 10,
    paddingTop: 5,
    backgroundColor: colorStyles.choice,
    borderRadius: 3,
  },
  vacancy__name: {
    color: colorStyles.text.linkBlue,
  },
})
