import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome as Icon } from '@expo/vector-icons'

export const SearchBar = ({ containerStyle, inputContainerStyle, buttonContainerStyle, inputStyle, buttonStyle, placeholder, iconName, iconSize, onChangeText }) => (
    <View style={containerStyle}>
        <View style={inputContainerStyle}>
            <TextInput
                style={inputStyle}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
        <View style={buttonContainerStyle}>
            <TouchableOpacity style={buttonStyle}>
                <Icon name={iconName} size={iconSize} />
            </TouchableOpacity>
        </View>
    </View>
)

export default SearchBar;