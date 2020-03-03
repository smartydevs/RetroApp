import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ApplicationStyles, Fonts, Colors } from '../../../themes'
import PropTypes from 'prop-types'

import Card from '../../../components/card/Card'
import styles from './styles';
import { cards } from '../../../fixtures/ChooseFeedData';
import strings from '../../../lib/stringEnums';
import TextButton from '../../../components/buttons/TextButton';

const { container, center, } = ApplicationStyles

const ChooseFeedComponent = ({ onCardPress, onSkipButtonPress }) => {
    return (
        <View style={[container, center]}>
            <Text style={[Fonts.style.largeBoldTitle, styles.title]}>{strings.chooseFeedComponent}</Text>
            <FlatList
                numColumns={2}
                data={cards}
                keyExtractor={(item, i) => `${i}`}
                renderItem={({ item }) => {
                    return <Card
                        onPress={onCardPress}
                        title={item.title}
                        titleStyle={[Fonts.style.bigBoldTitle, styles.cardTitle]}
                        cardStyle={styles.card}
                        containerStyle={styles.container}
                        imageSource={item.imageSource}
                    />
                }}
            />
            <TextButton
                onPress={onSkipButtonPress}
                style={styles.skipButton}
                textStyle={styles.skipText}
                text={strings.skip}
            />
        </View>
    )
}

ChooseFeedComponent.propTypes = {
    onCardPress: PropTypes.func.isRequired,
    onSkipButtonPress: PropTypes.func.isRequired
}

export default ChooseFeedComponent
