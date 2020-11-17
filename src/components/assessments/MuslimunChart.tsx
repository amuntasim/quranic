import * as React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Styles from '../../components/Styles';
import {Table, TableWrapper, Row, Rows, Col} from 'react-native-table-component';


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
    let _wordDetails: any = {};
    const [revealedTable, setRevealedTable] = React.useState('');
    const [cellDataMap, setCellDataMap] = React.useState(new Map());
    const [tableData, setTableData] = React.useState(initialTableContent.tableData);
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [sampledWord, setSampledWord] = React.useState('');
    const [answerOption, setAnswerOption] = React.useState(false);
    const [wordDetails, setWordDetails] = React.useState(_wordDetails);
    const [currentCellIndex, setCurrentCellIndex] = React.useState('');

    const wordsCount = data.input.length;
    const cellContent = (cellIndex: string) => {
        if (cellDataMap.get(cellIndex)) {
            return cellDataMap.get(cellIndex)
        } else {
            return (
                <TouchableOpacity onPress={() => openAnswerOption(cellIndex)}>
                    <View style={Styles.rowJustified}>
                        <Text style={Styles.cellButton}> {currentCellIndex == cellIndex ? '?' : ''} </Text>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    const openAnswerOption = (cellIndex: string) => {
        setAnswerOption(true)
        setCurrentCellIndex(cellIndex)
    }
    const shuffleWord = () => {

        const word = data.input[currentWordIndex];
        const sliced = word.slice(0, -1)
        const _wordBreakdown = {
            '11': word, '12': sliced + 'َانِ', '13': sliced + 'ُوْنَ',
            '21': sliced + 'ً', '22,32': sliced + 'َيْنِ', '23,33': sliced + 'ِيْنَ',
            '31': sliced + 'ٍ'
        }
        setWordDetails(shuffle(_wordBreakdown))
        setCellDataMap(new Map().set('11', word));
        setCurrentCellIndex('21');
        openAnswerOption('21')
        // this is for triggering useEffect that rerenders table
        setRevealedTable(revealedTable + '11');
        setSampledWord(word);
    }

    function shuffle(o:any){ //v1.0
        for(let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };

    const updateTableView = () => {
        const _tableData = [
            [cellContent('13'), cellContent('12'), cellContent('11')],
            [cellContent('23'), cellContent('22'), cellContent('21')],
            [cellContent('33'), cellContent('32'), cellContent('31')],

        ]
        setTableData(_tableData);
    }

    React.useEffect(() => {
        shuffleWord();
    }, [currentWordIndex]);

    React.useEffect(() => {
        updateTableView();
    }, [revealedTable]);

    const AnswerOptionView = () => {
        const options = Object.keys(wordDetails).map(function (key: string) {
            let value = wordDetails[key]
            return <Text key={key} style={Styles.textButtonCompact} onPress={() => matchAnswer(key)}>{value}</Text>;
        })
        return (
            <View style={Styles.rowJustified}>
                {options}
                {/*{options.sort(() => Math.random() - 0.5)}*/}
            </View>
        )
    }

    const matchAnswer = (selectedKeys: string) => {
        if (selectedKeys.includes(currentCellIndex)) {
            updateTableData(_getKeyValue_(selectedKeys)(wordDetails))
        }
    }

    const tableDataIndexMap = {
        '11': [0, 2], '12': [0, 1], '13': [0, 0],
        '21': [1, 2], '22': [1, 1], '23': [1, 0],
        '31': [2, 2], '32': [2, 1], '33': [2, 0],
    }

    const _getKeyValue_ = (key: string) => (obj: Record<string, any>) => obj[key];

    const updateTableData = (cellData: string) => {
        cellDataMap.set(currentCellIndex, cellData);
        setCellDataMap(cellDataMap)
        setRevealedTable(revealedTable + currentCellIndex)
        setNextCellIndex();
    }
    const setNextCellIndex = () => {
        let nextIndex = parseInt(currentCellIndex) + 10;

        if (cellDataMap.size >= 9) {
            return;
        }
        if (nextIndex > 33) {
            setCurrentCellIndex('' + (parseInt(currentCellIndex) + 1 - 20))
        }else{
            setCurrentCellIndex('' + nextIndex)
        }
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
                <Text style={[Styles.paragraph, Styles.tableTextBold]}> {sampledWord}</Text>
            </View>

            <View style={[Styles.rowJustified, {paddingBottom: 10}]}>
                {answerOption ? <AnswerOptionView/> : null}
            </View>


            <Table borderStyle={{borderWidth: 1}}>
                <Row data={initialTableContent.tableHead} flexArr={[1, 1, 1, 1]} style={Styles.tableHead}
                     textStyle={Styles.tableText}/>
                <TableWrapper style={Styles.tableWrapper}>
                    <Rows data={tableData} flexArr={[1, 1, 1]} style={Styles.tableRow}
                          textStyle={Styles.tableTextBold}/>
                    <Col data={initialTableContent.tableTitle} style={Styles.tableTitle} textStyle={Styles.tableText}/>
                </TableWrapper>
            </Table>

            <View style={[Styles.rowJustified, {marginTop: 10}]}>
                <Text style={Styles.textButton} onPress={() => nextWord()}>{"Next Word >>"}</Text>
            </View>
        </View>
    );

}
