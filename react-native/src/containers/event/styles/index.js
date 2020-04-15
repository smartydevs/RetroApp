import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  eventImage: {
    flex: 1,
    height: normalizeHeight(200),
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
    width: normalizeWidth(150),
  },
  cardContainer: {
    margin: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: normalizeWidth(100),
    height: normalizeHeight(80),
    borderRadius: 15,
    marginBottom: normalizeHeight(10)
  },
})

export default styles
