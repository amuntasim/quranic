import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text
} from 'react-native';
import Styles from '../../components/Styles';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default function MuslimunChart(props: any) {
    const {data} = props;

    if (!data && !data.input) {
        return (<View/>);
    }

    const initialTableContent = {
        tableHead: ['Plural', 'Dual', 'Singular', ''],
        tableTitle: ['RafAa', 'Nasb', 'Jar'],
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]
    }

    const [tableData, setTableData] = React.useState(initialTableContent.tableData);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [sampledWord, setSampledWord] = React.useState('');
    const [selectedType, setSelectedType] = React.useState('');
    const [answered, setAnswered] = React.useState(false);
    const [correctAnswer, setCorrectAnswer] = React.useState(false);

    const wordsCount = data.input.length;

    const shuffleWord = () => {

        const word = data.input[currentWordIndex];
        const sliced =  word.slice(0, -1)
        const _tableData = [
            [sliced + 'ُوْنَ', sliced + 'َانِ', word],
            [sliced + 'ِيْنَ', sliced + 'َيْنِ',sliced + 'ً'],
            [sliced + 'ِيْنَ', sliced + 'َيْنِ', sliced + 'ٍ'],
        ]
        setTableData(_tableData);
        setSelectedType(word['type']);
        setAnswered(false);
        setCorrectAnswer(false);
        setSampledWord(word);
    }

    React.useEffect(() => {
        shuffleWord();
    }, [currentWordIndex]);

    const updateResult = (_selected: string) => {
        const answer = _selected == selectedType;
        setCorrectAnswer(answer);
        setAnswered(true)
    }

    const nextWord = () => {
        if (currentWordIndex < (wordsCount - 1)) {
            setCurrentWordIndex(currentWordIndex + 1)
        } else {
            setCurrentWordIndex(0)
        }
    }

    return (
        <View style={Styles.basicContainer}>
            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}>{data['questionTitle']}</Text>
            </View>

            <View style={Styles.rowJustified}>
                <Text style={Styles.paragraph}> {sampledWord}</Text>
            </View>
            <View style={[Styles.rowJustified, {height: 40, paddingBottom: 10}]}>
                {answered ? <Ionicons name={'md-refresh'} size={30} style={Styles.grayColor}
                                      onPress={() => shuffleWord()}/> : null}
            </View>

            <Table borderStyle={{borderWidth: 1}}>
                <Row data={initialTableContent.tableHead} flexArr={[1, 1, 1, 1]} style={Styles.tableHead} textStyle={Styles.tableText}/>
                <TableWrapper style={Styles.tableWrapper}>
                    <Rows data={tableData} flexArr={[1, 1, 1]} style={Styles.tableRow} textStyle={Styles.tableTextBold}/>
                    <Col data={initialTableContent.tableTitle} style={Styles.tableTitle}  textStyle={Styles.tableText}/>
                </TableWrapper>
            </Table>

            <View style={[Styles.rowJustified, {marginTop: 10}]}>
                <Text style={Styles.textButton} onPress={() => nextWord()}>{"Next Word >>"}</Text>
            </View>
        </View>
    );

}
