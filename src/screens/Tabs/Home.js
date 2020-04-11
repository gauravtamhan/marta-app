import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import {
    Container, Content, Item, Input, Form, Textarea, Picker
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles'
import { THEME_COLOR } from '@assets/colors';
import { stations } from '@shared/consts';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStation: stations[28],
        }
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
            <Container style={{ flex: 1 }}>
                <View style={{
                    backgroundColor: '#231F20',
                    height: 42,
                    flexDirection: 'row',
                    // flex: 1,
                }}>
                    <Item style={{ borderBottomWidth: 0 }}>
                        <Picker
                            // note
                            iosIcon={<Ionicons name="ios-arrow-dropdown" color="#fff" />}
                            mode="dropdown"
                            style={{ width: 410,  paddingRight: 16, }}
                            headerBackButtonText={'Close'}
                            textStyle={{ fontSize: 17, color: '#fff' }}
                            placeholder={'Choose a station'}
                            placeholderStyle={{ fontSize: 17, color: '#fff',  }}
                            headerBackButtonTextStyle={{ color: THEME_COLOR }}
                            selectedValue={this.state.selectedStation}
                            onValueChange={(value) => this.setState({ selectedStation: value })}
                        >
                            {stations.map((x, i) =>
                                <Picker.Item key={i} label={x} value={x} />
                            )}
                        </Picker>
                    </Item>
                </View>
            </Container>
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //     <Text>Home screen</Text>
            //     <Button
            //         title="Go to Details"
            //         onPress={() => navigation.navigate('Details')}
            //     />
            // </View>
        )
    }

}