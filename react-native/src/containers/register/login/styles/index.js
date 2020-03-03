import {StyleSheet} from 'react-native'
import Metrics, { normalizeHeight } from '../../../../themes/Metrics'
import { Colors } from '../../../../themes'

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: normalizeHeight(60)
    },
    logo: {
        height: normalizeHeight(85),
        marginVertical: normalizeHeight(30)
    },
    welcome: {
        marginVertical: normalizeHeight(20)
    },
    maxWidth: {
        width: '100%'
    },
    inputContainer: {
        marginBottom: Metrics.margin
    },
    login: {
        backgroundColor: Colors.primaryPink
    },
    facebook: {
        backgroundColor: Colors.blue,
        flexDirection: 'row'
    },
    facebookLogo: {
        color: Colors.white,
        marginRight: Metrics.margin
    },
    separator: {
        marginTop: normalizeHeight(20)
    }
})

export default styles