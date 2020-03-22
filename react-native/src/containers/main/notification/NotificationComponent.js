import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header, TextCard } from '../../../components'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import { notifications } from '../../../fixtures/NotificationsData'
import { normalizeWidth } from '../../../themes/Metrics'

const { container } = ApplicationStyles

const NotificationComponent = ({ showNotification }) => {
    const renderNotification = ({ _id, message = '', imageSource = '' }) => (
        <TextCard
            onPress={() => showNotification(_id)}
            containerStyle={{marginHorizontal: normalizeWidth(5)}}
            message={message}
            imageSource={imageSource}
            icon={'md-search'}
        />
    )

    return (
        <SafeAreaView style={[container, styles.container]}>
            <Header
                icon={require("../../../../assets/icon.png")}
                text={strings.notifications}
            />
            <View style={styles.content}>
                {notifications.length ? (
                    <FlatList
                        data={notifications}
                        keyExtractor={({_id}) => _id}
                        renderItem={({ item }) => renderNotification(item)}
                    />
                ) : (
                    <TextCard message={strings.noNotifications} icon={'md-search'} />
                )}
            </View>
        </SafeAreaView>
    )
}

export default NotificationComponent
