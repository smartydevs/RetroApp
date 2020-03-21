import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import Card from './card'
import { notifications } from '../../../fixtures/NotificationsData'
import { normalizeWidth } from '../../../themes/Metrics'

const { container } = ApplicationStyles

const NotificationComponent = ({ showNotification }) => {
    const renderNotification = ({ _id, message = '', imageSource = '' }) => (
        <Card
            onPress={() => showNotification(_id)}
            containerStyle={{marginHorizontal: normalizeWidth(5)}}
            message={message}
            imageSource={imageSource}
            icon={'md-search'}
        />
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
                    <Card message={strings.noNotifications} icon={'md-search'} />
                )}
            </View>
        </SafeAreaView>
    )
}

export default NotificationComponent
