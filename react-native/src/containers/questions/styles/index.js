import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  lightGrayContainer: {
    backgroundColor: Colors.lightGray,
  },
  listContainer: {
    padding: Metrics.margin,
  }
})

export default styles
