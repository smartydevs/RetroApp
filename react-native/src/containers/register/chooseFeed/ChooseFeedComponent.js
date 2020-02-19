import React from 'react'
import { View, Text } from 'retro-web-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const ChooseFeedComponent = () => {
    return (
        <View style={container, center}>
            <Text> Choose Feed Screen </Text>
        </View>
    )
}

export default ChooseFeedComponent
