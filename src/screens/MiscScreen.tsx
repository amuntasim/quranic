import * as React from 'react';
import Styles from '../components/Styles';
import {Ionicons, MaterialIcons} from '@expo/vector-icons';

import {Text, View} from '../components/Themed';

export default function ChaptersScreen(props: any) {
    const {navigation} = props;

    return (
        <View style={Styles.basicContainer}>
            <View style={Styles.tableWrapper}>
                <View style={Styles.miscItem}>
                    <MaterialIcons name={'assessment'} size={30} style={Styles.greenColor}
                                   onPress={() => navigation.navigate('AssessmentListScreen', {})}
                    />
                    <Text style={Styles.miscItemText}>Assessment</Text>
                </View>
                <View style={[Styles.miscItem, Styles.leftMargin]}>
                    <MaterialIcons name={'event-note'} size={30} style={Styles.greenColor}/>
                    <Text style={Styles.miscItemText}>Words</Text>
                </View>
            </View>
            <View style={Styles.tableWrapper}>
                <View style={Styles.miscItem}>
                    <MaterialIcons name={'flip-to-front'} size={30} style={Styles.greenColor}/>
                    <Text style={Styles.miscItemText}>Conjugation</Text>
                </View>
                <View style={[Styles.miscItem, Styles.leftMargin]}>
                    <MaterialIcons name={'pages'} size={30} style={Styles.greenColor}/>
                    <Text style={Styles.miscItemText}>Others</Text>
                </View>
            </View>
        </View>

    );
}
