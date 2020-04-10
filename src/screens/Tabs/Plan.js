import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class Plan extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Plan screen</Text>
            </View>
        )
    }

}