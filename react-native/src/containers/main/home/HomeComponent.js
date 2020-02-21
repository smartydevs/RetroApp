import React from 'react'
import { View, Text } from 'react-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const HomeComponent = () => {
    return (
        <View style={[container, center]}>
            <Text> Home Screen </Text>
        </View>
    )
}

export default HomeComponent
