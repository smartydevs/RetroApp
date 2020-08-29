import React from 'react'
import {
    BackHandler,
    Alert
} from 'react-native'
import ContactComponent from './ContactComponent'
import { sendContactMessage } from '../../api/contact/methods';
import { BottomStackScreensEnum } from '../../lib/enums';

class ContactContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            editable: true,
        }
    }
    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', this.onGoBack)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onGoBack)
    }
    onGoBack = () => {
        this.props.navigation.goBack()
    }
    onPressSave = (contactState) => {
        Alert.alert(
            'Confirmation',
            'Are you sure that you want to send this message?',
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        const { data, isOk } = await sendContactMessage(contactState)
                        console.log(data);
                        if (!isOk) {
                            return Notification.error(
                                'Something went wrong while uploading the data. Please Try again'
                            )
                        }

                        this.props.navigation.goBack();
                        Alert.alert("Success", "Thank you for your feedback!")
                    },
                },
                {
                    text: 'No',
                },
            ]
        )
    }
    render() {
        return (<ContactComponent
            onPressSave={this.onPressSave}
            editable={this.state.editable}
            loading={this.state.loading}
            onGoBack={this.onGoBack}
        />)
    }
}

export default ContactContainer