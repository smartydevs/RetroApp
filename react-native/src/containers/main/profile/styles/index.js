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
        marginHorizontal: normalizeWidth(40),
    },
    profilePicture: {
        width: normalizeWidth(70),
        height: normalizeWidth(70),
        borderRadius: normalizeWidth(35),
        top: -normalizeWidth(35),
        backgroundColor: Colors.gray
    },
    profilePictureTextStyle: {
        fontSize: normalizeWidth(20),
        fontWeight: "700"
    },
    nameTextStyle: {
        fontSize: normalizeWidth(20),
        fontWeight: "700",
        left: normalizeWidth(20)
    },
    coverImageStyle: {
        width: "100%",
        height: "100%"
    },
    sectionsTextStyle: {
        fontSize: normalizeWidth(17),
        marginBottom: normalizeHeight(20)
    },
    coverContainerStyle: {
        flex: 1,
        maxHeight: normalizeHeight(150),
        backgroundColor: Colors.gray
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
        height: normalizeHeight(100),
        maxHeight: normalizeHeight(100),
        flexDirection: "row",
        borderRadius: normalizeWidth(10),
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
        borderTopLeftRadius: normalizeWidth(10),
        borderBottomLeftRadius: normalizeWidth(10)
    },
    eventCardImageContainerStyle: {
        flex: 3,
        borderRadius: 25
    },
    eventCardContentStyle: {
        flex: 8
    },
    eventCardParticipantImageStyle: {
        width: normalizeWidth(30),
        height: normalizeWidth(30),
        borderRadius: normalizeWidth(15),
        borderColor: "white",
        borderWidth: 1
    },
    eventCardTitleStyle: {
        fontSize: normalizeWidth(17.5),
        fontWeight: "700",
        color: Colors.primaryDark
    },
    eventCardSectionOneStyle: {
        flex: 1,
        borderTopRightRadius: normalizeWidth(10),
        justifyContent: "center",
        padding: normalizeWidth(10),
    },
    eventCardSectionTwoStyle: {
        flex: 1,
        padding: normalizeWidth(10),
        borderBottomRightRadius: normalizeWidth(10),
        justifyContent: 'space-between',
        flexDirection: "row",
    },
    eventCardSubtitleStyle: {
        fontSize: normalizeWidth(15),
        color: Colors.gray
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