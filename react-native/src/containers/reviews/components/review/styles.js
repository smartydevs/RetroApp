import { StyleSheet } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeWidth } from '../../../../themes/Metrics'

const styles = StyleSheet.create({
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  profilePicture: {
    width: normalizeWidth(50),
    height: normalizeWidth(50),
    borderRadius: normalizeWidth(25),
    borderWidth: normalizeWidth(2),
    borderColor: Colors.gray,
  },
  container: {
    marginVertical: Metrics.margin,
    padding: Metrics.margin,
    borderRadius: Metrics.margin,
    alignItems: 'flex-start'
  },
  content: {
    paddingHorizontal: Metrics.margin * 2,
  },
  description: {
    marginRight: Metrics.margin * 3,
  },
  title: {
    marginVertical: Metrics.margin
  },
  titleContainer: {
    justifyContent: 'space-between',
    marginRight: Metrics.margin * 3,
  }
})

export default styles
