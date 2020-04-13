import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ApplicationStyles, Colors, Fonts, Metrics  } from '../../themes'
import { normalizeWidth } from '../../themes/Metrics'
import Row from './Row'

const styles = StyleSheet.create({
  container: {
    height: Metrics.defaultSearchBarHeight,
    backgroundColor: Colors.lightGray,
    borderRadius: normalizeWidth(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Metrics.margin
  },
  text: {
    ...Fonts.style.caption,
    color: Colors.gray,
    flex: 1
  },
  icon: {
    color: Colors.primaryDark,
  }
})

const { alignCenter, shadow } = ApplicationStyles

const SearchBar = (props) => {
  let inputRef = null
  const { style, textStyle, placeholder, onChangeText } = props
  const [value, setValue] = useState('')

  const onSearch = (value) => {
    inputRef.focus()
    setValue(value)
    onChangeText(value)
  }

  return (
    <Row style={[styles.container, alignCenter, shadow, style]}>
      <TextInput
        ref={input => { inputRef = input }}
        onChangeText={value => onSearch(value)}
        placeholderTextColor={Colors.primaryLight}
        placeholder={placeholder}
        style={[styles.text, textStyle]}
        autoCapitalize='none'
        value={value}
        returnKeyType={'done'}
      />
      <Ionicons style={styles.icon} name={'md-search'} size={20} />
    </Row>
  )
}

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]),
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

SearchBar.defaultProps = {
  style: styles.container,
  textStyle: styles.text
}

export default SearchBar
