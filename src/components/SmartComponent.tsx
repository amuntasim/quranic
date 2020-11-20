import {RowViewText, Text, View} from '../components/Themed';
import * as React from 'react';
import Styles from '../components/Styles';
import {Modal, TouchableOpacity} from "react-native";
import {Col, Row, Rows, Table, TableWrapper} from "react-native-table-component";

const Assessments = {
    "MuslimunChart": require('../components/assessments/MuslimunChart').default,
    "SunMoonLetter": require('../components/assessments/SunMoonLetter').default,
    "IdentifyIsm": require('../components/assessments/IdentifyIsm').default,
    "IdentifyIrab": require('../components/assessments/IdentifyIrab').default,
};

function tableData(data: any, index:number){
   const tableData =  data.content.map( (row:any) => row['row'])
    return (
        <Table key={index} borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={data.heading} style={Styles.tableHead} textStyle={Styles.tableText}/>
            <Rows data={tableData} textStyle={Styles.tableText}/>
        </Table>
    )
}
function _contentSegment(data: any, index: number) {
    let contents = data.contents.map(function (section: any, _index: number) {
        if(section.type === 'table'){
            return tableData(section, _index)
        }
        return <Text key={'segment-' + _index + _index} style={Styles.paragraph}>{section.content}</Text>;
    })

    return (
        <View key={'segment-' + index}>
            <Text style={Styles.title}> {data.title}</Text>
            <View>
                {contents}
            </View>
        </View>
    );
}

function _assessmentSection(data: any, index: number) {
    const [isVisible, setVisible] = React.useState(false);

    const startAssessment = () => {
        setVisible(true)
    }
    // @ts-ignore
    const Assessment = Assessments[data.assessmentName];
    return (
        <View key={'assessment-' + index}>
            <Text style={Styles.title}> {data.title}</Text>
            <View>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={isVisible}
                    supportedOrientations={['portrait', 'landscape']}
                    onRequestClose={() => {
                        console.log("Closed")
                    }}>

                    <Assessment data={data}/>

                    <Text style={Styles.closeText}
                          onPress={() => {
                              setVisible(false)
                          }}> Close </Text>
                </Modal>
                <Text style={Styles.title}> Assessment</Text>

                <TouchableOpacity
                    style={Styles.button}
                    onPress={startAssessment}>
                    <Text style={Styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export function ChapterDetailContent(props: any) {
    if (!props.content) {
        return (<View/>);
    }

    const data = JSON.parse(props.content);
    let contents = data.map(function (section: any, index: number) {
        // if (section['type'] == "blank") {
        //     return <View key={'segment-' + index} style={Styles.blankLine}></View>
        // }
        return _contentSegment(section, index);
    })

    return (
        <View>
            {contents}
        </View>
    );
}

export function ChapterAssessment(props: any) {
    if (!props.content) {
        return (<View/>);
    }

    const data = JSON.parse(props.content);
    let contents = data.map(function (section: any, index: number) {
        return _assessmentSection(section, index)
    })

    return (
        <View>
            {contents}
        </View>
    );
}

export function ChapterDetailIntro(props: any) {
    if (!props.data) {
        return (<View/>);
    }
    const data = JSON.parse(props.data);
    let contents = data.contents.map(function (section: any, index: number) {
        return <Text key={'intro-content-' + index} style={Styles.paragraph}> {section.content}</Text>;
    })

    return (
        <View>
            <View style={Styles.centeredView}>
                <Text style={Styles.title}> {data.title}</Text>
            </View>
            <View>
                {contents}
            </View>
        </View>
    );
}
