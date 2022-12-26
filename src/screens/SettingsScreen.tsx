import * as React from 'react';

import Styles from '../components/Styles';
import { ListItem } from '@rneui/themed'

import {Text, View} from '../components/Themed';
import PreferenceManager from '../managers/PreferenceManager';

import Constant from "../constants/Values";
import {
    ScrollView,
    SafeAreaView,
    Switch, TouchableOpacity
} from 'react-native';
import LanguageSettings from "../components/LanguageSettings";
import LessonsSettings from "../components/LessonsSettings";
import i18n from '../services/translation';
import ContentManager from '../managers/ContentManager';

const wait = (timeout: any) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}

interface SettingsObject {
    language: string;
    lessonsSource: string;
    updatedAt: number
}

const SettingsScreen = (props: any) => {
    const _settings = {} as SettingsObject;

    const [state, setState] = React.useState({settings: _settings})
    const [settings, setSettings] = React.useState(_settings);
    const [isVisibleLanguageSettings, setLanguageSettingsVisibility] = React.useState(false);
    const [isVisibleLessonSettings, setLessonSettingsVisibility] = React.useState(false);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, []);

    const languageSelected = (language: string) => {
        if (language != i18n.locale) {
            PreferenceManager.setLanguagePref(language).then(() => {
                i18n.locale = language;
                console.log(`Language changed to ${language}`)
                settings.language = language;
                settings.updatedAt = Date.now();
                setSettings(settings);
                props.languageChanged(language)
            })
        }
    }
    const lessonSourceSelected = (lessonsSource: string) => {
        if (lessonsSource != settings.lessonsSource) {
            PreferenceManager.setLessonsSourcesPref(lessonsSource).then(() => {
                console.log(`Lesson sources changed to ${lessonsSource}`)
                settings.lessonsSource = lessonsSource;
                settings.updatedAt = Date.now();
                setSettings(settings);
                ContentManager.chaptersLookup(lessonsSource, false).then((res) => {
                    console.log('lookup completed')
                })
                props.lessonsSourceChanged(lessonsSource)

            })
        }
    }

    const downloadLessons = async () => {
        const lessonsSource = await PreferenceManager.lessonsSource();
        await ContentManager.chaptersLookup(lessonsSource, true)
    }

    React.useEffect(() => {

        const initSettings = async () => {
            _settings.language = await PreferenceManager.languagePref();
            _settings.lessonsSource = await PreferenceManager.lessonsSource();
            setState({settings: _settings});
        }
        initSettings().then(function () {
            // console.log("settings loaded..")
            // console.log("settings", settings)
        });
    }, [settings]);

    return (
        <SafeAreaView style={Styles.basicContainer}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
                <LanguageSettings visibility={isVisibleLanguageSettings}
                                  setVisibility={setLanguageSettingsVisibility}
                                  pageTitle={i18n.t('language')}
                                  languageMap={i18n.t('languages')}
                                  currentLocal={i18n.locale}
                                  languageSelected={languageSelected}
                />

                <ListItem key="pref-lang" bottomDivider onPress={() => setLanguageSettingsVisibility(true)}>
                    <ListItem.Content>
                        <ListItem.Title>Language</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content right>
                        <ListItem.Title>{i18n.t(`languages.${settings.language}`)}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
                <LessonsSettings visibility={isVisibleLessonSettings}
                                 setVisibility={setLessonSettingsVisibility}
                                 pageTitle={i18n.t('lessonsSource')}
                                 sourcesMap={i18n.t('lessonsSources')}
                                 currentSource={settings.lessonsSource}
                                 lessonSourceSelected={lessonSourceSelected}
                />

                <ListItem key="lesson-download" bottomDivider onPress={() => setLessonSettingsVisibility(true)}>
                    <ListItem.Content>
                        <ListItem.Title>{i18n.t('lessonsSource')}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Content right>
                        <ListItem.Title
                            style={{width: 200}}>{i18n.t(`lessonsSources.${settings.lessonsSource}`)}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>

                <ListItem key="re-download" bottomDivider onPress={() => downloadLessons()}>
                    <ListItem.Content>
                        <ListItem.Title>{i18n.t('re-download-lesson')}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </ScrollView>
        </SafeAreaView>
    );
}


export default SettingsScreen;
