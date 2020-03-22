import React, { Component } from 'react'
import { StyleSheet, View, Animated, Text } from 'react-native'
import PropTypes from 'prop-types'
import ImageButton from '../buttons/ImageButton'
import { Colors, Fonts, Metrics, Images } from '../../themes'
import { normalizeWidth, normalizeHeight, responsiveWidth } from '../../themes/Metrics'
import { NotificationTypeEnum, NotificationLength } from '../../lib/enums'
import { Ionicons } from '@expo/vector-icons'

export const DURATION = {
  LENGTH_SHORT: 1200,
  FOREVER: 0,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: Metrics.paddingHorizontal,
    width: responsiveWidth(100) - Metrics.paddingHorizontal,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: Colors.lightGray,
    bottom: normalizeHeight(25),
    shadowColor: '#00000033',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: normalizeHeight(5),
    zIndex: 10,
    borderRadius: 10
  },
  icon: {
    height: Metrics.icons.tiny,
    marginHorizontal: normalizeWidth(12),
    color: Colors.primaryDark
  },
  message: {
    color: Colors.primaryDark,
    flex: 1,
    marginHorizontal: normalizeWidth(16),
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.button,
    paddingVertical: normalizeHeight(10),
  },
  label: backgroundColor => ({
    backgroundColor,
    height: '100%',
    width: normalizeWidth(6),
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  }),
})

let ref = null

const badges = {
  [NotificationTypeEnum.SUCESS]: Colors.green,
  [NotificationTypeEnum.ERROR]: Colors.red,
}

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShown: false,
      type: NotificationTypeEnum.SUCESS,
      text: '',
    }
  }

  static setRef = toast => {
    if (ref === null) {
      ref = toast
    }
  }

  static show(text, type, duration) {
    ref.show(text, type, duration)
  }

  static error(text) {
    ref.show(text, NotificationTypeEnum.ERROR)
  }

  static close() {
    ref.close()
  }

  componentWillMount() {
    this.opacityValue = new Animated.Value(0)
  }

  show(text, type = NotificationTypeEnum.SUCESS, duration = NotificationLength.SHORT) {
    this.delay && clearTimeout(this.delay)
    this.setState({
      isShown: true,
      type,
      text,
    })
    Animated.timing(this.opacityValue, {
      toValue: 1,
      duration: this.props.fadeInDuration,
      useNativeDriver: true,
    }).start(isFinished => {
      if (isFinished) {
        if (duration !== NotificationLength.FOREVER) {
          this.delay = setTimeout(() => {
            this.close()
          }, duration)
        }
      }
    })
  }
  close() {
    Animated.timing(this.opacityValue, {
      toValue: 0,
      duration: this.props.fadeOutDuration,
      useNativeDriver: true,
    }).start(isFinished => {
      if (isFinished) {
        this.setState({
          isShown: false,
        })
      }
    })
  }
  onPressCancel = () => {
    this.delay && clearTimeout(this.delay)
    this.setState({
      isShown: false,
    })
  }
  render() {
    const { text, type } = this.state
    const elevation = this.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 5],
    })
    return this.state.isShown ? (
      <Animated.View
        style={[
          styles.container,
          { opacity: this.opacityValue, shadowOpacity: this.opacityValue, elevation },
        ]}
      >
        <View style={styles.label(badges[type])} />
        <Text style={styles.message}>{text}</Text>
        <Ionicons name="md-close" style={styles.icon} size={16} onPress={this.onPressCancel} />
      </Animated.View>
    ) : null
  }
}

Notification.propTypes = {
  fadeInDuration: PropTypes.number,
  fadeOutDuration: PropTypes.number,
}

Notification.defaultProps = {
  fadeInDuration: 500,
  fadeOutDuration: 500,
}
