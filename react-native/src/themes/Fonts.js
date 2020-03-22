import Colors from './Colors'
import { normalizeWidth } from './Metrics'

const type = {
  base: 'GothamRounded-Book',
  bold: 'GothamRounded-Medium'
}

const size = {
  extraLargeTitle: normalizeWidth(48),
  largeTitle: normalizeWidth(24),
  bigTitle: normalizeWidth(18),
  title: normalizeWidth(14),
  button: normalizeWidth(12),
  smallButton: normalizeWidth(10)
}

const style = {
  largeBoldTitle: {
    fontSize: size.largeTitle,
    fontFamily: type.bold,
    color: Colors.black
  },
  extraLargeTitle: {
    fontSize: size.extraLargeTitle,
    fontFamily: type.base,
    color: Colors.black
  },
  bigBoldTitle: {
    fontSize: size.bigTitle,
    fontFamily: type.bold,
    color: Colors.black
  },
  bigTitle: {
    fontSize: size.bigTitle,
    fontFamily: type.base,
    color: Colors.black
  },
  boldTitle: {
    fontSize: size.title,
    fontFamily: type.bold,
    color: Colors.black
  },
  title: {
    fontSize: size.title,
    fontFamily: type.base,
    textAlignVertical: 'bottom',
    lineHeight: size.title,
    height: size.title,
    color: Colors.black
  },
  button: {
    fontSize: size.button,
    fontFamily: type.bold,
    color: Colors.black
  },
  caption: {
    fontSize: size.button,
    fontFamily: type.base,
    color: Colors.black
  },
  smallButton: {
    fontSize: size.smallButton,
    fontFamily: type.bold,
    color: Colors.black
  },
  smallCaption: {
    fontSize: size.smallButton,
    fontFamily: type.base,
    color: Colors.black
  },
  whiteText: {
    color: Colors.white
  },
  redText: {
    color: Colors.red
  },
  greenText: {
    color: Colors.green
  },
  creamText: {
    color: Colors.cream
  },
  centeredText: {
    textAlign: 'center'
  },
  primaryLightText: {
    color: Colors.primaryLight
  },
  primaryDarkText: {
    color: Colors.primaryDark
  }
}

export default {
  type,
  size,
  style
}
