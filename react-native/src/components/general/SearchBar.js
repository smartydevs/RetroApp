import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, Image } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics, Images } from '../../themes'
import Row from './Row'
import { normalizeWidth } from '../../themes/Metrics'
import { ImageButton } from '../buttons'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    height: Metrics.list.itemHeight,
    ...ApplicationStyles.screen.container,
    backgroundColor: Colors.primaryLightGray
  },
  text: {
    ...Fonts.style.caption,
    margin: 0,
    padding: 0,
    borderWidth: 0,
    flex: 1
  },
  icon: {
    ...Metrics.forms.imageSize,
    marginRight: normalizeWidth(12)
  }
})

const { alignCenter } = ApplicationStyles

const SearchBar = (props) => {
  let inputRef = null
  const { style, textStyle, placeholder, onChangeText, onDeleteSearch } = props
  const [value, setValue] = useState('')

  const onSearch = (value) => {
    inputRef.focus()
    setValue(value)
    onChangeText(value)
  }

  const onDelete = () => {
    setValue('')
    onDeleteSearch()
  }

  return (
    <Row style={[styles.container, style, alignCenter]}>
      <Image
        source={Images.icons.search}
        style={styles.icon}
        resizeMode='contain'
      />
      <TextInput
        ref={input => { inputRef = input }}
        onChangeText={value => onSearch(value)}
        placeholderTextColor={Colors.dark}
        placeholder={placeholder}
        style={[styles.text, textStyle]}
        autoCapitalize='none'
        value={value}
        returnKeyType={'done'}
      />
      {value ? (
        <ImageButton
          source={Images.icons.close}
          style={styles.icon}
          onPress={onDelete}
        />
      ) : null}
    </Row>
  )
}

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onDeleteSearch: PropTypes.func.isRequired,
  textStyle: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)]),
  style: PropTypes.oneOfType([PropTypes.instanceOf(Object), PropTypes.instanceOf(Array)])
}

SearchBar.defaultProps = {
  style: styles.container,
  textStyle: styles.text
}

export default SearchBar
