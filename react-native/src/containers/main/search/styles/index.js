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
    eventCardStyle: {
        height: normalizeHeight(140),
        borderRadius: 15,
        top: 15,
        backgroundColor: Colors.lightGray,
        marginBottom: normalizeHeight(20)
    },
    eventNotFound: {
        height: normalizeHeight(120),
        flex: 0,
        margin: normalizeWidth(5)
    }
})

export default styles;