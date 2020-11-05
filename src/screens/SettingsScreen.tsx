import * as React from 'react';

import styles from './../components/Styles';

import {Text, View} from '../components/Themed';
// import DefaultPreference from 'react-native-default-preference';

interface SettingsObject {
    language: string;
}
const SettingsScreen = () => {
    const [settings, setSettings] = React.useState(initSettings());

    function initSettings() {
        const _settings: SettingsObject = {language: 'en'}
        // DefaultPreference.set('my key', 'my value').then(function() {console.log('done')});
        return _settings;
    }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.title}>{settings.language}</Text>
            </View>
            <View style={styles.container}>
            </View>

        </View>
    );
}

export default SettingsScreen;
