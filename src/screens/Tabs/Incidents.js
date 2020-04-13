import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Container } from 'native-base'
import styles from '@assets/styles'
import StationPicker from '@components/StationPicker';
import Divider from '@components/Divider';
import Branding from '@components/Branding';
import IncidentCard from '@components/IncidentCard';
import { fetchIncidentList } from '@store/actions'

class Incidents extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const { navigation, fetchIncidentList, selectedStation } = this.props;

        navigation.setOptions({
            headerTitle: () => <Branding />
        })

        fetchIncidentList(selectedStation);
    }

    componentDidUpdate(prevProps) {
        const { selectedStation, fetchIncidentList } = this.props;

        if (prevProps.selectedStation !== selectedStation) {
            fetchIncidentList(selectedStation);
        }
    }

    renderItem({ item, index }) {
        return (
            <IncidentCard key={index} item={item} />
        )
    }

    render() {
        const { isFetchingIncidentList, incidentList } = this.props;

        return (
            <Container style={{ flex: 1 }}>
                <StationPicker />
                {isFetchingIncidentList ? (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" />
                    </View>
                ) : (
                    <FlatList
                        data={incidentList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => item.category + index}
                        renderItem={this.renderItem.bind(this)}
                        ItemSeparatorComponent={() => <Divider />}
                        ListFooterComponent={(incidentList.length > 0 && <Divider />)}
                        ListEmptyComponent={(
                            <View style={{ flex: 1, height: 220, paddingHorizontal: 60, alignItems: 'center', justifyContent: 'flex-end' }}>
                                <Text style={styles.emptyListHeaderText}>
                                    No Incidents
                        </Text>
                                <Text
                                    style={styles.emptyListContentText}>
                                    To report an incident, tap the button in the top right corner.
                        </Text>
                            </View>
                        )}
                        // refreshing={this.state.refreshing}
                        // onRefresh={this.handleRefresh}
                    />
                )}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedStation: state.reducer.selectedStation,
        incidentList: state.reducer.incidentList,
        isFetchingIncidentList: state.reducer.isFetchingIncidentList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIncidentList: (station) => {
            dispatch(fetchIncidentList(station));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Incidents);