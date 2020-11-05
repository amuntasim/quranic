import * as React from 'react';

import Styles from './../components/Styles';

import {Text, View} from '../components/Themed';
import DefaultPreference from 'react-native-default-preference';
import Constant from "../constants/Values";
import {
    ScrollView,
    SafeAreaView,
} from 'react-native';

const wait = (timeout: any) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

interface SettingsObject {
    language: string;
    updated: boolean
}

const SettingsScreen = (props: any) => {
    const _settings = {} as SettingsObject;


    const [state, setState] = React.useState({settings: _settings})
    const [settings, setSettings] = React.useState(_settings);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);


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
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>

            </ScrollView>
        </SafeAreaView>
        // <View style={styles.container}>
        //     <View style={styles.container}>
        //         <Text style={styles.title}>Settings</Text>
        //         <Text style={styles.title}>{state.settings.language}</Text>
        //     </View>
        //     <View style={styles.container}>
        //     </View>
        //
        // </View>
    );
}


export default SettingsScreen;
