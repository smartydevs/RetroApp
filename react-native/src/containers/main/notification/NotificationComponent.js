import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ApplicationStyles, Colors } from '../../../themes'
import { Header } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import NotificationCard from '../../../components/notificationcard/NotificationCard'
import { notifications } from '../../../fixtures/NotificationsData'
import { normalizeWidth } from '../../../themes/Metrics'

const { container } = ApplicationStyles

const NotificationComponent = ({ onChangeText }) => {
    return (
        <SafeAreaView style={[container, styles.container]}>
            <View style={styles.headerContainer}>
                <Header style={styles.header}
                    iconStyle={styles.icon}
                    text={strings.notifications}
                    textStyle={styles.headerTitle}
                    icon={require("../../../../assets/icon.png")} />
            </View>
            <View
                style={styles.content}
            >
                <FlatList
                    contentContainerStyle={styles.flatlistContainerStyle}
                    data={notifications}
                    keyExtractor={(item, i) => `${i}`}
                    renderItem={({ item }) => {
                        return <NotificationCard
                            containerStyle={styles.notificationCardContainerStyle}
                            imageContainerStyle={styles.notificationCardImageContainerStye}
                            imageStyle={styles.notificationCardImageStyle}
                            contentContainerStyle={styles.notificationCardContentContainerStyle}
                            messageStyle={styles.notificationCardMessageStyle}
                            message={item.message}
                            imageSource={item.imageSource}
                        />
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default NotificationComponent
