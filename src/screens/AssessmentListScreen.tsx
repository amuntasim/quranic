import * as React from 'react';
import Styles from '../components/Styles';

import {Text, View, RowViewText} from '../components/Themed';
import {Modal, SafeAreaView, ScrollView} from "react-native";
import AssessmentsManager from '../managers/AssessmentsManager';
import ChaptersManager from "../managers/ChaptersManager";

const Assessments = {
    "SunMoonLetter": require('../components/assessments/SunMoonLetter').default,
    "IdentifyIsm": require('../components/assessments/IdentifyIsm').default,
    "IdentifyIrab": require('../components/assessments/IdentifyIrab').default,
    "MuslimunChart": require('../components/assessments/MuslimunChart').default,
    "IsmLightness": require('../components/assessments/IsmLightness').default,
    "IdentifyGins": require('../components/assessments/IdentifyGins').default,
};

interface StateObject {
    assessments: any[]
}


export default function AssessmentListScreen(props: any) {
    const {navigation} = props;

    const _state = {assessments: []} as StateObject;
    const _assessmentDetail = {} as any;
    const [state, setState] = React.useState(_state)
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [assessmentDetail, setAssessmentDetail] = React.useState(_assessmentDetail);

    const [assessments, setAssessments] = React.useState([]);
    React.useEffect(() => {
        AssessmentsManager.getAssessments({}).then(function (_assessments: any) {
            setState({assessments: _assessments});
        })
    }, [assessments]);

    function openAssessment(assessment: string) {
        AssessmentsManager.assessmentDetail(assessment).then(function (assessmentDetail: any) {
            setAssessmentDetail(assessmentDetail);
            setModalVisible(true)
        })

    }

    const assessmentBody = function () {
        // @ts-ignore
        const Assessment = Assessments[assessmentDetail.assessmentName];
        return <Assessment data={assessmentDetail}/>
    }

    let assessmentLists = state.assessments.map(function (assessment) {
        return <RowViewText key={assessment.name} style={Styles.rowViewBox}
                            onPress={() => openAssessment(assessment.name)}>{assessment.name}</RowViewText>;
    })

    return (
        <SafeAreaView style={Styles.basicContainer}>
            <ScrollView contentContainerStyle={Styles.scrollView}>
                <Modal
                    // animationType={"slide"}
                    transparent={false}
                    visible={isModalVisible}
                    supportedOrientations={['portrait', 'landscape']}
                    onRequestClose={() => {
                    }}>

                    {assessmentBody()}
                    <Text style={Styles.closeText}
                          onPress={() => {
                              setModalVisible(false)
                          }}> Close </Text>
                </Modal>
                {assessmentLists}
            </ScrollView>
        </SafeAreaView>
    );
}

