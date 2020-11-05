import * as React from 'react';
import {StyleSheet} from 'react-native';

import {Text, ScrollView, View, RowViewText} from '../components/Themed';

export default function ChaptersScreen() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <RowViewText style={styles.chapterTitle}>Scroll me plz</RowViewText>
                <RowViewText style={styles.chapterTitle}>Scroll me plz...</RowViewText>
                <RowViewText style={styles.chapterTitle}>Scroll me plz</RowViewText>
                <RowViewText style={styles.chapterTitle}>Scroll me plz</RowViewText>
                <RowViewText style={styles.chapterTitle}>Scroll me plz</RowViewText>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    chapterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
