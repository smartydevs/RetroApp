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
        backgroundColor: Colors.gray,
        paddingTop: StatusBar.currentHeight
    },
    container: {
        backgroundColor: Colors.light
    },
    header: {
        backgroundColor: Colors.gray,
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
        paddingTop: normalizeHeight(30)
    },
    flatlistContainerStyle: {
        paddingHorizontal: normalizeWidth(40)
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
    notificationCardContainerStyle: {
        flex: 1,
        maxHeight: normalizeHeight(100),
        flexDirection: "row",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: Colors.black,
        shadowOffset: { height: 0, width: 0 },
        marginBottom: normalizeHeight(20),
        backgroundColor: "#F3F2F5",
        borderRadius: normalizeWidth(10),
    },
    notificationCardImageContainerStye: {
        width: normalizeHeight(100)
    },
    notificationCardImageStyle: {
        height: normalizeHeight(100),
        width: normalizeHeight(100),
        borderTopLeftRadius: normalizeWidth(10),
        borderBottomLeftRadius: normalizeWidth(10)
    },
    notificationCardContentContainerStyle: {
        flex: 1,
        justifyContent: "center",
        borderTopRightRadius: normalizeWidth(10),
        borderBottomRightRadius: normalizeWidth(10),
        paddingHorizontal: normalizeWidth(20)
    },
    notificationCardMessageStyle: {
        color: Colors.primaryDark,
        fontSize: normalizeWidth(17.5),
        fontWeight: "700"
    }
})

export default styles;