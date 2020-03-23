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
    separator: {
        height: 3,
        width: "100%",
        backgroundColor: Colors.primaryLight,
        alignSelf: "center",
        shadowOpacity: 0.2,
        shadowRadius: normalizeWidth(5),
        shadowColor: Colors.black,
        shadowOffset: { height: 0, width: 0 },
        marginBottom: normalizeHeight(15),
        marginTop: normalizeHeight(15)
    },
    eventCard: {
        height: normalizeHeight(90),
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
        borderColor: Colors.lighCream,
        padding: Metrics.margin
    },
    loadMore: {
        width: normalizeWidth(150),
        backgroundColor: Colors.primaryPink,
        color: Colors.cream
    }
})

export default styles;