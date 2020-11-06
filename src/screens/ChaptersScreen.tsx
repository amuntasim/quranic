import * as React from 'react';
import Styles from '../components/Styles';

import {Text,  View, RowViewText} from '../components/Themed';
import {SafeAreaView, ScrollView} from "react-native";
import ChaptersManager from '../managers/ChaptersManager';

export default function ChaptersScreen() {
    const [state, setState] = React.useState({})
    const [chapters, setChapters] = React.useState([]);
    React.useEffect(() => {
        ChaptersManager.baseChapters({}).then(function (_chapters:any){
            setState({chapters: _chapters});
            console.log('_chapters >>>');
            console.log(_chapters);
        })
        // const initSettings = async () => {
        //     _settings.language = await DefaultPreference.get('language') || Constant.defaultLanguage;
        //     setState({settings: _settings});
        // }
        // initSettings().then(function(){
        //     console.log("settings loaded..")
        // });
    }, [chapters]);
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
                <RowViewText style={Styles.rowView}>....</RowViewText>
                <RowViewText style={Styles.rowView}>....</RowViewText>
                <RowViewText style={Styles.rowView}>....</RowViewText>
            <RowViewText style={Styles.rowView}>Scroll me plz</RowViewText>
        </ScrollView>
        </SafeAreaView>
    );
}

