import { StyleSheet, StatusBar } from 'react-native'
import { Colors } from '../../../../themes'
import { normalizeWidth, normalizeHeight } from '../../../../themes/Metrics';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light
    },
    content: {
        flex: 1,
        paddingTop: normalizeHeight(30),
        paddingHorizontal: normalizeWidth(40)
    },
    noNotifications: {
        height: normalizeHeight(120),
        flex: 0,
        margin: normalizeWidth(5)
    },
    cardContainer: isViewed => ({
        marginHorizontal: normalizeWidth(5),
        backgroundColor: isViewed ? Colors.lightGray : '#cbc7d1'
    }),
    markAllAsRead: {
        backgroundColor: Colors.primaryAqua,
        marginBottom: normalizeHeight(20)
    }
})

export default styles;