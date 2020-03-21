import React from 'react'
import { View, Image, Text } from 'react-native';
import { normalizeHeight } from '../../themes/Metrics';
import { Colors } from '../../themes';

const Cover = ({ imageSource, imageStyle, containerStyle }) => (
    <View
        style={containerStyle}
    >
        {imageSource ?
            <Image
                style={imageStyle}
                resizeMode="cover"
                source={{ uri: imageSource }}
            /> :
            <Image
                style={imageStyle}
                resizeMode="cover"
                source
            />
        }
    </View>
)

export default Cover;