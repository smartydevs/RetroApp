import React from 'react'
import { View, Text } from 'retro-web-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const SearchComponent = () => {
    return (
        <View style={container, center}>
            <Text> Search Screen </Text>
        </View>
    )
}

export default SearchComponent
