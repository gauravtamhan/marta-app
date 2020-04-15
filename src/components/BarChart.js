import React, { Fragment } from 'react';
import { View, Text, } from 'react-native';
import styles from '@assets/styles';
import { getHour } from '@shared/helpers';

const height = 80;

const data = [
    height * 0,
    height * 0,
    height * 0.55,
    height * 0.66,
    height * 0.55,
    height * 0.4,
    height * 0.46,
    height * 0.3,
    height * 0.4,
    height * 0.44,
    height * 0.63,
    height * 0.78,
    height * 0.7,
    height * 0.5,
    height * 0.4,
    height * 0.25,
    height * 0.12,
    height * 0,
];

const scale = [
    '6a',
    '9a',
    '12p',
    '3p',
    '6p',
    '9p',
];

const Barchart = () => {
    return (
        <Fragment>
            <View style={{
                marginTop: 30,
                height: height,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderTopColor: '#EAEAEA',
                borderBottomColor: '#979797',
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
                {data.map((item, index) => {
                    const t = getHour();
                    const i = t > 5 ? t - 6 : null
                    return (
                        <View key={index} style={{ paddingHorizontal: 1, flex: 1 }}>
                            <View style={{ height: item, backgroundColor: i === index ? '#F892B9' : '#7BAAF7', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} />
                        </View>
                    )
                })}
            </View>
            <View style={{ flexDirection: 'row', }}>
                {scale.map((item, index) => {
                    return (
                        <View key={index} style={{ flex: 3, }}>
                            {index === 5 ? (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <View style={{ width: 1, height: 4, backgroundColor: '#979797', }} />
                                        <Text style={[styles.captionText, { color: '#5C5C5C', marginLeft: -5 }]}>{item}</Text>
                                    </View>
                                    <View>
                                        <View style={{ width: 1, height: 4, backgroundColor: '#979797', alignSelf: 'flex-end' }} />
                                        <Text style={[styles.captionText, { color: '#5C5C5C', marginRight: -5 }]}>12a</Text>
                                    </View>
                                </View>
                            ) : (
                                    <View>
                                        <View style={{ width: 1, height: 4, backgroundColor: '#979797', }} />
                                        <Text style={[styles.captionText, { color: '#5C5C5C', marginLeft: -5 }]}>{item}</Text>
                                    </View>
                                )}
                        </View>
                    )
                })}
            </View>
        </Fragment>
    )
}

export default Barchart