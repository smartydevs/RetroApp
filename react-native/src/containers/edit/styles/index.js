import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
  title: {
    textAlign: 'center',
    marginVertical: normalizeHeight(20)
  }
})

export default styles
