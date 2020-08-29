import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../../../themes'
import { normalizeHeight } from '../../../../themes/Metrics'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGray,
    paddingHorizontal: Metrics.margin,
    paddingVertical: Metrics.margin * 2,

    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.46,

    elevation: 9,
    zIndex: 7
  },
  star: {
    color: Colors.primaryPink
  },
  starsContainer: {
    justifyContent: 'space-evenly',
    paddingVertical: Metrics.margin
  },
  inputContainer: {
    marginBottom: Metrics.margin
  },
  addQuestionBtn: {
    backgroundColor: Colors.primaryDark,
    marginVertical: normalizeHeight(15)
  },
})

export default styles
