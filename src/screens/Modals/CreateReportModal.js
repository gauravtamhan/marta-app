import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import {
    Container, Content, Textarea, Picker
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import styles from '@assets/styles';
import Divider from '@components/Divider';
import Button from '@components/Button';
import { THEME_COLOR } from '@assets/colors';
import { quickIncidentCategories, otherIncidentCategories } from '@shared/consts';
import { postIncident } from '@store/actions'

class CreateReportModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: undefined,
            selectedCategoryOther: undefined,
            description: undefined,
        }
    }

    handleCategoryPress = (item) => {
        this.setState({
            selectedCategory: item,
            selectedCategoryOther: undefined,
        })
    }

    handleOtherCategoryPress = (value) => {
        this.setState({
            selectedCategoryOther: value,
            selectedCategory: undefined,
        })
    }

    handleSubmitPress = () => {
        const { navigation, selectedStation, postIncident } = this.props;
        const { selectedCategory, selectedCategoryOther, description } = this.state;

        const category = selectedCategory || selectedCategoryOther;

        postIncident(selectedStation, { category, description, })

        navigation.goBack();
    }

    render() {
        const { selectedCategory, selectedCategoryOther, description } = this.state;

        return (
            <Container style={{ flex: 1 }}>
                <Content contentContainerStyle={[styles.contentPadding, { flex: 1 }]}>
                    <View style={{ flex: 5 }}>
                        <View style={styles.section}>
                            <Text style={styles.headerText}>Select a category to report</Text>
                            <View style={styles.pillContainer}>
                                {quickIncidentCategories.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={[styles.pill, selectedCategory === item ? styles.pillActive : null]}
                                            onPress={() => this.handleCategoryPress(item)}
                                        >
                                            <Text style={[styles.pillText, selectedCategory === item ? styles.pillTextActive: null]}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                                <Picker
                                    iosIcon={<Ionicons name="ios-arrow-dropright" color={selectedCategoryOther ? '#fff' : '#000'} />}
                                    mode="dropdown"
                                    style={[styles.pill, selectedCategoryOther && styles.pillActive, { paddingLeft: 0, height: 40 }]}
                                    headerBackButtonText={'Close'}
                                    textStyle={[styles.pillText, styles.pillTextActive]}
                                    placeholder={'Other'}
                                    placeholderStyle={styles.pillText}
                                    headerBackButtonTextStyle={{ color: THEME_COLOR }}
                                    selectedValue={selectedCategoryOther}
                                    onValueChange={this.handleOtherCategoryPress}
                                >
                                    {otherIncidentCategories.map((x, i) =>
                                        <Picker.Item key={i} label={x} value={x} />
                                    )}
                                </Picker>
                            </View>
                        </View>
                        <Divider />
                        <View style={styles.section}>
                            <Text style={styles.headerText}>More details</Text>
                            <Textarea
                                style={{ marginTop: 18, borderRadius: 6 }}
                                rowSpan={5}
                                bordered
                                placeholder="Describe what happened"
                                onChangeText={(value) => this.setState({ description: value })}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Button
                            onPress={this.handleSubmitPress}
                            title="Submit"
                            disabled={!(selectedCategory || selectedCategoryOther) || !description}
                        />
                    </View>
                </Content>

            </Container>
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
        postIncident: (station, postContent) => {
            dispatch(postIncident(station, postContent));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReportModal);