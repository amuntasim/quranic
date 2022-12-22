import * as FileSystem from 'expo-file-system';
import { unzip} from 'react-native-zip-archive'
import Constant from "../constants/Values";

const chapterPath = 'chapters/';

async function chaptersLookup(lessonSource: string) {
    const lessonPath = chapterPath + lessonSource;
    const targetPath = `${FileSystem.documentDirectory}${lessonPath}`;

    console.log('lessonPath', lessonPath)
    FileSystem.getInfoAsync(targetPath).then( (status:any) => {
        if (status.exists) {
            console.log(lessonSource + " EXISTS");
        } else {
            console.log(lessonSource + " DOES NOT EXIST, loading..");
            const tmpFileName = `${FileSystem.cacheDirectory}${Date.now()}.zip`;
            FileSystem.downloadAsync(`${Constant.fileBaseUrl}${lessonSource}.zip`,
                tmpFileName,
            ).then((downloadedFile) => {
                const charset = 'UTF-8';
                console.log(lessonSource + " downloaded, extracting...");
                console.log(tmpFileName)
                unzip(downloadedFile.uri, targetPath, charset)
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
    chaptersLookup
};

