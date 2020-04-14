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
    eventCard: {
        height: normalizeHeight(110),
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
    },
    title: {
        textAlign: 'center',
        marginVertical: normalizeHeight(20)
    },
    reloadButton: {
        backgroundColor: Colors.primaryPink,
        marginBottom: normalizeHeight(20),
        width: normalizeWidth(40),
        height: normalizeWidth(40)
    },
    reloadLogo: {
        color: Colors.light
    }
})

export default styles;