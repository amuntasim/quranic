import * as React from 'react';
import Styles from '../components/Styles';

import {Text, View, RowViewText} from '../components/Themed';
import {SafeAreaView, ScrollView} from "react-native";
import ChaptersManager from '../managers/ChaptersManager';

interface StateObject {
    chapters: any[]
}

export default function ChaptersScreen(props: any) {
    const {navigation} = props;

    const _state = {chapters: []} as StateObject;

    const [state, setState] = React.useState(_state)
    const [chapters, setChapters] = React.useState([]);
    React.useEffect(() => {
        ChaptersManager.baseChapters({}).then(function (_chapters: any) {
            setState({chapters: _chapters});
        })
    }, [chapters]);


    let chapterLists = state.chapters.map(function (chapter) {
        return <RowViewText key={chapter.name} style={Styles.rowViewBox} onPress={() => navigation.navigate('ChapterDetailScreen', {chapterName: chapter.name, path: chapter.path})}>{chapter.name}</RowViewText>;
    })

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
                {chapterLists}
            </ScrollView>
        </SafeAreaView>
    );
}

