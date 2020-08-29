import { StyleSheet } from 'react-native'
import { Colors } from '../../../themes'
import Metrics, { normalizeHeight, normalizeWidth } from '../../../themes/Metrics'

let styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light,
    },
    lightGrayContainer: {
        backgroundColor: Colors.lightGray,
    },
    title: {
        textAlign: 'center',
        marginVertical: normalizeHeight(20)
    },
    padding: {
        padding: normalizeHeight(24),
    },
    label: {
        marginBottom: normalizeHeight(10)
    },
    saveButton: {
        backgroundColor: Colors.primaryDark
    },
    descriptionInput: {
        alignItems: "baseline",
        textAlignVertical: 'top',
        padding: normalizeHeight(15),
        height: normalizeHeight(180),
    },
})

export default styles;