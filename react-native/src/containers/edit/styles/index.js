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
  title: {
    textAlign: 'center',
    marginVertical: normalizeHeight(20)
  },
  padding: {
    padding: normalizeHeight(24),
  },
  label: {
    marginBottom: normalizeHeight(10)
  },
  cardContainer: {
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    flex: 1
  },
  card: {
    backgroundColor: Colors.white,
    width: normalizeWidth(100),
    height: normalizeHeight(80),
    marginBottom: normalizeHeight(15),
    borderRadius: 15, 
  },
  highlight: {
    borderColor: Colors.primaryPink,
    borderWidth: 2,
  },
  saveButton: {
    backgroundColor: Colors.primaryDark
  }
})

export default styles
