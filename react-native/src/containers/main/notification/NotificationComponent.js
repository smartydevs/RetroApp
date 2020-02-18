import React from 'react'
import { View, Text } from 'react-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const NotificationComponent = () => {
    return (
        <View style={container, center}>
            <Text> Notification Screen </Text>
        </View>
    )
}

export default NotificationComponent