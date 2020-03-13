import {StyleSheet} from 'react-native'
import { Colors, Metrics } from '../../../../themes'
import { normalizeWidth } from '../../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    padding: normalizeWidth(50)
  },
  userIcon: {
    color: Colors.primaryPink
  },
  inputContainer: {
    marginBottom: Metrics.margin
  },
  signup: {
    backgroundColor: Colors.primaryPink,
    marginTop: Metrics.margin
  },
  enterDetails: {
    marginBottom: Metrics.margin * 2,
    marginTop: Metrics.margin
  }
})

export default styles
