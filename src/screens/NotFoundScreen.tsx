import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Styles from '../components/Styles';
import {RootStackParamList} from '../types';

export default function NotFoundScreen({
                                           navigation,
                                       }: StackScreenProps<RootStackParamList, 'NotFound'>) {
    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>This screen doesn't exist.</Text>
            <TouchableOpacity onPress={() => navigation.replace('Root')} style={Styles.link}>
                <Text style={Styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
}


