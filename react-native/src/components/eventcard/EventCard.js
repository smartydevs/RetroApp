import React from 'react';
import { View, Image, Text } from 'react-native';

const EventCard = ({ style, imageContainerStyle, imageStyle, contentStyle, sectionOneStyle, sectionTwoStyle, sectionThreeStyle, titleStyle, subtitleStyle, textStyle, participantImageStyle, title, subTitle, participants, left }) => (
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
                <Text style={textStyle}>12 Jan 2020</Text>
            </View>
            <View style={sectionThreeStyle}>
                <Text style={textStyle}>{participants.length} people going</Text>
                <View style={{ flexDirection: "row" }}>
                    {participants.slice(0, 7).map((participant, i) => {
                        return <Image key={i} style={[participantImageStyle, { left: -(i * left.left) }]}
                            source={{ uri: participant.profilePicture }}
                        />
                    })}

                </View>
            </View>
        </View>
    </View>
)

export default EventCard