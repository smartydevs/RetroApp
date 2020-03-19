import React from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../../themes'
import { Header, Separator } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import EventCard from '../../../components/eventcard/EventCard'
import { participants } from '../../../fixtures/ParticipantsData'
import { SearchBar } from '../../../components/searchbar'

const { container } = ApplicationStyles

const SearchComponent = ({ onChangeText }) => {
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
          containerStyle={styles.searchBarContainerStyle}
          inputContainerStyle={styles.searchBarInputContainerStyle}
          inputStyle={styles.searchBarInputStyle}
          placeholder={strings.searchPlaceholder}
          buttonContainerStyle={styles.searchBarButtonContainerStyle}
          buttonStyle={styles.searchBarButtonStyle}
          iconName="search"
          iconSize={styles.searchBarIconSize}
          onChangeText={onChangeText}
        />
        <EventCard
          style={styles.eventCardStyle}
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
          participants={participants}
          left={styles.eventCardLeft}
          title="Retro Night"
          subTitle="Retro Bar"
        />

        <EventCard
          style={styles.eventCardStyle}
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
          participants={participants}
          left={styles.eventCardLeft}
          title="Retro Night"
          subTitle="Retro Bar"
        />
      </View>

    </SafeAreaView>
  )
}

export default SearchComponent
