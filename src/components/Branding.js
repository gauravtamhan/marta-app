import React from 'react';
import { Image } from 'react-native';
import styles from '@assets/styles'

const Branding = () => {
    return (<Image style={styles.brandImage} source={require('@assets/images/branding.png')} />)
}

export default Branding