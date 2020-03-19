import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../../themes'
import { normalizeWidth, normalizeHeight } from '../../../../themes/Metrics';

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
        marginHorizontal: normalizeWidth(40)
    },
    separator: {
        height: 3,
        width: "100%",
        backgroundColor: Colors.primaryLight,
        alignSelf: "center",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: Colors.black,
        shadowOffset: { height: 0, width: 0 }
    },
    eventCardStyle: {
        height: normalizeHeight(200),
        maxHeight: normalizeHeight(200),
        flexDirection: "row",
        borderRadius: 15,
        top: 15,
        backgroundColor: "white",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        marginBottom: normalizeHeight(20)
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
    eventCardSectionOneStyle: {
        flex: 1,
        borderTopRightRadius: 15,
        justifyContent: "center",
        padding: normalizeWidth(10)
    },
    eventCardSectionTwoStyle: {
        flex: 1,
        padding: normalizeWidth(10),
        justifyContent: 'space-around'
    },
    eventCardSectionThreeStyle: {
        flex: 2,
        borderBottomRightRadius: 15,
        padding: normalizeWidth(10),
        justifyContent: "space-around"
    },
    eventCardSubtitleStyle: {
        fontSize: normalizeWidth(17.5),
        color: Colors.gray,
        marginBottom: normalizeHeight(20)
    },
    eventCardTextStyle: {
        fontSize: normalizeWidth(15),
        color: Colors.gray
    },
    eventCardLeft: {
        left: normalizeWidth(12)
    },
    searchBarContainerStyle: {
        height: normalizeHeight(60),
        flexDirection: "row",
        marginTop: 10
    },
    searchBarInputContainerStyle: {
        flex: 3,
        paddingRight: 10,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15
    },
    searchBarButtonContainerStyle: {
        flex: 1
    },
    searchBarInputStyle: {
        height: normalizeHeight(60),
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: "white",
        fontSize: normalizeWidth(20),
        paddingLeft: normalizeWidth(20)
    },
    searchBarButtonStyle: {
        backgroundColor: Colors.primaryPink,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    },
    searchBarIconSize: normalizeWidth(20)
})

export default styles;