import * as React from 'react';
import Styles from '../components/Styles';

import {Text} from '../components/Themed';
import {Alert, FlatList, Modal, Picker, SafeAreaView, TextInput, View} from "react-native";
import QuranicVerbsManager from '../managers/QuranicVerbsManager';
import {Ionicons} from "@expo/vector-icons";
import * as RNFS from "react-native-fs";
import Constant from "../constants/Values";
import {ListItem} from "react-native-elements";

interface StateObject {
    verbs: any[],
    baseVerbs: any[]
}

const verbForms = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const verbFormPickers = verbForms.map((f) => <Picker.Item key={f} label={`(${f})`} value={f}/>)
export default function QuranicVerbsScreen(props: any) {
    const {navigation} = props;

    const _state = {verbs: [], baseVerbs: []} as StateObject;
    const _verbDetail = {} as any;
    const [state, setState] = React.useState(_state)
    const [isModalVisible, setModalVisible] = React.useState(false);
    const [selectedForm, setSelectedForm] = React.useState('');
    const [selectedMeaning, setSelectedMeaning] = React.useState('');
    const [selectedRoot, setSelectedRoot] = React.useState('');
    const [verbDetail, setVerbDetail] = React.useState(_verbDetail);

    const [verbs, setVerbs] = React.useState([]);
    const [baseVerbs, setBaseVerbs] = React.useState([]);
    const loadVerbs = () => {
        QuranicVerbsManager.getVerbs({}).then(function (_verbs: any) {
            setVerbs(_verbs);
            setBaseVerbs(_verbs);
        })
    }
    React.useEffect(() => {
        console.log('loadingVerbs')
        loadVerbs();
        setSelectedRoot('')
        setSelectedForm('')
        setSelectedMeaning('')
    }, []);

    // filter verbs
    React.useEffect(() => {
        console.log({selectedForm, selectedMeaning, selectedRoot})
        let tmpResult = baseVerbs;

        if(selectedForm)
            tmpResult = tmpResult.filter((obj:any) => obj.form === selectedForm);

        if(selectedMeaning)
            tmpResult = tmpResult.filter((obj:any) => obj.trans.en.indexOf(selectedMeaning) >= 0);

        if(selectedRoot){
            const _s = selectedRoot.split('').join(' ');
            tmpResult = tmpResult.filter((obj:any) => obj.root.indexOf(_s) >= 0);
        }

        setVerbs(tmpResult)

    }, [selectedForm, selectedMeaning, selectedRoot]);

    const updateVerbsAlert = () =>
        Alert.alert(
            "Update Verbs",
            "Do you want to update the verb contents?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {text: "OK", onPress: () => reloadVerbs()}
            ]
        );


    const reloadVerbs = async function () {
        const fileName = `${RNFS.DocumentDirectoryPath}/quranic-verbs.json`;
        RNFS.downloadFile({
            fromUrl: `${Constant.fileBaseUrl}quranic-verbs.json`,
            toFile: fileName,
        }).promise.then((r) => {
            loadVerbs();
        });
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                          onPress={async () => await updateVerbsAlert()}/>
            ),
        });
    }, [navigation]);

    function sarfSageer(assessment: string) {
        QuranicVerbsManager.sarfSageer(assessment).then(function (verbDetail: any) {
            setVerbDetail(verbDetail);
            setModalVisible(true)
        })

    }

    const modalBody = function () {
        if (verbDetail) {
            return verbDetail
        }
        return <></>;

    }

    const openVerbPopup = (verb: any) => {
        console.log('Opening popup..')
    }

    // @ts-ignore
    const renderItem = ({item}) => (
        <ListItem key="pref-lang" bottomDivider onPress={() => openVerbPopup(item)}>
            <ListItem.Content style={{}}>
                <ListItem.Title>
                    <Text>({item.root}) </Text>
                    <Text style={[Styles.textBold, Styles.arabicFontSize]}> {item.verb + ""}</Text>
                </ListItem.Title>
                <ListItem.Subtitle>
                    <Text>{item.trans.en}</Text>
                </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content right>
                <Text>({item.form})</Text>
                <Text># {item.freq}</Text>
            </ListItem.Content>
        </ListItem>
    );
    return (
        <SafeAreaView style={[Styles.basicContainer, {padding: 0}]}>
            <Modal
                animationType={"slide"}
                transparent={false}
                visible={isModalVisible}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={() => {
                }}>

                {modalBody()}
                <Text style={Styles.closeText}
                      onPress={() => {
                          setModalVisible(false)
                      }}> Close </Text>
            </Modal>
            <View style={[Styles.borderBottom, {flexDirection: 'row'}]}>
                <TextInput placeholder="Meaning" style={{width: 130}}
                           value={selectedMeaning}
                           onChangeText={meaning => setSelectedMeaning(meaning)}
                />

                <Picker
                    selectedValue={selectedForm}
                    style={{height: 50, width: 105}}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => setSelectedForm(itemValue)}
                >
                    <Picker.Item label='Form' value=''/>
                    {verbFormPickers}
                </Picker>
                <TextInput placeholder="Root"
                           value={selectedRoot}
                           onChangeText={root => setSelectedRoot(root)}
                />
            </View>
            <FlatList
                data={verbs}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </SafeAreaView>
    );
}

