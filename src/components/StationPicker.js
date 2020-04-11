import React, { Component } from 'react';
import { View } from 'react-native';
import { Item, Picker } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { THEME_COLOR } from '@assets/colors';
import { stations } from '@shared/consts';
import styles from '@assets/styles'

const textStyle = {
    fontWeight: '600',
    color: '#fff',
}

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStation: stations[28],
        }
    }

    render() {
        return (
            <View style={{
                backgroundColor: '#231F20',
                height: 42,
                flexDirection: 'row',
            }}>
                <Item style={{ borderBottomWidth: 0 }}>
                    <Picker
                        iosIcon={<Ionicons name="ios-arrow-dropdown" color="#fff" />}
                        mode="dropdown"
                        style={{ width: 410, paddingRight: 16, }}
                        headerBackButtonText={'Close'}
                        textStyle={[styles.bodyText, textStyle]}
                        placeholder={'Choose a station'}
                        placeholderStyle={[styles.bodyText, textStyle]}
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
        )
    }
}