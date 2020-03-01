import React from 'react'
import { View, Text } from 'react-native'
import { ApplicationStyles } from '../../../themes'

const {container, center} = ApplicationStyles

const LoginComponent = () => {
    return (
        <View style={[container, center]}>
            <Text> Log in Screen </Text>
        </View>
    )
}

export default LoginComponent
