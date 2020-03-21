import React from 'react'
import { View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import NotificationCard from '../../../components/notificationcard/NotificationCard'
import { notifications } from '../../../fixtures/NotificationsData'
import { normalizeWidth } from '../../../themes/Metrics'

const { container } = ApplicationStyles

const NotificationComponent = ({ showNotification }) => {
    const renderNotification = ({ _id, message = '', imageSource = '' }) => (
        <TouchableOpacity
            onPress={() => showNotification(_id)}
            style={{paddingHorizontal: normalizeWidth(5)}}
        >
            <NotificationCard
                message={message}
                imageSource={imageSource}
            />
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={[container, styles.container]}>
            <View style={styles.headerContainer}>
                <Header
                    style={styles.header}
                    iconStyle={styles.icon}
                    text={strings.notifications}
                    icon={require("../../../../assets/icon.png")}
                />
            </View>
            <View style={styles.content}>
                {notifications.length ? (
                    <FlatList
                        data={notifications}
                        keyExtractor={({_id}) => _id}
                        renderItem={({ item }) => renderNotification(item)}
                    />
                ) : (
                    <NotificationCard message={strings.noNotifications} />
                )}
            </View>
        </SafeAreaView>
    )
}

export default NotificationComponent
