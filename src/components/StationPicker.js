import React, { Component } from 'react';
import { View } from 'react-native';
import { Item, Picker } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { THEME_COLOR } from '@assets/colors';
import { stations } from '@shared/consts';

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
                        textStyle={{ fontSize: 17, color: '#fff' }}
                        placeholder={'Choose a station'}
                        placeholderStyle={{ fontSize: 17, color: '#fff', }}
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