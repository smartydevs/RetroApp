import React from 'react'
import { StyleSheet, View } from 'retro-web-native'
import PropTypes from 'prop-types'
import { ApplicationStyles, Colors, Metrics } from '../../themes'

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: Colors.gray,
    right: 0,
    top: 0,
    height: '100%'
  }
})

const Container = ({ style, children, backgroundWidth }) => (
  <View style={[style]}>
    <View style={[{ width: backgroundWidth }, styles.container]} />
    {children}
  </View>
)

Container.propTypes = {
  children: PropTypes.instanceOf(Object),
  style: PropTypes.oneOfType([Object, Array]),
  backgroundWidth: PropTypes.number
}

Container.defaultProps = {
  style: ApplicationStyles.screen.mainContainer,
  children: null,
  backgroundWidth: Metrics.width - Metrics.profilePicture / 2 - Metrics.paddingHorizontal
}

export default Container
