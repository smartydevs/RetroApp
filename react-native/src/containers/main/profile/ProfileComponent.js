import React from 'react'
import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { ApplicationStyles, Fonts } from '../../../themes'
import { Header, Row } from '../../../components/general/'
import strings from '../../../lib/stringEnums'
import styles from './styles'
import EventCard from '../../../components/eventcard/EventCard'
import { ProfilePicture, TextButton } from '../../../components'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'
import { Card } from '../notification'
import { LoadMoreEnum, BottomStackScreensEnum } from '../../../lib/enums'

const { container, shadow, center } = ApplicationStyles
const { bigBoldTitle, primaryDarkText, boldTitle, grayText } = Fonts.style
const { ON_GOING_EVENTS, CREATED_EVENTS } = LoadMoreEnum

const ProfileComponent = ({ coverUrl, firstName, lastName, showEvent, loadMore,
    goingEvents, totalGoingEvents, createdEvents, totalCreatedEvents, navigate }) => {

    const renderGoingEvents = ({_id, title, location, date, eventImage}) => (
        <TouchableOpacity
            onPress={() => showEvent(_id)}
            style={{paddingHorizontal: normalizeWidth(5)}}
        >
            <EventCard
                containerStyle={[styles.eventCard, shadow]}
                title={title}
                location={location}
                date={date}
                eventImage={eventImage}
                isSmall
            />
        </TouchableOpacity>
    )

    const renderCreatedEvents = ({_id, title, location, date, eventImage}) => (
        <TouchableOpacity
            onPress={() => showEvent(_id)}
            style={{paddingHorizontal: normalizeWidth(5)}}
        >
            <EventCard
                containerStyle={[styles.eventCard, shadow]}
                title={title}
                location={location}
                date={date}
                eventImage={eventImage}
                isSmall
            />
        </TouchableOpacity>
    )

    const getGoingEvents = () => {
        if (totalGoingEvents) {
            return (
                <View>
                    <Text style={[boldTitle, grayText, {paddingVertical: Metrics.margin}]}>
                        {strings.going}
                    </Text>
                    <FlatList
                        bounces={false}
                        data={goingEvents}
                        renderItem={({item}) => renderGoingEvents(item)}
                    />
                    <TextButton
                        style={[styles.loadMore, center, {marginBottom: Metrics.margin}]}
                        onPress={() => loadMore(ON_GOING_EVENTS)}
                        text={strings.loadMore}
                    />
                </View>
            )
        }

        return (
            <Card
                message={strings.noGoingEvents}
                icon={'md-search'}
                containerStyle={{marginHorizontal: normalizeWidth(5)}}
                onPress={() => navigate(BottomStackScreensEnum.SEARCH)}
            />
        )
    }

    const getCreatedEvents = () => {
        if (totalCreatedEvents) {
            return (
                <View>
                    <Text style={[boldTitle, grayText, {paddingVertical: Metrics.margin}]}>
                        {strings.created}
                    </Text>
                    <FlatList
                        bounces={false}
                        data={createdEvents}
                        renderItem={({item}) => renderCreatedEvents(item)}
                    />
                    <TextButton
                        style={[styles.loadMore]}
                        onPress={() => loadMore(CREATED_EVENTS)}
                        text={strings.loadMore}
                    />
                </View>
            )
        }

        return (
            <Card
                message={strings.noCreatedEvents}
                icon={'md-create'}
                containerStyle={{marginHorizontal: normalizeWidth(5)}}
                onPress={() => navigate(BottomStackScreensEnum.CREATE)}
            />
        )
    }

    return (
        <SafeAreaView style={[container, styles.container]}>
            <Header
                style={styles.header}
                iconStyle={styles.icon}
                text={strings.userprofile}
                icon={require("../../../../assets/icon.png")}
            />
            <ScrollView>
                <Image
                    style={styles.cover}
                    resizeMode="cover"
                    source={coverUrl && {uri: coverUrl}}
                />
                <Row style={styles.infoContainer}>
                    <ProfilePicture
                        firstName={firstName}
                        lastName={lastName}
                        style={styles.profilePicture}
                    />
                    <Text style={[bigBoldTitle, primaryDarkText]}>
                        {firstName}
                        {' '}
                        {lastName}
                    </Text>
                </Row>
                <View style={[styles.content]}>
                    {getGoingEvents()}
                    {getCreatedEvents()}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileComponent
