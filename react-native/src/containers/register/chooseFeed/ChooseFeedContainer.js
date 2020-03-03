import React, { Component } from 'react'
import { ChooseFeedComponent } from '.'

class ChooseFeedContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    onCardPress = () => {

    }
    onSkipButtonPress = () => {
        
    }
    render() {
        return (
            <ChooseFeedComponent
                onCardPress={this.onCardPress}
                onSkipButtonPress={this.onSkipButtonPress}
            />
        )
    }
}

export default ChooseFeedContainer
