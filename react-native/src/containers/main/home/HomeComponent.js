import React from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { ApplicationStyles, Fonts } from '../../../themes'
import { Header, EventCard, TextButton } from '../../../components'
import styles from './styles/index'
import strings from '../../../lib/stringEnums'
import { events } from '../../../fixtures/EventsData'
import Metrics, { normalizeWidth } from '../../../themes/Metrics'

const { container, shadow, center } = ApplicationStyles
const { style } = Fonts
const HomeComponent = () => {
    const renderEvent = ({ _id, title, location, date, eventImage }) => (
        <TouchableOpacity
            onPress={() => showEvent(_id)}
            style={{ paddingHorizontal: normalizeWidth(5) }}
            key={_id}
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
    const loadMore = () => {
        alert("Load More")
    }
    return (
        <SafeAreaView style={[container, styles.container]}>
            <View style={styles.headerContainer}>
                <Header
                    style={styles.header}
                    iconStyle={styles.icon}
                    text={strings.home}
                    icon={require("../../../../assets/icon.png")}
                />
            </View>
            <View style={styles.content}>
                <Text style={[style.title, { alignSelf: "center" }]}>You have {events.length} ongoing events</Text>
                <View style={styles.separator} />
                <FlatList
                    data={events}
                    keyExtractor={({ _id }) => _id}
                    renderItem={({ item }) => renderEvent(item)}
                />
                <TextButton
                    style={[styles.loadMore, center, { marginBottom: Metrics.margin }]}
                    onPress={() => loadMore()}
                    text={strings.loadMore}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeComponent
