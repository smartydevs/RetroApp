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
        paddingTop: normalizeHeight(30),
        paddingHorizontal: normalizeWidth(40)
    }
})

export default styles;