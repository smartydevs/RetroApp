import { Colors, Metrics } from '..'

const { defaultButtonHeight, actionButtonHeigth, smallButtonHeight } = Metrics
const ButtonStyles = {
  default: {
    backgroundColor: Colors.yellow,
    width: '90%',
    height: defaultButtonHeight
  },
  action: {
    width: actionButtonHeigth,
    height: actionButtonHeigth,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: Colors.yellow
  },
  text: {
    backgroundColor: Colors.yellow,
    width: '90%',
    height: defaultButtonHeight
  },
  disabled: {
    backgroundColor: Colors.primaryGray,
    width: '90%',
    height: defaultButtonHeight
  },
  small: {
    backgroundColor: Colors.yellow,
    width: '60%',
    height: smallButtonHeight
  },
  decline: {
    backgroundColor: Colors.red,
    width: '30%'
  }
}

export default ButtonStyles
