import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

export default class CreateReportModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Modal screen</Text>
            </View>
        )
    }

}