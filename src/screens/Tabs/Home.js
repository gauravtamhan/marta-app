import React, { Component, Fragment } from 'react';
import { Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Content, Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles';
import { THEME_COLOR } from '@assets/colors';
import StationPicker from '@components/StationPicker';
import Branding from '@components/Branding';
import Divider from '@components/Divider';
import BarChart from '@components/BarChart';
import ArrivalListItem from '@components/ArrivalListItem';
import { connect } from 'react-redux';
import { fetchRailSchedule } from '@store/actions'
import { stations } from '@shared/consts';
import images from '@assets/hero';

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
                currentRailSchedule: railSchedule.filter(item => {
                    let station = stations.find(obj => obj.label === selectedStation);
                    return item['STATION'] === station.value
                })
            })
        }
    }

    render() {
        const { navigation, isRefreshingRailSchedule, fetchRailSchedule, selectedStation } = this.props;
        const { currentRailSchedule } = this.state;

        return (
            <Container style={{ flex: 1 }}>
                <StationPicker />
                <Content contentContainerStyle={styles.contentPadding}>
                    <Image style={{ width: 500, height: 180, marginHorizontal: -16 }} resizeMode="center" source={images[selectedStation]} />
                    <View style={{ height: 80, marginTop: -80 }}>
                        <Text style={[styles.stationTitleText]}>{selectedStation}</Text>
                    </View>
                    <View style={styles.section}>
                        <View style={{ height: 45, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={styles.headerText}>Station Arrivals</Text>
                            {isRefreshingRailSchedule ? (
                                <ActivityIndicator />
                            ) : (
                                <Button icon transparent onPress={() => fetchRailSchedule()}>
                                    <Ionicons name="ios-refresh" size={24} color={THEME_COLOR} />
                                </Button>
                            )}

                        </View>
                        <View style={{ marginTop: 16 }}>
                            <Divider />
                            {currentRailSchedule.length > 0 ? (
                                currentRailSchedule.map(({ LINE, DIRECTION, DESTINATION, WAITING_TIME }, i) => (
                                    <ArrivalListItem
                                        key={i}
                                        line={LINE}
                                        direction={DIRECTION}
                                        destination={DESTINATION}
                                        waitingTime={WAITING_TIME}
                                    />
                                ))
                            ) : (
                                <Fragment>
                                    <View style={{ height: 150, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={[styles.emptyListContentText, { fontStyle: 'italic' }]}>Currently, no train arrivals</Text>
                                    </View>
                                    <Divider />
                                </Fragment>
                            )}
                        </View>
                    </View>
                    <View style={{ paddingTop: 20, paddingBottom: 72 }}>
                        <Text style={styles.headerText}>Popular Times</Text>
                        <BarChart />
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
        isRefreshingRailSchedule: state.reducer.isRefreshingRailSchedule,
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

