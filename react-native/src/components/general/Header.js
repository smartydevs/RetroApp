import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import Row from './Row'
import { Fonts, ApplicationStyles, Colors, Metrics } from '../../themes'
import { normalizeHeight, normalizeWidth } from '../../themes/Metrics'
import { ImageButton, Button } from '../buttons'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    height: normalizeHeight(57),
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.46,

    elevation: 9,
    zIndex: 10
  },
  rightContainer: {
    height: '100%',
    minWidth: '20%',
    justifyContent: 'flex-end',
  },
  icon: {
    height: Metrics.icons.large,
    width: Metrics.icons.large,
    marginHorizontal: normalizeWidth(16)
  },
  leftContainer: {
    height: '100%',
    minWidth: '20%',
    justifyContent: 'center',
  },
})

const { bigBoldTitle, whiteText } = Fonts.style
const { amountText, alignCenter, padding } = ApplicationStyles

const Header = ({ icon, iconStyle, text, style, textStyle, onPress, amount }) => {
  const leftButton = icon ? (
    <ImageButton
      source={icon}
      style={[styles.icon, iconStyle]}
      onPress={onPress}
    />
  ) : (
    <Button onPress={onPress} style={[styles.icon]}>
      <Ionicons name="md-arrow-dropleft" size={40} style={{color: Colors.light}} />
    </Button>
  )
  return (
    <Row style={[styles.container, style]}>
      <View style={[styles.leftContainer, { alignItems: 'flex-start' }, padding]}>
        {leftButton}
      </View>
      <Text style={[bigBoldTitle, whiteText, { alignSelf: 'center' }, textStyle]}>{text}</Text>
      <Row style={[styles.rightContainer, alignCenter, padding]}>
        <Text style={amountText}>{amount}</Text>
      </Row>
    </Row>
  )
}

const mapStateToProps = state => ({
  amount: state.profile.money,
})

export default connect(mapStateToProps, null)(Header)

Header.propTypes = {
  icon: PropTypes.number,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.instanceOf(Object),
  style: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
}

Header.defaultProps = {
  icon: undefined,
  style: {},
  textStyle: {},
  onPress: () => {},
}
