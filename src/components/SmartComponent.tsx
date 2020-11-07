import {RowViewText, Text, View} from '../components/Themed';
import * as React from 'react';
import Styles from '../components/Styles';

export function ChapterDetailIntro(props: any) {
    if (!props.content) {
        return (<View/>);
    }
    const content = JSON.parse(props.content);
    let contents = content.intro.sections.map(function (section: any, index: number) {
        return <Text key={'intro-content-'+ index} style={Styles.paragraph}> {section.content}</Text>;
    })

    return (
        <View>
            <View style={Styles.centeredView}>
                <Text style={Styles.title}> {content.title}</Text>
            </View>
            <View>
                {contents}
            </View>
        </View>
    );
}

function contentSegment(data: any) {
    let contents = data.content.map(function (section: any, index: number) {
        return <Text key={'segment-'+ index} style={Styles.paragraph}> {section.body}</Text>;
    })

    return (
        <View>
            <Text style={Styles.title}> {data.title}</Text>
            <View>
                {contents}
            </View>
        </View>
    );
}

export function ChapterDetailContent(props: any) {
    if (!props.content) {
        return (<View/>);
    }
    const data = JSON.parse(props.content);
    let contents = data.map(function (section: any) {
        return contentSegment(section);
    })

    return (
        <View>
            {contents}
        </View>
    );
}
