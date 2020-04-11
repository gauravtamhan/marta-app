import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { incidentStatus } from '@shared/consts';
import { THEME_COLOR } from '@assets/colors';
import styles from '@assets/styles'

const IncidentCard = ({ item }) => {
    const { category, description, timestamp, upvoteCount, status } = item;

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = `Reported on ${timestamp.toLocaleDateString('en-US', options)}`

    return (
        <View style={styles.contentPadding}>
            <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                <View style={{ flex: 1, }}>
                    <View style={{ width: 55, height: 55, backgroundColor: '#E4E4E5', borderRadius: 50 }} />
                </View>
                <View style={{ flex: 4 }}>
                    <Text style={styles.headerText}>{category}</Text>
                    <Text style={[styles.captionText, { marginTop: 2 }]}>{dateString}</Text>
                    <View style={{ paddingVertical: 12 }}>
                        <Text style={styles.bodyText}>{description}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 0, alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                    <Button icon transparent>
                        <Ionicons name="ios-arrow-up" size={26} color={THEME_COLOR} />
                    </Button>
                    <Text style={[styles.pillText, { marginLeft: 8, fontWeight: '600' }]}>{upvoteCount}</Text>
                </View>
                <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Text style={[styles.captionText, { fontStyle: 'italic' }]}>{incidentStatus[status]}</Text>
                </View>
            </View>
        </View>
    )
}

export default IncidentCard