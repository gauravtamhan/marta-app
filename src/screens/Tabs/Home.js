import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {
    Container, Content, Button, Input, Form, Textarea, Picker
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles';
import { THEME_COLOR, DISABLED_BTN_COLOR, INACTIVE_COLOR } from '@assets/colors';
import StationPicker from '@components/StationPicker';
import Branding from '@components/Branding';
import Divider from '@components/Divider';
import ArrivalListItem from '@components/ArrivalListItem';
import { connect } from 'react-redux';
import { fetchRailSchedule } from '@store/actions'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRailSchedule: [],
        }
    }

    componentDidMount() {
        const { navigation, fetchRailSchedule } = this.props;

        navigation.setOptions({
            headerTitle: () => <Branding />
        })

        fetchRailSchedule();
    }

    componentDidUpdate(prevProps) {
        const { railSchedule, selectedStation } = this.props;

        if ((prevProps.railSchedule !== railSchedule) || (prevProps.selectedStation !== selectedStation)) {
            this.setState({
                currentRailSchedule: railSchedule.filter(item => (item['STATION']).includes(selectedStation.toUpperCase()))
            })
        }
    }

    render() {
        const { navigation } = this.props;
        const { currentRailSchedule } = this.state;

        return (
            <Container style={{ flex: 1 }}>
                <StationPicker />
                <Content contentContainerStyle={styles.contentPadding}>
                    <View style={{ height: 180, backgroundColor: DISABLED_BTN_COLOR, marginHorizontal: -16 }}></View>
                    <View>
                        <View style={styles.section}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text style={styles.headerText}>Station Arrivals</Text>
                                <Button icon transparent>
                                    <Ionicons name="ios-refresh" size={24} color={THEME_COLOR} />
                                </Button>
                            </View>
                            <View style={{ marginTop: 16 }}>
                                <Divider />
                                {currentRailSchedule.map(({LINE, DIRECTION, DESTINATION, WAITING_TIME}, i) => (
                                    <ArrivalListItem
                                        key={i}
                                        line={LINE}
                                        direction={DIRECTION}
                                        destination={DESTINATION}
                                        waitingTime={WAITING_TIME}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedStation: state.reducer.selectedStation,
        isFetchingRailSchedule: state.reducer.isFetchingRailSchedule,
        railSchedule: state.reducer.railSchedule,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRailSchedule: () => {
            dispatch(fetchRailSchedule());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

