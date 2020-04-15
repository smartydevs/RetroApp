import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header, TextCard } from '../../../components'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import { normalizeWidth } from '../../../themes/Metrics'

const { container } = ApplicationStyles

const NotificationComponent = ({ showNotification, notifications, onSearchEvents }) => {
  const renderNotification = ({ _id, message = '', imageSource = '', eventId }) => (
    <TextCard
      onPress={() => showNotification(_id, eventId)}
      containerStyle={{ marginHorizontal: normalizeWidth(5) }}
      message={message}
      imageSource={imageSource}
      icon={'md-search'}
    />
  )

  return (
    <SafeAreaView style={[container, styles.container]}>
      <Header
        icon={require('../../../../assets/icon.png')}
        text={strings.notifications}
      />
      <View style={styles.content}>
        {notifications && notifications.length ? (
          <FlatList
            data={notifications}
            keyExtractor={({ _id }) => _id}
            renderItem={({ item }) => renderNotification(item)}
          />
        ) : (
          <TextCard
            message={strings.noNotifications}
            icon={'md-search'}
            containerStyle={styles.noNotifications}
            onPress={onSearchEvents}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default NotificationComponent
