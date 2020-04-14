import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Fonts } from '../../../themes'
import { Header, EventCard, TextButton } from '../../../components'
import styles from './styles/index'
import strings from '../../../lib/stringEnums'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'

const { container, shadow, center } = ApplicationStyles
const { boldTitle } = Fonts.style

const HomeComponent = ({ hasMore, events, showEvent, loadMore, refreshPage }) => {
  const renderEvent = ({ _id, title, startDate, eventImage, location: { addressName } }) => (
    <TouchableOpacity
      onPress={() => showEvent(_id)}
      style={{ paddingHorizontal: normalizeWidth(5) }}
      key={_id}
    >
      <EventCard
        containerStyle={[styles.eventCard, shadow]}
        title={title}
        location={addressName}
        date={startDate}
        eventImage={eventImage}
        isSmall
      />
    </TouchableOpacity>
  )
  
  return (
    <SafeAreaView style={[container, styles.container]}>
      <ScrollView bounces={false}>
        <View style={styles.headerContainer}>
          <Header
            style={styles.header}
            iconStyle={styles.icon}
            text={strings.home}
            icon={require('../../../../assets/icon.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={[boldTitle, styles.title]}>
            You have {events.length} ongoing events
          </Text>

          <TextButton 
            onPress={refreshPage}
            style={[styles.reloadButton, center, shadow]}
            hasChildren
          >
            <Ionicons
              name={'md-refresh'}
              size={24}
              style={styles.reloadLogo}
            />
          </TextButton>

          {/* <View> */}
            <FlatList
              data={events}
              keyExtractor={({ _id }) => _id}
              renderItem={({ item }) => renderEvent(item)}
            />
            {hasMore && (
              <TextButton
                style={[styles.loadMore, center, { marginBottom: Metrics.margin }]}
                onPress={() => loadMore()}
                text={strings.loadMore}
              />
            )}
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeComponent
