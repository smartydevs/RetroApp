import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '../../themes';
import { Row } from '../general';
import { normalizeWidth } from '../../themes/Metrics';

const EventCard = ({ style, imageContainerStyle, imageStyle, contentStyle,
    sectionThreeStyle, titleStyle, subtitleStyle, textStyle, participantImageStyle,
    title, location, participants, left, date, isSmall, eventImage }) => {
    const styles = StyleSheet.create({
        more: {
            backgroundColor: Colors.white,
            justifyContent: "center",
            alignItems: "center",
            left: -6 * left
        },
        titleContainer: {
            flex: 1,
            borderTopRightRadius: 15,
            justifyContent: "center",
            padding: normalizeWidth(10)
        },
        informationContainer: {
            padding: normalizeWidth(10),
            justifyContent: 'space-between'
        }
    })
    const renderParticipants = () => {
        if (!participants) {
            return
        }

        if (participants.length < 7) {
            return participants.map((participant, i) => (
                <Image
                    key={i}
                    style={[participantImageStyle, { left: -(i * left) }]}
                    source={{ uri: participant.profilePicture }}
                />
            ))
        }
            
        return (
            participants.slice(0, 6).map((participant, i) => (
                <Image
                    key={i}
                    style={[participantImageStyle, { left: -(i * left) }]}
                    source={{ uri: participant.profilePicture }}
                />
            ))
        )
    }

    return (
        <View
            style={style}
        >
            <View style={imageContainerStyle}>
                <Image
                    resizeMode="cover"
                    style={imageStyle}
                    source={{ uri: eventImage }}
                />
            </View>
            <View style={contentStyle}>
                <View style={styles.titleContainer}>
                    <Text style={titleStyle}>{title}</Text>
                </View>
                <Row style={styles.informationContainer}>
                    <Text style={textStyle}>{location}</Text>
                    <Text style={textStyle}>{date}</Text>
                </Row>
                {!(isSmall == false) ?
                    <View style={sectionThreeStyle}>
                        <Text style={textStyle}>{participants ? participants.length : null} people going</Text>
                        <View style={{ flexDirection: "row" }}>
                            {renderParticipants()}
                            {participants.length > 6 ? (
                                <View style={[participantImageStyle, styles.more]}>
                                    <Text>
                                        {participants.length < 105 ? `+${participants.length - 6}` : "99+"}
                                    </Text>
                                </View>
                            ): null}
                        </View>
                    </View> : null}
            </View>
        </View>
    )
}

export default EventCard
