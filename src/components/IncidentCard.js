import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { Button } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { incidentStatus } from '@shared/consts';
import { calculateDateTime } from '@shared/helpers';
import { THEME_COLOR, DISABLED_BTN_COLOR } from '@assets/colors';
import styles from '@assets/styles'
import { updateUpvoteCount } from '@store/actions'


class IncidentCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnDisabled: false,
        }
    }

    render() {
        const { item, selectedStation, updateUpvoteCount } = this.props;
        const { btnDisabled } = this.state;

        const { category, description, timestamp, upvoteCount, status, key } = item;
        const dateString = `Reported ${calculateDateTime(timestamp)}`

        return (
            <View style={styles.contentPadding}>
                <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                    <View style={{ flex: 1, }}>
                        <View style={{ width: 55, height: 55, backgroundColor: '#E4E4E5', borderRadius: 50 }} />
                    </View>
                    <View style={{ flex: 4 }}>
                        <Text style={styles.headerText}>{category}</Text>
                        <Text style={[styles.captionText, { marginTop: 2 }]}>{dateString}</Text>
                        <View style={{ paddingVertical: 12 }}>
                            <Text style={styles.bodyText}>{description}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 0, alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 8 }}>
                        <Button
                            icon
                            disabled={btnDisabled}
                            transparent
                            onPress={() => {
                                this.setState({
                                    btnDisabled: true
                                }, () => {
                                    updateUpvoteCount(selectedStation, key, upvoteCount + 1);
                                })
                            }}>
                            <Ionicons name="ios-arrow-up" size={26} color={btnDisabled ? DISABLED_BTN_COLOR : THEME_COLOR} />
                        </Button>
                        <Text style={[styles.pillText, { marginLeft: 8, fontWeight: '600' }]}>{upvoteCount}</Text>
                    </View>
                    <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <Text style={[styles.captionText, { fontStyle: 'italic' }]}>{incidentStatus[status]}</Text>
                    </View>
                </View>
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
        updateUpvoteCount: (station, key, value) => {
            dispatch(updateUpvoteCount(station, key, value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IncidentCard);