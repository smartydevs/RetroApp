import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { normalizeHeight, normalizeWidth } from '../../themes/Metrics';
import { Fonts, Colors } from '../../themes';

const NotificationCard = ({ containerStyle, imageContainerStyle, imageStyle, contentContainerStyle, messageStyle, message, imageSource }) => (
    <TouchableOpacity
        style={containerStyle}>
        <View style={imageContainerStyle}>
            <Image
                resizeMode="cover"
                style={imageStyle}
                source={{ uri: imageSource }} />
        </View>
        <View style={contentContainerStyle}>
            <Text style={messageStyle}>{message} a</Text>
        </View>
    </TouchableOpacity>
)

export default NotificationCard