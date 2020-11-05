import * as React from 'react';

import styles from './../components/Styles';

import {Text, View} from '../components/Themed';
import DefaultPreference from 'react-native-default-preference';
import Constant from "../constants/Values";

interface SettingsObject {
    language: string;
    updated: boolean
}

const SettingsScreen = (props: any) => {
    const _settings = {} as SettingsObject;


    const [state, setState] = React.useState({settings: _settings})
    const [settings, setSettings] = React.useState(_settings);


    React.useEffect(() => {

        const initSettings = async () => {
            _settings.language = await DefaultPreference.get('language') || Constant.defaultLanguage;
            setState({settings: _settings});
        }
        initSettings().then(function(){
            console.log("settings loaded..")
        });
    }, [settings]);

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.title}>{state.settings.language}</Text>
            </View>
            <View style={styles.container}>
            </View>

        </View>
    );
}


export default SettingsScreen;
