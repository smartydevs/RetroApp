import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'

const { container } = ApplicationStyles

const ProfileComponent = ({ onChangeText }) => {
    return (
        <SafeAreaView style={[container, styles.container]}>
            <View style={styles.headerContainer}>
                <Header style={styles.header}
                    iconStyle={styles.icon}
                    text={strings.userprofile}
                    textStyle={styles.headerTitle}
                    icon={require("../../../../assets/icon.png")} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileComponent
