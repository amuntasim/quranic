import * as RNFS from 'react-native-fs';

import {Platform} from 'react-native';
import PreferenceManager from './PreferenceManager';
import {readdir} from "react-native-fs";


async function baseChapters(opts: any) {
    // const rootPath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;
    const chapters = await RNFS.readdir(await _baseChapterspath());
    console.log(chapters)
    // const dirs = await RNFS.readDir(RNFS.DocumentDirectoryPath)
    // let assetsExist =    await RNFS.existsAssets('test2.txt')
    //    console.log(assetsExist, 'test2.txt')
    // assetsExist =    await RNFS.existsAssets('chapters/test.txt')
    //    console.log(assetsExist)

    // RNFS.readFileAssets('test2.txt').then((res) => {
    //     console.log('read file res: ', res);
    // })
    //
    // RNFS.readFileAssets('./chapters/test.txt').then((res) => {
    //     console.log('read file res: ', res);
    // })

    // RNFS.readFileAssets(chaptersPath+'test.txt').then((res) => {
    //     console.log('read file res: ', res);
    // })
    //
    // RNFS.downloadFile({
    //     fromUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
    //     toFile: `${RNFS.DocumentDirectoryPath}/react-native.png`,
    // }).promise.then((r) => {
    //     console.log("download complete")
    // });
    return chapters;
}

async function chapterDetail(opts: any) {
    const index = decodeURIComponent(await RNFS.readFileAssets(opts.path+'/index.json'));
    const sections = decodeURIComponent(await RNFS.readFileAssets(opts.path+'/sections.json'));
    let assessments = null
    try{
        // assessments = decodeURIComponent(await RNFS.readFileAssets(opts.path+'/assessments.json'));
    } catch(e){}
    return {index, sections, assessments};
}

async function _baseChapterspath() {
    // const language = await PreferenceManager.languagePref();
    const lessonsSource = await PreferenceManager.lessonsSource();
    console.log('lessonsSource', lessonsSource)
    return `${RNFS.DocumentDirectoryPath}/chapters/${lessonsSource}/${lessonsSource}`;
}

export default {
    baseChapters,
    chapterDetail,
};

