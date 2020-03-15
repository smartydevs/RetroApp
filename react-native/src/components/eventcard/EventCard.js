import React from 'react';
import { View, Image, Text } from 'react-native';

const EventCard = ({ style, imageContainerStyle, imageStyle, contentStyle, sectionOneStyle, sectionTwoStyle, sectionThreeStyle, titleStyle, subtitleStyle, textStyle, participantImageStyle, title, subTitle, participants, left, date, isSmall }) => (
    <View
        style={style}
    >
        <View style={imageContainerStyle}>
            <Image
                resizeMode="cover"
                style={imageStyle}
                source={{ uri: "https://picsum.photos/300/300" }}
            />
        </View>
        <View style={contentStyle}>
            <View style={sectionOneStyle}>
                <Text style={titleStyle}>{title}</Text>
            </View>
            <View style={sectionTwoStyle}>
                <Text style={subtitleStyle}>{subTitle}</Text>
                <Text style={textStyle}>{date}</Text>
            </View>
            {!isSmall == false ?
                <View style={sectionThreeStyle}>
                    <Text style={textStyle}>{participants ? participants.length : null} people going</Text>
                    <View style={{ flexDirection: "row" }}>
                        {participants ? participants.slice(0, 7).map((participant, i) => {
                            return <Image key={i} style={[participantImageStyle, { left: -(i * left.left) }]}
                                source={{ uri: participant.profilePicture }}
                            />
                        }) : null}

                    </View>
                </View> : null}
        </View>
    </View>
)

export default EventCard