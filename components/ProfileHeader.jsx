import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { colorStyles, typography } from '../variables'
import gStyles from '../gStyles'
import ProfileEditBtnSVG from '../components/svg/ProfileEditBtnSVG'

export default function ProfileHeader({ username, city, style, navigation }) {
  return (
    <View style={[styles.profileBranch, style]}>
      <View style={styles.profileBranch__container}>
        <Image
          style={styles.profileBranch__image}
          source={require('../assets/img/HaventPhoto.jpg')}
        />
        <View style={styles.profileBranch__personData}>
          <Text style={gStyles.h6}>{username}</Text>
          <Text style={gStyles.paragraph}>{city}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.profileBranch__editBtnContainer} onPress={() => navigation.navigate("editProfile")}>
        <ProfileEditBtnSVG />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  profileBranch: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  profileBranch__container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  profileBranch__image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileBranch__personData: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  profileBranch__editBtnContainer: {
    width: 24,
    height: 24,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
