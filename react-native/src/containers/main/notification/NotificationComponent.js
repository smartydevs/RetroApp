import React from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { ApplicationStyles, Fonts } from '../../../themes'
import { Header, TextCard, TextButton } from '../../../components'
import strings from '../../../lib/stringEnums'
import styles from './styles'

const { container, shadow } = ApplicationStyles
const { button } = Fonts.style

const NotificationComponent = ({
  showNotification,
  notifications,
  onSearchEvents,
  markAllAsRead,
}) => {
  const renderNotification = ({
    _id,
    message = '',
    imageSource = '',
    eventId,
    isViewed,
  }) => (
    <TextCard
      onPress={() => showNotification(_id, eventId)}
      containerStyle={styles.cardContainer(isViewed)}
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
          <View>
            <FlatList
              data={notifications}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => renderNotification(item)}
            />
            <TextButton
              text={'Mark all as read'}
              textStyle={[button]}
              onPress={markAllAsRead}
              style={[styles.markAllAsRead, shadow]}
            />
          </View>
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
