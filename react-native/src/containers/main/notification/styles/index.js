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
    }
})

export default styles;