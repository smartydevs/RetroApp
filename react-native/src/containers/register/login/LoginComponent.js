import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import I18n from 'react-native-i18n'
import { ApplicationStyles, Images } from '../../../themes'
import { normalizeHeight } from '../../../themes/Metrics'

const {container, center} = ApplicationStyles

const styles = StyleSheet.create({
    logo: {
        height: normalizeHeight(85)
    }
})

const LoginComponent = () => {
    return (
        <View style={[container, center]}>
            <Image
                source={Images.logo}
                style={styles.logo}
                resizeMode={'contain'}
            />
            <Text>{I18n.t('welcome')}</Text>
        </View>
    )
}

export default LoginComponent
