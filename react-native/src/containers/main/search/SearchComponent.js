import React from 'react'
import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header, SearchBar } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import EventCard from '../../../components/eventcard/EventCard'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'
import { FlatList } from 'react-native-gesture-handler'
import { events } from '../../../fixtures/EventsData'

const { container, shadow } = ApplicationStyles

const SearchComponent = ({ onChangeText, showEvent }) => {
  const renderEvents = ({participants, title, location, date, eventImage, id}) => (
    <TouchableOpacity
      onPress={() => showEvent(id)}
      style={{paddingHorizontal: normalizeWidth(5)}}
      key={id}
    >
      <EventCard
        containerStyle={[styles.eventCardStyle, shadow]}
        participants={participants}
        title={title}
        location={location}
        date={date}
        eventImage={eventImage}
      />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={[container, styles.container]}>
      <View style={styles.headerContainer}>
        <Header style={styles.header}
          iconStyle={styles.icon}
          text={strings.search}
          textStyle={styles.headerTitle}
          icon={require("../../../../assets/icon.png")} />
      </View>
      <View style={styles.content}>
        <SearchBar
          onChangeText={onChangeText}
          placeholder={strings.searchPlaceholder}
          style={{marginVertical: Metrics.margin * 2}}
        />
        <FlatList
          bounces={false}
          data={events}
          renderItem={({item}) => renderEvents(item)}
          style={{marginBottom: Metrics.margin}}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchComponent
