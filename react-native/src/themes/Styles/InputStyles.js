import { Colors, Metrics } from '..'

const {input} = Metrics.forms
const InputStyles = {
  unpressed: {
    borderColor: Colors.primaryGray
  },
  default: {
    ...input
  },
  error: {
    ...input,
    borderColor: Colors.red,
    borderWidth: Metrics.border.big
  }
}

export default InputStyles
