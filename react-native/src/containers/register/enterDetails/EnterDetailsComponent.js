import React from 'react'
import { View, Text } from 'react-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const EnterDetailsComponent = () => {
    return (
        <View style={[container, center]}>
            <Text> Enter Details Screen </Text>
        </View>
    )
}

export default EnterDetailsComponent
