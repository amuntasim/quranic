import DefaultPreference from 'react-native-default-preference';
import Constant from "../constants/Values";

async function languagePref() {
    const language = await DefaultPreference.get('language') || Constant.defaultLanguage;
    return language;
}

export default {
    languagePref
}
