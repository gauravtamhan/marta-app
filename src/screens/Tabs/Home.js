import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import styles from '@assets/styles'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const { navigation } = this.props;

        navigation.setOptions({
            headerTitle: () => (<Image style={styles.brandImage} source={require('@assets/images/brand.png')} />)
        })
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
        )
    }

}