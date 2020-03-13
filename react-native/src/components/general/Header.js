import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Image } from 'react-native'
import Row from './Row'
import { Fonts, ApplicationStyles, Images, Colors, Metrics } from '../../themes'
import { normalizeHeight } from '../../themes/Metrics'
import ImageButton from '../buttons/ImageButton'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    height: normalizeHeight(57),
    justifyContent: 'space-between',
    width: '100%'
  },
  rightContainer: {
    height: '100%',
    minWidth: '20%',
    justifyContent: 'flex-end'
  },
  icon: {
    height: Metrics.icons.medium,
    width: Metrics.icons.medium
  },
  leftContainer: {
    height: '100%',
    minWidth: '20%',
    justifyContent: 'center'
  }
})

const { largeBoldTitle, grayText } = Fonts.style
const { amountText, amountIcon, alignCenter, padding } = ApplicationStyles

const Header = ({ icon, iconStyle, text, style, textStyle, onPress, amount }) => {
  const leftButton = icon ? (
    <ImageButton
      source={icon}
      style={[styles.icon, iconStyle]}
      onPress={onPress}
    />
  ) : null
  return (
    <Row style={[styles.container, style]}>
      <View style={[styles.leftContainer, { alignItems: 'flex-start' }, padding]}>
        {leftButton}
      </View>
      <Text style={[grayText, { alignSelf: 'center' }, textStyle]}>{text}</Text>
      <Row style={[styles.rightContainer, alignCenter, padding]}>
        <Text style={amountText}>{amount}</Text>
        <Image
          resizeMode={'contain'}
          style={amountIcon}
          source={Images.icons.amount}
        />
      </Row>
    </Row>
  )
}

const mapStateToProps = (state) => ({
  amount: state.profile.money
})

export default connect(mapStateToProps, null)(Header)

Header.propTypes = {
  icon: PropTypes.number,
  text: PropTypes.string.isRequired,
  textStyle: PropTypes.instanceOf(Object),
  style: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
  amount: PropTypes.number.isRequired
}

Header.defaultProps = {
  icon: undefined,
  style: {},
  textStyle: {},
  onPress: () => { }
}
