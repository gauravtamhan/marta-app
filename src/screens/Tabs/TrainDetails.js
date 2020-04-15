import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import styles from '@assets/styles';
import ArrivalListItem from '@components/ArrivalListItem';

const data = [ 1, 1, 3, 2, 2, 3, 2, 1 ];

const colors = {
    1: '#ABCBFF',
    2: '#4A8DFA',
    3: '#00308F',
}

const copy = {
    1: 'Not Crowded',
    2: 'Somewhat Crowded',
    3: 'Heavily Crowded',
}


export default class TrainDetails extends Component {
    componentDidMount() {
        const { navigation, route } = this.props;

        navigation.setOptions({
            title: route.params.selectedStation,
        })
    }


    render() {
        const {
            route: {
                params: {
                    item: {
                        LINE,
                        DIRECTION,
                        DESTINATION,
                        WAITING_TIME
                    }
                }
            }
        } = this.props;

        return (
            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={styles.contentPadding}>
                    <ArrivalListItem
                        line={LINE}
                        direction={DIRECTION}
                        destination={DESTINATION}
                        waitingTime={WAITING_TIME}
                    />
                    <View style={styles.section}>
                        <Text style={styles.headerText}>Train Crowdedness</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 40 }}>

                            {/* first col */}
                            <View style={{ flex: 2, flexDirection: 'row' }}>

                                {/* number scale */}
                                <View style={{ flex: 1, paddingVertical: 25, }}>
                                    <View style={{ height: 25, marginTop: -25, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
                                        <Text style={[styles.captionText, { color: '#5C5C5C', marginRight: 5, marginTop: -7 }]}>Front of train</Text>
                                        <View style={{ height: 1, width: 12, backgroundColor: '#979797' }} />
                                    </View>
                                    {data.map((item, index) => {
                                        return (
                                            <View key={index} style={{ height: 144, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                                                <Text style={[styles.captionText, { color: '#5C5C5C', marginRight: 5 }]}>{index + 1}</Text>
                                                <View style={{ height: 1, width: 12, backgroundColor: '#979797' }} />
                                            </View>
                                        )
                                    })}
                                    <View style={{ height: 25, marginBottom: -25, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Text style={[styles.captionText, { color: '#5C5C5C', marginRight: 5, marginBottom: -7 }]}>Back of train</Text>
                                        <View style={{ height: 1, width: 12, backgroundColor: '#979797' }} />
                                    </View>
                                </View>

                                {/* Vertical axis */}
                                <View style={{ height: 144 * data.length + 25 * 2, width: 1, backgroundColor: '#979797', }}></View>
                            </View>

                            {/* middle col */}
                            <View style={{ flex: 1 }} />

                            {/* last col */}
                            <View style={{ flex: 4, paddingVertical: 25, }}>
                                {data.map((item, index) => {
                                    return (
                                        <View
                                            key={index}
                                            style={{
                                                height: 140,
                                                width: 80,
                                                borderRadius: 10,
                                                backgroundColor: colors[item],
                                                marginVertical: 2,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                            <Text style={[styles.pillText, { color: '#fff', textAlign: 'center'}]}>{copy[item]}</Text>
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }

}