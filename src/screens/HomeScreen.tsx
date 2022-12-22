import * as React from 'react';
import Styles from '../components/Styles';

import {Text, View} from '../components/Themed';

export default function HomeScreen() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Home...</Text>
            <View style={Styles.view} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        </View>
    );
}
