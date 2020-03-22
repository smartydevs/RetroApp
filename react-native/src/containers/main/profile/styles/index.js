import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeWidth, normalizeHeight } from '../../../../themes/Metrics';

const styles = StyleSheet.create({
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
        marginVertical: normalizeHeight(20)
    },
    profilePicture: {
        width: normalizeWidth(70),
        height: normalizeWidth(70),
        borderRadius: normalizeWidth(35),
        top: -normalizeWidth(37),
        borderWidth: normalizeWidth(2),
        borderColor: Colors.light,
        marginRight: Metrics.margin * 2,
    },
    cover: {
        flex: 1,
        height: normalizeHeight(150),
        backgroundColor: Colors.gray,
        width: "100%",
    },
    separator: {
        height: 3,
        width: "100%",
        backgroundColor: Colors.red,
        alignSelf: "center",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: Colors.black,
        shadowOffset: { height: 0, width: 0 }
    },
    eventCard: {
        height: normalizeHeight(80),
        maxHeight: normalizeHeight(100),
        borderRadius: normalizeWidth(10),
        backgroundColor: Colors.lightGray,
        marginBottom: normalizeHeight(20)
    },
    infoContainer: {
        marginTop: Metrics.margin,
        paddingHorizontal: normalizeWidth(40),
        height: normalizeWidth(50),
        borderBottomWidth: normalizeHeight(2),
        borderColor: Colors.lighCream
    },
    loadMore: {
        width: normalizeWidth(150),
        backgroundColor: Colors.primaryPink,
        color: Colors.cream
    }
})

export default styles;