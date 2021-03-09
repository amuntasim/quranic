import DefaultPreference from 'react-native-default-preference';
import Constant from "../constants/Values";

async function languagePref() {
    return (await DefaultPreference.get('language') || Constant.defaultLanguage);
}

async function lessonsSource() {
    return (await DefaultPreference.get('lessonsSource') || Constant.defaultLessonsSource);
}

async function setLanguagePref(language: string) {
    await DefaultPreference.set('language', language)
}
async function setLessonsSourcesPref(lessonsSource: string) {
    await DefaultPreference.set('lessonsSource', lessonsSource)
}


export default {
    languagePref,
    lessonsSource,
    setLanguagePref,
    setLessonsSourcesPref
}
