import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import en from '../locales/en.json';
import bn from '../locales/bn.json';

import PreferenceManager from '../managers/PreferenceManager';

const i18n = new I18n({ en, bn });
i18n.locale = Localization.getLocales()[0].languageCode;

//
// const translation = new LocalizedStrings({
//     en: en,
//     bn: bn,
// });
//
// export const changeLanguage = (languageKey:any) => {
//     translation.setLanguage(languageKey)
// }
//
// PreferenceManager.languagePref().then(function(language:string){
//     changeLanguage(language);
// })

export default i18n;
