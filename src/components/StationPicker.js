import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Item, Picker } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { THEME_COLOR } from '@assets/colors';
import { stations } from '@shared/consts';
import { setStationSelection } from '@store/actions'
import styles from '@assets/styles'

const textStyle = {
    fontWeight: '600',
    color: '#fff',
}

class StationPicker extends Component {
    constructor(props) {
        super(props);
    }

    handleValueChange = (value) => {
        const { setStationSelection } = this.props;

        setStationSelection(value);
    }

    render() {
        const { selectedStation } = this.props;

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
                        selectedValue={selectedStation}
                        onValueChange={this.handleValueChange}
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

const mapStateToProps = (state) => {
    return {
        selectedStation: state.reducer.selectedStation,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setStationSelection: (station) => {
            dispatch(setStationSelection(station));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StationPicker);
