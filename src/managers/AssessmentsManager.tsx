import * as RNFS from 'react-native-fs';

const baseAssessmentPath = 'assessments'
async function getAssessments(opts: any) {
    const assessments = await RNFS.readDirAssets(baseAssessmentPath);
    console.log(assessments)
    return assessments;
}

async function assessmentDetail(name: string) {
    let assessmentContent = null
    try{
        assessmentContent = JSON.parse(decodeURIComponent(await RNFS.readFileAssets(baseAssessmentPath + '/' +name+'/assessment.json')));
    } catch(e){}
    return assessmentContent;
}

export default {
    getAssessments,
    assessmentDetail,
};

