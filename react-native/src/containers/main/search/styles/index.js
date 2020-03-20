import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeWidth, normalizeHeight } from '../../../../themes/Metrics';

const styles = StyleSheet.create({
    title: {
        color: Colors.gray,
        alignSelf: "center",
        fontSize: normalizeWidth(20),
        marginTop: normalizeWidth(15),
        marginBottom: normalizeWidth(10)
    },
    headerContainer: {
        backgroundColor: Colors.dark,
        paddingTop: StatusBar.currentHeight
    },
    container: {
        backgroundColor: Colors.light
    },
    header: {
        backgroundColor: Colors.dark,
        height: normalizeHeight(66)
    },
    icon: {
        width: normalizeWidth(55),
        height: normalizeHeight(55)
    },
    headerTitle: {
        color: Colors.white,
        fontSize: normalizeWidth(25)
    },
    content: {
        flex: 1,
        marginHorizontal: normalizeWidth(30),
        paddingHorizontal: normalizeWidth(10)
    },
    separator: {
        height: 2,
        width: "100%",
        backgroundColor: Colors.dark,
        alignSelf: "center",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: Colors.black,
        shadowOffset: { height: 0, width: 0 },
        marginVertical: Metrics.margin
    },
    eventCardStyle: {
        height: normalizeHeight(200),
        flexDirection: "row",
        borderRadius: 15,
        top: 15,
        backgroundColor: Colors.lightGray,
        marginBottom: normalizeHeight(20),
    },
    eventCardImageStyle: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    eventCardImageContainerStyle: {
        flex: 3,
        borderRadius: 25
    },
    eventCardContentStyle: {
        flex: 7
    },
    eventCardParticipantImageStyle: {
        width: normalizeWidth(30),
        height: normalizeWidth(30),
        borderRadius: normalizeWidth(15),
        borderColor: "white",
        borderWidth: 1
    },
    eventCardTitleStyle: {
        fontSize: normalizeWidth(20),
        fontWeight: "700",
        color: Colors.primaryDark
    },
    eventCardSectionThreeStyle: {
        flex: 2,
        borderBottomRightRadius: 15,
        padding: normalizeWidth(10),
        justifyContent: "space-around"
    },
    eventCardSubtitleStyle: {
        fontSize: normalizeWidth(17),
        color: Colors.primaryLight,
        marginBottom: normalizeHeight(20),
        lineHeight: normalizeWidth(17)
    },
    eventCardTextStyle: {
        fontSize: normalizeWidth(15),
        color: Colors.primaryLight
    }
})

export default styles;