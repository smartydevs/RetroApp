import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header, SearchBar } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import EventCard from '../../../components/eventcard/EventCard'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'
import { FlatList } from 'react-native-gesture-handler'
// import { events } from '../../../fixtures/EventsData'

const { container, shadow } = ApplicationStyles

const SearchComponent = ({ onChangeText, showEvent, events }) => {
  const renderEvents = ({
    users = [],
    title,
    location = {},
    startDate,
    photo = {},
    _id,
  }) => (
    <TouchableOpacity
      onPress={() => showEvent(_id)}
      style={{ paddingHorizontal: normalizeWidth(5) }}
      key={_id}
    >
      <EventCard
        containerStyle={[styles.eventCardStyle, shadow]}
        participants={users}
        title={title}
        location={location.addressName}
        date={startDate}
        eventImage={photo ? photo.fullPath : 'https://picsum.photos/1920/1080'}
      />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={[container, styles.container]}>
      <View style={styles.headerContainer}>
        <Header
          style={styles.header}
          iconStyle={styles.icon}
          text={strings.search}
          textStyle={styles.headerTitle}
          icon={require('../../../../assets/icon.png')}
        />
      </View>
      <View style={styles.content}>
        <SearchBar
          onChangeText={onChangeText}
          placeholder={strings.searchPlaceholder}
          style={{ marginVertical: Metrics.margin * 2 }}
        />
        <FlatList
          bounces={false}
          keyExtractor={({ _id }) => _id}
          data={events}
          renderItem={({ item }) => renderEvents(item)}
          style={{ marginBottom: Metrics.margin }}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchComponent
