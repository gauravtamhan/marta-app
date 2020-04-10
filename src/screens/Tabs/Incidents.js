import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class Incidents extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Incidents screen</Text>
                {/* <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                /> */}
            </View>
        )
    }

}