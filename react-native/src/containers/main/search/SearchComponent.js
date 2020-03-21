import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../../themes'
import { Header, Separator, SearchBar } from '../../../components/general/'
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
    >
      <EventCard
        style={[styles.eventCardStyle, shadow]}
        imageContainerStyle={styles.eventCardImageContainerStyle}
        imageStyle={styles.eventCardImageStyle}
        contentStyle={styles.eventCardContentStyle}
        sectionOneStyle={styles.eventCardSectionOneStyle}
        sectionTwoStyle={styles.eventCardSectionTwoStyle}
        sectionThreeStyle={styles.eventCardSectionThreeStyle}
        titleStyle={styles.eventCardTitleStyle}
        subtitleStyle={styles.eventCardSubtitleStyle}
        textStyle={styles.eventCardTextStyle}
        participantImageStyle={styles.eventCardParticipantImageStyle}
        left={normalizeWidth(12)}
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
        <Text style={[Fonts.style.largeBoldTitle, styles.title]}>{strings.whatToSearchFor}</Text>
        <Separator
          style={styles.separator}
        />
        <SearchBar
          onChangeText={onChangeText}
          placeholder={strings.searchPlaceholder}
        />
        <FlatList
          bounces={false}
          data={events}
          renderItem={({item}) => renderEvents(item)}
          style={{marginVertical: Metrics.margin}}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchComponent
