import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import {
    Container, Content, Item, Input, Form, Textarea, Picker
} from 'native-base'
import styles from '@assets/styles'
import StationPicker from '@components/StationPicker';
import Branding from '@components/Branding';

export default class Home extends Component {
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

    render() {
        const { navigation } = this.props;

        return (
            <Container style={{ flex: 1 }}>
                <StationPicker />
            </Container>
        )
    }

}