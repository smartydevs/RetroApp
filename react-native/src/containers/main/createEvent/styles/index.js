import { StyleSheet } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  image: {
    flex: 1,
    height: normalizeHeight(200),
    zIndex: 500,
    backgroundColor: Colors.white,
  },
  overlay: {
    flex: 1,
    backgroundColor: `${Colors.primaryDark}80`,
    padding: normalizeWidth(24),
  },
  separator: {
    width: '100%',
    borderBottomColor: Colors.gray,
    borderBottomWidth: normalizeHeight(4),
    zIndex: 500,
  },
  padding: {
    padding: normalizeHeight(24),
  },
  icon: {
    backgroundColor: Colors.primaryDark,
    height: normalizeHeight(40),
    width: normalizeHeight(40),
    borderRadius: normalizeHeight(20),
    marginRight: normalizeHeight(20),
  },
  profilePicture: {
    width: normalizeWidth(40),
    height: normalizeWidth(40),
    borderRadius: normalizeWidth(20),
    borderWidth: normalizeWidth(2),
    borderColor: Colors.gray,
    marginRight: Metrics.margin,
  },
  participant: {
    marginVertical: normalizeHeight(10),
    alignItems: 'center',
    width: normalizeHeight(160),
  },
  organiser: {
    width: normalizeWidth(50),
    height: normalizeWidth(50),
    borderRadius: normalizeHeight(25),
  },
  descriptionInput: {
    height: normalizeHeight(180),
  },
  label: {
    marginBottom: normalizeHeight(10),
  },
  button: {
    backgroundColor: Colors.primaryPink,
    marginTop: normalizeHeight(20),
  },
})

export default styles
