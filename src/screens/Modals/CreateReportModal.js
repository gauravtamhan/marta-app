import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
    Container, Content, Textarea,
} from 'native-base';
import styles from '@assets/styles';
import Divider from '@components/Divider';
import Button from '@components/Button';

const reports = [
    'Vandalism/Graffiti',
    'Light Issue',
    'Sign Outtage',
    'Train Delayed/Stopped',
    'Panhandle/Homeless',
    'Nuisance Behavior',
]

export default class CreateReportModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: undefined,
            description: undefined,
        }
    }

    handleSubmitPress = () => {
        const { navigation } = this.props;

        console.log('wooo');
        navigation.goBack();
    }

    render() {
        const { selectedCategory, description } = this.state;
        console.log(description)
        return (
            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={[styles.contentPadding]}>
                    <View style={{ flex: 5 }}>
                        <View style={styles.section}>
                            <Text style={styles.headerText}>Select a category to report</Text>
                            <View style={styles.pillContainer}>
                                {reports.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={[styles.pill, selectedCategory === item ? styles.pillActive : null]}
                                            onPress={() => this.setState({ selectedCategory: item })}
                                        >
                                            <Text style={[styles.pillText, selectedCategory === item ? styles.pillTextActive: null]}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.section}>
                            <Text style={styles.headerText}>More details</Text>
                            <Textarea
                                style={{ marginTop: 18, borderRadius: 6 }}
                                rowSpan={5}
                                bordered
                                placeholder="Describe what happened"
                                onChangeText={(value) => this.setState({ description: value })}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Button
                            onPress={this.handleSubmitPress}
                            title="Submit"
                            disabled={(!selectedCategory || !description)}
                        />
                    </View>
                </Content>

            </Container>
        )
    }

}