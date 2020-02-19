import { Dimensions, Platform, PixelRatio } from 'retro-web-native'
import {OS} from '../lib/enums'

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get(
  'window'
)

// based on iphone X's scale
const wscale = SCREEN_WIDTH / 375
const hscale = SCREEN_HEIGHT / 812

export const normalize = (size, based = 'width') => {
  const newSize = based === 'height' ? size * hscale : size * wscale
  if (Platform.OS === OS.IOS) {
    return PixelRatio.roundToNearestPixel(newSize)
  } else {
    return PixelRatio.roundToNearestPixel(newSize) - 2
  }
}

export const normalizeHeight = (size) => {
  const newSize = size * hscale
  if (Platform.OS === OS.IOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const normalizeWidth = (size) => {
  const newSize = size * wscale
  if (Platform.OS === OS.IOS) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}

export const responsiveWidth = (width) => width / 100 * SCREEN_WIDTH

export const responsiveHeight = (height) => height / 100 * SCREEN_HEIGHT

const Metrics = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  margin: normalizeWidth(10),
  defaultButtonHeight: normalizeHeight(48),
  actionButtonHeigth: normalizeHeight(60),
  smallButtonHeight: normalizeHeight(40),
  rowItemHeight: normalizeHeight(50),
  defaultSearchBarHeight: normalizeHeight(46),
  defaultFieldHeight: normalizeHeight(62),
  marginHorizontal: normalizeWidth(10),
  marginVertical: 10,
  profilePicture: 50,
  paddingHorizontal: normalizeWidth(14),
  defaultMargin: 10,
  defaultPadding: 10,
  marginRight: normalizeWidth(6),
  borderWidth: {
    default: 0.5
  },
  buttons: {
    default: normalizeHeight(48),
    small: normalizeHeight(40)
  },
  border: {
    base: 1,
    medium: 1.5,
    big: 2
  },
  list: {
    arrowIcon: {
      width: normalizeWidth(9.4),
      height: normalizeHeight(6.1)
    },
    margin: normalizeWidth(10),
    betItem: {
      title: '35%',
      matchTitle: normalizeWidth(125),
      teams: normalizeWidth(93),
      score: normalizeWidth(46),
      time: normalizeWidth(30),
      stake: '18%',
      win: '18%',
      details: normalizeWidth(9.5),
      statistics: normalizeWidth(115)
    },
    paddingHorizontal: normalizeWidth(12),
    itemHeight: normalizeHeight(46)
  },
  icons: {
    tiny: normalizeHeight(15),
    small: normalizeHeight(20),
    medium: normalizeHeight(30),
    large: normalizeHeight(40),
    xl: normalizeHeight(50)
  },
  forms: {
    input: {
      height: normalizeHeight(50),
      paddingVertical: normalizeHeight(17),
      paddingHorizontal: normalizeHeight(20)
    },
    error: {
      marginVertical: normalizeHeight(16)
    },
    imageSize: {
      marginLeft: normalizeWidth(4.5),
      width: normalizeWidth(14.5),
      height: normalizeWidth(14.5)
    }
  }
}

export default Metrics
