import * as RNFS from 'react-native-fs';

import {Platform} from 'react-native';
import PreferenceManager from './PreferenceManager';


async function baseChapters(opts: any) {
    const rootPath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;
    const chaptersPath = opts.path ? opts.path : await _baseChapterspath();
    console.log('rootPath')
    console.log(rootPath)
    const dirs = await RNFS.readDir(rootPath);
    console.log(dirs);
    return dirs;
}

async function _baseChapterspath() {
    const language = await PreferenceManager.languagePref();
    return `/data/chapters/${language}`;
}

export default  {
    baseChapters: baseChapters,
};

