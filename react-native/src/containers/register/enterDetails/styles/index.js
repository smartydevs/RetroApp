import {StyleSheet} from 'react-native'
import { Colors, Metrics } from '../../../../themes'
import { normalizeWidth } from '../../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    padding: normalizeWidth(50)
  },
  userIcon: {
    color: Colors.primaryPink
  }
})

export default styles
