import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import styles from '@assets/styles'

const Button = ({ title, disabled, onPress, color }) => (
    disabled ? (
        <View style={[styles.buttonBlock, styles.buttonBlockDisabled]}>
            <Text style={[styles.buttonBlockText, styles.buttonBlockTextDisabled]}>{title}</Text>
        </View>
    ) : (
        <TouchableOpacity
            style = { [styles.buttonBlock, color && { backgroundColor: color }] }
            onPress = { onPress }
        >
            <Text style = { styles.buttonBlockText }>{ title }</Text>
        </TouchableOpacity >
    )
)

export default Button