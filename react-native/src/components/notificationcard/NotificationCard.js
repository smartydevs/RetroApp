import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { normalizeHeight, normalizeWidth } from '../../themes/Metrics';
import { Fonts, Colors, ApplicationStyles } from '../../themes';
import { Row } from '../general';

const { shadow, center } = ApplicationStyles
const { primaryDarkText, boldTitle } = Fonts.style

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: normalizeHeight(100),
        marginBottom: normalizeHeight(20),
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
    },
    imageContainer: {
        width: normalizeHeight(100)
    },
    image: {
        height: normalizeHeight(100),
        width: normalizeHeight(100),
        borderTopLeftRadius: normalizeWidth(10),
        borderBottomLeftRadius: normalizeWidth(10)
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        borderTopRightRadius: normalizeWidth(10),
        borderBottomRightRadius: normalizeWidth(10),
        paddingHorizontal: normalizeWidth(20)
    }
})

const NotificationCard = ({ containerStyle, message, imageSource = null }) => {
    const configureImage = () => {
        if (!imageSource || !imageSource.length) {
            return (
                <View style={[styles.image, center, {
                    backgroundColor: Colors.primaryPink,
                }]}>
                    <Ionicons style={{color: Colors.white}} name={'md-search'} size={30} />
                </View>
            )
        }

        return (
            <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: imageSource }}
            />
        )
    }
    return (
        <Row style={[styles.container, shadow, containerStyle]}>
            <View style={styles.imageContainer}>
                {configureImage()}
            </View>
            <View style={styles.contentContainer}>
                <Text style={[primaryDarkText, boldTitle]}>{message}</Text>
            </View>
        </Row>
    )
}

export default NotificationCard