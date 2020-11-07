import * as React from 'react';
import Styles from '../components/Styles';

import {Text, View} from '../components/Themed';
import {Button, SafeAreaView, ScrollView} from 'react-native';
import ChaptersManager from "../managers/ChaptersManager";
import {ChapterDetailIntro, ChapterDetailContent} from "../components/SmartComponent";

interface StateObject {
    chapter: any
}

export default function ChapterDetailScreen(props: any) {
    const {navigation} = props;
    const chapterDetail = props.route.params

    const _state = {chapter: {}} as StateObject;

    const [state, setState] = React.useState(_state)
    const [chapter, setChapter] = React.useState([]);
    React.useEffect(() => {
        //TODO translate
        navigation.setOptions({ headerTitle: chapterDetail['chapterName'] })

        ChaptersManager.chapterDetail({path: chapterDetail['path']}).then(function (_chapter: any) {
            setState({chapter: _chapter});
        })
    }, [chapter]);
    return (
        <SafeAreaView style={Styles.basicContainer}>
            <ChapterDetailIntro content={state.chapter.index}/>
            <ChapterDetailContent content={state.chapter.sections}/>
        </SafeAreaView>
    );
}
