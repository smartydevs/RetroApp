import { StyleSheet } from 'react-native'
import Metrics, { normalizeHeight } from '../../../../themes/Metrics'
import { Colors } from '../../../../themes'

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: normalizeHeight(60)
  },
  logo: {
    height: normalizeHeight(85),
    marginVertical: normalizeHeight(30)
  },
  title: {
    marginVertical: normalizeHeight(20)
  },
  maxWidth: {
    width: '100%'
  },
  inputContainer: {
    marginBottom: Metrics.margin
  },
  changePassword: {
    backgroundColor: Colors.primaryPink
  }
})

export default styles