import * as React from 'react';

import styles from './../components/Styles';

import DefaultPreference from 'react-native-default-preference';
import {RefreshControl, Platform, Switch} from 'react-native';
import {SettingsScreen,  SettingsData} from "react-native-settings-screen"

import {Text, View} from '../components/Themed';
import Constant from "../constants/Values";

interface SettingsObject {
    language: string;
    updated: boolean
}

const SettingsScreenContainer = () => {
    const _settings = {} as SettingsObject;
    let settingsData: SettingsData = [];
    const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif'


    const [state, setState] = React.useState({settings: _settings, settingsData: settingsData})
    const [refreshing, setRefreshing] = React.useState(false);
    const [settings, setSettings] = React.useState(_settings);


    React.useEffect(() => {

        const initSettings = async () => {
            _settings.language = await DefaultPreference.get('language') || Constant.defaultLanguage;

            settingsData = [
                {
                    type: 'SECTION',
                    header: 'My Section'.toUpperCase(),
                    footer:
                        'Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
                    rows: [
                        {
                            title: 'A row',
                            showDisclosureIndicator: true,
                        },
                        { title: 'A non-tappable row' },
                        {
                            title: 'This row has a',
                            subtitle: 'Subtitle',
                            showDisclosureIndicator: true,
                        },
                        {
                            title: 'Long title. So long long long long long long long',
                            subtitle:
                                'And so is the subtitle. Even longer longer longer longer longer',
                        },
                        {
                            title: 'Switch',
                            renderAccessory: () => <Switch value onValueChange={() => {}} />,
                        },
                        {
                            title: 'Text',
                            renderAccessory: () => (
                                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                                    Maybe
                                </Text>
                            ),
                        },
                        {
                            title: 'Custom view',
                            renderAccessory: () => (
                                <View
                                    style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: 'blue',
                                    }}
                                />
                            ),
                            showDisclosureIndicator: true,
                        },
                    ],
                },
                {
                    type: 'SECTION',
                    header: 'My Other Section'.toUpperCase(),
                    rows: [
                        {
                            title: 'Dolor Nullam',
                            showDisclosureIndicator: true,
                        },
                        {
                            title: 'Nulla vitae elit libero',
                            renderAccessory: () => (
                                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                                    Dapibus
                                </Text>
                            ),
                        },
                        {
                            title: 'Ipsum Lorem Venenatis',
                            subtitle: 'Vestibulum Inceptos Fusce Justo',
                            renderAccessory: () => (
                                <Text style={{ color: '#999', marginRight: 6, fontSize: 18 }}>
                                    Yes
                                </Text>
                            ),
                            showDisclosureIndicator: true,
                        },
                        {
                            title: 'Cras Euismod',
                            renderAccessory: () => (
                                <Text>Some icon</Text>
                            ),
                            showDisclosureIndicator: true,
                        },
                    ],
                },
                {
                    type: 'SECTION',
                    header: 'My Third Section'.toUpperCase(),
                    rows: [
                        {
                            title: 'Different title style',
                            showDisclosureIndicator: true,
                            titleStyle: {
                                color: 'red',
                            },
                        },
                    ],
                },
                {
                    type: 'CUSTOM_VIEW',
                    render: () => (
                        <Text
                            style={{
                                alignSelf: 'center',
                                fontSize: 18,
                                color: '#999',
                                marginBottom: 40,
                                marginTop: -30,
                                fontFamily,
                            }}
                        >
                            v1.2.3
                        </Text>
                    ),
                },
            ]

            setState({settings: _settings, settingsData: settingsData});
        }
        initSettings().then(function(){
            console.log("settings loaded..")
        });
    }, [settings]);

    return (
        <View style={styles.container}>
            {state.settingsData ? (
                <SettingsScreen data={state.settingsData}
                    globalTextStyle={{fontFamily}}
                    scrollViewProps={{
                        refreshControl: (
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={() => {
                                    setRefreshing(true)
                                    setTimeout(() => setRefreshing(false), 3000)
                                }}
                            />
                        ),
                    }}
                />) : {}
            }
        </View>

    );
}


export default SettingsScreenContainer;
