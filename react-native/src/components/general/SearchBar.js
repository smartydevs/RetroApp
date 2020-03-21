import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { ApplicationStyles, Colors, Fonts, Metrics,  } from '../../themes'
import { normalizeWidth } from '../../themes/Metrics'
import Row from './Row'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Metrics.list.itemHeight,
    backgroundColor: Colors.lightGray,
    borderRadius: normalizeWidth(10),
    marginVertical: Metrics.margin
  },
  text: {
    ...Fonts.style.caption,
    color: Colors.gray,
    paddingLeft: Metrics.margin,
    padding: 0,
    borderWidth: 0,
    flex: 1,
    backgroundColor: Colors.lightGray,
    borderTopLeftRadius: normalizeWidth(10),
    borderBottomLeftRadius: normalizeWidth(10)
  },
  icon: {
    color: Colors.lightGray
  },
  iconContainer: {
    flex: 1,
    backgroundColor: Colors.primaryPink,
    height: '100%',
    borderTopRightRadius: normalizeWidth(10),
    borderBottomRightRadius: normalizeWidth(10)
  },
  inputContainer: {
    flex: 3
  }
})

const { alignCenter, shadow, center } = ApplicationStyles

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
    <Row style={[styles.container, style, alignCenter, shadow]}>
      <View style={styles.inputContainer}>
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
      </View>
      <View style={[styles.iconContainer, center]}>
        <Ionicons style={styles.icon} name={'md-search'} size={30} />
      </View>
    </Row>
  )
}

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]),
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

SearchBar.defaultProps = {
  style: styles.container,
  textStyle: styles.text
}

export default SearchBar
