import * as FileSystem from 'expo-file-system';

import PreferenceManager from './PreferenceManager';

async function baseChapters(opts: any) {
    let tmp = await FileSystem.getInfoAsync(await _baseChapterspath());
    console.log(await FileSystem.readDirectoryAsync(`${FileSystem.documentDirectory}chapters`))
    if(tmp.exists){
        const chapters = await FileSystem.readDirectoryAsync(await _baseChapterspath());
        console.log(chapters)
        return chapters.sort();
    }
    return []
}

async function chapterDetail(opts: any) {
    const filePath = await _baseChapterspath() +'/'+ opts.path;
    const index = decodeURIComponent(await FileSystem.readAsStringAsync(filePath+'/index.json'));
    const sections = decodeURIComponent(await FileSystem.readAsStringAsync(filePath+'/sections.json'));
    let assessments = null
    try{
        assessments = decodeURIComponent(await FileSystem.readAsStringAsync(opts.path+'/assessments.json'));
    } catch(e){}
    return {index, sections, assessments};
}

async function _baseChapterspath() {
    const lessonsSource = await PreferenceManager.lessonsSource();
    console.log('lessonsSource', lessonsSource)
    return `${FileSystem.documentDirectory}chapters/${lessonsSource}/${lessonsSource}/chapters`;
}

export default {
    baseChapters,
    chapterDetail,
};

