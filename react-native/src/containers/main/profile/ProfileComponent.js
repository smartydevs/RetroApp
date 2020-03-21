import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { ApplicationStyles } from '../../../themes'
import { Header } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import EventCard from '../../../components/eventcard/EventCard'
import { Cover } from '../../../components/cover'
import { ProfilePicture } from '../../../components'

const { container } = ApplicationStyles

const ProfileComponent = ({ onChangeText }) => {
    return (
        <SafeAreaView style={[container, styles.container]}>
            <View style={styles.headerContainer}>
                <Header style={styles.header}
                    iconStyle={styles.icon}
                    text={strings.userprofile}
                    textStyle={styles.headerTitle}
                    icon={require("../../../../assets/icon.png")} />
            </View>
            <Cover
                containerStyle={styles.coverContainerStyle}
                imageStyle={styles.coverImageStyle}
            />
            <View
                style={styles.content}
            >
                <View style={{ flexDirection: "row" }}>
                    <ProfilePicture
                        firstName="Vlad"
                        lastName="Romila"
                        textStyle={styles.profilePictureTextStyle}
                        style={styles.profilePicture}
                    />
                    <Text style={styles.nameTextStyle}>Vlad Romila</Text></View>
                <Text style={styles.sectionsTextStyle}>{strings.going}</Text>
                <EventCard
                    style={styles.eventCardStyle}
                    imageContainerStyle={styles.eventCardImageContainerStyle}
                    imageStyle={styles.eventCardImageStyle}
                    contentStyle={styles.eventCardContentStyle}
                    sectionOneStyle={styles.eventCardSectionOneStyle}
                    sectionTwoStyle={styles.eventCardSectionTwoStyle}
                    titleStyle={styles.eventCardTitleStyle}
                    subtitleStyle={styles.eventCardSubtitleStyle}
                    textStyle={styles.eventCardTextStyle}
                    participantImageStyle={styles.eventCardParticipantImageStyle}
                    left={styles.eventCardLeft}
                    isSmall={false}
                    title="Retro Night"
                    subTitle="Retro Bar"
                    date="12 Ian 2020"
                />
                <Text style={styles.sectionsTextStyle}>{strings.created}</Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileComponent
