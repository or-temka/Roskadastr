import { colorStyles, typography } from './variables'
import { StyleSheet } from 'react-native'

export default gStyles = StyleSheet.create({
  mergeText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  emptyField: {
    width: '100%',
    height: 150,
  },

  text: {
    ...typography.text,
    color: colorStyles.text.text,
  },
  textUnderline: {
    ...typography.text,
    color: colorStyles.text.text,
    textDecorationLine: 'underline',
  },
  lightText: {
    ...typography.text,
    color: colorStyles.text.lightText,
  },
  lightTextUnderline: {
    ...typography.text,
    color: colorStyles.text.lightText,
    textDecorationLine: 'underline',
  },
  smallText: {
    ...typography.smallText,
    color: colorStyles.text.text,
  },
  smallTextUnderline: {
    ...typography.smallText,
    color: colorStyles.text.text,
    textDecorationLine: 'underline',
  },
  smallLightText: {
    ...typography.smallText,
    color: colorStyles.text.lightText,
  },
  smallLightTextUnderline: {
    ...typography.smallText,
    color: colorStyles.text.lightText,
    textDecorationLine: 'underline',
  },
  paragraph: {
    ...typography.paragraph,
    color: colorStyles.text.text,
  },
  paragraphUnderline: {
    ...typography.paragraph,
    color: colorStyles.text.text,
    textDecorationLine: 'underline',
  },
  lightParagraph: {
    ...typography.paragraph,
    color: colorStyles.text.lightText,
  },
  lightParagraphUnderline: {
    ...typography.paragraph,
    color: colorStyles.text.lightText,
    textDecorationLine: 'underline',
  },
  h1: {
    ...typography.h1,
    color: colorStyles.text.text,
  },
  h2: {
    ...typography.h2,
    color: colorStyles.text.text,
  },
  h3: {
    ...typography.h3,
    color: colorStyles.text.text,
  },
  h4: {
    ...typography.h4,
    color: colorStyles.text.text,
  },
  h5: {
    ...typography.h5,
    color: colorStyles.text.text,
  },
  h6: {
    ...typography.h6,
    color: colorStyles.text.text,
  },
})
