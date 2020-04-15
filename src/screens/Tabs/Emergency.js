import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import { Container, Content } from 'native-base';
import styles from '@assets/styles';
import Button from '@components/Button';
import Branding from '@components/Branding';

const data = [
    {
        heading: 'Be Informed',
        body: 'Get to know the “ins and outs” of MARTA.',
    },
    {
        heading: 'Be Alert',
        body: 'If you hear, see, or smell something suspicious, trust your instinct and say something.',
    },
    {
        heading: 'Be Prepared',
        body: 'In case of emergency, the best defense is to be prepared.',
    },
];

export default class Emergency extends Component {
    componentDidMount() {
        const { navigation } = this.props;

        navigation.setOptions({
            headerTitle: () => <Branding />
        })
    }

    handleEmergencyPress = () => (
        Alert.alert("Dialing...", "")
    )

    render() {
        return (
            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={[styles.contentPadding, { flex: 1 }]}>
                    <View style={[styles.section, { alignItems: 'center', marginVertical: 14 }]}>
                        <Text style={[styles.stationTitleText, { color: '#000' }]}>Important Safety Tips</Text>
                    </View>
                    {data.map(({heading, body}) => (
                        <View key={heading} style={{ paddingVertical: 20, paddingLeft: 10 }}>
                            <Text style={[styles.headerText, { marginBottom: 4 }]}>{heading}</Text>
                            <Text style={styles.bodyText}>{body}</Text>
                        </View>
                    ))}
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Button
                            onPress={this.handleEmergencyPress}
                            title="Call MARTA Police"
                            color= "#CE242B"
                        />
                    </View>
                </Content>
            </Container>
        )
    }

}