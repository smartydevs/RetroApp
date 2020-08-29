import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Row, ProfilePicture, Button } from '../../../../components'
import { normalizeHeight, normalizeWidth } from '../../../../themes/Metrics'
import { ApplicationStyles, Fonts, Colors } from '../../../../themes'
import styles from './styles'

const { center, shadow } = ApplicationStyles
const { smallCaption, caption, button } = Fonts.style

const Question = ({ _id, author = {}, text = '', onDeleteQuestion, personalUserId }) => {
  const { _id: userId, profile } = author
  const { firstName, lastName, avatar } = profile || {}
  const { fullPath } = avatar || {}

  return (
    <Row style={[styles.container, styles.lightGrayContainer, shadow]}>
      <View style={center}>
        <ProfilePicture
          firstName={firstName}
          lastName={lastName}
          imageSource={fullPath}
          style={styles.profilePicture}
        />
        <View
          style={[
            center,
            { marginTop: normalizeHeight(10), maxWidth: normalizeWidth(60) },
          ]}
        >
          <Text style={smallCaption}>{firstName}</Text>
          <Text style={[smallCaption, { marginTop: normalizeHeight(5) }]}>
            {lastName}
          </Text>
        </View>
      </View>

      <View style={[styles.content]}>
        <Row style={styles.titleContainer}>
          {personalUserId === userId ? (
            <Row>
              <Button
                style={{ marginRight: normalizeWidth(15) }}
                onPress={() => onDeleteQuestion(_id)}
              >
                <Ionicons
                  name="md-remove-circle"
                  size={20}
                  style={{ color: Colors.primaryPink }}
                />
              </Button>
            </Row>
          ) : null}
        </Row>

        <Text style={[styles.description, caption]}>{text}</Text>
      </View>
    </Row>
  )
}

export default Question
