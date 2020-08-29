import React from 'react';
import {
    View,
    Text
} from 'react-native'
import { ApplicationStyles, Fonts } from '../../themes';
import { Header, Input, TextButton } from '../../components';
import styles from './styles/index'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { reducer } from './reducer';

const { center, shadow, container } = ApplicationStyles
const { boldTitle, grayText, button } = Fonts.style
let ContactComponent = ({ onGoBack, editable, loading, onPressSave }) => {
    let [contactState, dispatch] = React.useReducer(reducer, { subject: "", body: "" })
    return (<View style={[container, styles.container]}>
        <Header
            onPress={onGoBack}
            text={"Contact Us"}
        />
        <KeyboardAwareScrollView
            scrollEnabled={true}
            enableOnAndroid={false}
            bounces={false}
        >
            <View>

                <View style={[styles.padding, styles.lightGrayContainer]}>
                    <Text style={[styles.label, button, grayText]}>
                        Subject
            </Text>
                    <Input
                        editable={editable}
                        onChangeText={value => dispatch({ type: 'subject', payload: value })}
                        value={contactState.email}
                    />
                </View>

                <View style={[styles.padding]}>
                    <Text style={[styles.label, button, grayText]}>
                        Message
            </Text>
                    <Input
                        multiline
                        containerStyle={styles.descriptionInput}
                        onChangeText={value => dispatch({ type: 'body', payload: value })}
                        value={contactState.firstName}
                    />
                </View>
            </View>
            <View style={[styles.padding, styles.lightGrayContainer]}>
                <TextButton
                    text={'Send'}
                    onPress={() => onPressSave(contactState)}
                    style={styles.saveButton}
                />
            </View>
        </KeyboardAwareScrollView>
    </View>)
}

export default ContactComponent;