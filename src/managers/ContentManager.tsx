import * as RNFS from 'react-native-fs';
import { unzip} from 'react-native-zip-archive'

const chapterPath = 'chapters/';
const fileBaseUrl = 'http://quranic.ishkul.com/files/'

async function lookup(lessonSource: string) {
    const lessonPath = chapterPath + lessonSource;
    console.log('lessonPath', lessonPath)
    RNFS.exists(lessonPath).then( (exists) => {
            if (exists) {
                console.log(lessonSource + " EXISTS");
            } else {
                console.log(lessonSource + " DOES NOT EXIST, loading..");
                const tmpFileName = `${RNFS.TemporaryDirectoryPath}/${Date.now()}.zip`;
                RNFS.downloadFile({
                    fromUrl: `${fileBaseUrl}${lessonSource}.zip`,
                    toFile: tmpFileName,
                }).promise.then((r) => {
                    const charset = 'UTF-8';
                    const targetPath = `${RNFS.DocumentDirectoryPath}/${lessonPath}`;
                    console.log(lessonSource + " downloaded, extracting...");

                    unzip(tmpFileName, targetPath, charset)
                        .then((path) => {
                            console.log(`unzip completed at ${path}`)
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                });
            }
        });
}

export default {
    lookup
};

