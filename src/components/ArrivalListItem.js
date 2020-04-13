import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Divider from '@components/Divider';
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles';


const ArrivalListItem = ({ line, direction, destination, waitingTime }) => {
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

    return (
        <View>
            <TouchableOpacity style={{ paddingVertical: 12, flexDirection: 'row', alignItems: 'center' }}>
                <View style={badgeStyle}>
                    <Text style={[styles.bodyText, { color: '#fff', fontWeight: '500' }]}>{direction}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 14 }}>
                    <Text style={styles.pillText}>{`To ${destination}`}</Text>
                    <Text style={[styles.buttonBlockText, { color: '#000' }]}>{waitingTime}</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={22} color="#B6BAC1" />
            </TouchableOpacity>
            <Divider />
        </View>
    )
};

export default ArrivalListItem;
