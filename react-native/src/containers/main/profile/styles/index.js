import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../../themes'
import Metrics, { normalizeWidth, normalizeHeight } from '../../../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light
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
        borderWidth: normalizeWidth(4),
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
        height: normalizeHeight(150),
        borderRadius: normalizeWidth(10),
        backgroundColor: Colors.lightGray,
        marginBottom: normalizeHeight(20)
    },
    infoContainer: {
        height: normalizeWidth(80),
        borderBottomWidth: normalizeHeight(4),
        borderColor: Colors.lighCream,
        padding: Metrics.margin,
        justifyContent: 'space-between'
    },
    loadMore: {
        width: normalizeWidth(150),
        backgroundColor: Colors.primaryPink,
        color: Colors.cream
    },
    smallBtn: {
        backgroundColor: Colors.primaryAqua,
        width: normalizeWidth(40),
        height: normalizeWidth(40),
        marginHorizontal: normalizeWidth(5)
    },
    smallBtnLogo: {
        color: Colors.gray
    },
    eventButton: {
        width: '50%'
    },
    buttonsRow: {
        justifyContent: 'space-between',
        marginBottom: normalizeHeight(15)
    }
})

export default styles