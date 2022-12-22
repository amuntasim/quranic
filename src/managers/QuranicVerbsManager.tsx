import * as FileSystem from 'expo-file-system';

const baseVerbsPath = `${FileSystem.documentDirectory}/quranic-verbs.json`

async function getVerbs(opts: any) {
    try {
        return JSON.parse(await FileSystem.readAsStringAsync(baseVerbsPath));
    } catch (e) {
        return []
    }
}
async function sarfSageer(opts: any) {
    return "sarfSageer.."
}

export default {
    getVerbs,
    sarfSageer,
};

