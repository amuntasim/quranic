import * as FileSystem from 'expo-file-system';

const baseAssessmentPath = `${FileSystem.documentDirectory}assessments`

async function getAssessments(opts: any) {
    try {
        const assessments = await FileSystem.readDirectoryAsync(baseAssessmentPath);
        return assessments.sort();
    } catch (e) {
        return []
    }

}

async function assessmentDetail(name: string) {
    let assessmentContent = null
    try {
        assessmentContent = JSON.parse(decodeURIComponent(await FileSystem.readAsStringAsync(baseAssessmentPath + '/' + name + '/assessment.json')));
    } catch (e) {
    }
    return assessmentContent;
}

export default {
    getAssessments,
    assessmentDetail,
};

