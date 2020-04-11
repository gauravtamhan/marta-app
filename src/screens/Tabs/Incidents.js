import React, { Component } from 'react';
import {  Text, View, FlatList } from 'react-native';
import { Container } from 'native-base'
import styles from '@assets/styles'
import StationPicker from '@components/StationPicker';
import Divider from '@components/Divider';
import Branding from '@components/Branding';
import IncidentCard from '@components/IncidentCard';

const data = [
    {
        category: 'Panhandle/Homeless',
        description: 'Individual located at the bottom of the northbound escalator.',
        timestamp: new Date("2019-01-30"),
        upvoteCount: 21,
        status: 1,
    },
    {
        category: 'Light Issue',
        description: 'Ceiling light out on north end of the platform.',
        timestamp: new Date("2020-02-18"),
        upvoteCount: 46,
        status: 0,
    },
    {
        category: 'Sign Outage',
        description: 'Upcoming train display board showing blue screen.',
        timestamp: new Date("2020-04-08"),
        upvoteCount: 39,
        status: 2,
    },
];

export default class Incidents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const { navigation } = this.props;

        navigation.setOptions({
            headerTitle: () => <Branding />
        })
    }

    renderItem({ item, index }) {
        return (
            <IncidentCard key={index} item={item} />
        )
    }

    render() {
        return (
            <Container style={{ flex: 1 }}>
                <StationPicker />
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => item.category + index}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={() => <Divider />}
                    ListFooterComponent={(data.length > 0 && <Divider />)}
                    ListEmptyComponent={(
                        <View style={{ flex: 1, height: 220, paddingHorizontal: 60, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Text style={styles.emptyListHeaderText}>
                                No Incidents
                            </Text>
                            <Text
                                style={styles.emptyListContentText}>
                                To report an incident, tap the button in the top right corner.
                            </Text>
                        </View>
                    )}
                    // refreshing={this.state.refreshing}
                    // onRefresh={this.handleRefresh}
                />
            </Container>
        )
    }

}