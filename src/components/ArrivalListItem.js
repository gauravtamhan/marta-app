import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Divider from '@components/Divider';
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles';


const ArrivalListItem = ({ line, direction, destination, waitingTime, onPress }) => {
    const colors = {
        RED: '#D1232C',
        GOLD: '#D5A929',
        BLUE: '#028bb3',
        GREEN: '#0f9e4b',
    };

    const size = 35;

    const badgeStyle = {
        width: size,
        height: size,
        backgroundColor: colors[line],
        justifyContent: 'center',
        alignItems: 'center',
    };

    const rowStyle = { paddingVertical: 12, flexDirection: 'row', alignItems: 'center' };

    const destinationText = destination || 'Destination not shown'

    const Content = (
        <Fragment>
            <View style={badgeStyle}>
                <Text style={[styles.bodyText, { color: '#fff', fontWeight: '500' }]}>{direction}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14 }}>
                <Text style={destination ? styles.pillText : [styles.captionText, { fontStyle: 'italic' }]}>{destinationText}</Text>
                <Text style={[styles.buttonBlockText, { color: '#000' }]}>{waitingTime}</Text>
            </View>
            {onPress && (
                <Ionicons name="ios-arrow-forward" size={22} color="#B6BAC1" />
            )}
        </Fragment>
    )

    return (
        <View>
            {onPress ? (
                <TouchableOpacity style={rowStyle} onPress={onPress}>
                    {Content}
                </TouchableOpacity>
            ) : (
                <View style={rowStyle}>
                    {Content}
                </View>
            )}

            <Divider />
        </View>
    )
};

export default ArrivalListItem;
