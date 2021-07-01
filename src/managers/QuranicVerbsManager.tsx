import * as RNFS from 'react-native-fs';

const baseVerbsPath = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`

async function getVerbs(opts: any) {
    try {
        return JSON.parse(await RNFS.readFile(baseVerbsPath));
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

