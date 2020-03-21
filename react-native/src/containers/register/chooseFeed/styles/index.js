import { StyleSheet, StatusBar, Platform } from 'react-native'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../../themes/Metrics'
import { Colors, Fonts } from '../../../../themes'

const styles = StyleSheet.create({
    title: {
        color: Colors.primaryAqua,
        marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        paddingVertical: normalizeHeight(28),
        textAlign: 'center'
    },
    card: {
        backgroundColor: "white",
        width: normalizeWidth(160),
        height: normalizeHeight(120),
        borderRadius: 15
    },
    container: {
        margin: 10,
        borderRadius: 15
    },
    cardTitle: {
        color: Colors.white,
        position: "absolute",
        bottom: 5,
        right: 5
    },
    skipButton: {
        padding: normalizeWidth(10),
        color: Colors.white,
        alignSelf: "flex-end",
        alignContent: "flex-end",
        alignItems: "flex-end",
        width: undefined
    },
    skipText: {
        fontSize: Fonts.size.bigTitle,
        color: Colors.primaryAqua
    },
    completeFeed: {
        color: Colors.primaryAqua
    },
    highlight: {
        shadowColor: Colors.primaryAqua,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})

export default styles   