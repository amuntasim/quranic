import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export default StyleSheet.create({
    container: {
        ...Colors.lightBg,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    basicContainer: {
        ...Colors.lightBg,
        flex: 1,
        padding: 5
    },

    flexContainer: {
        ...Colors.lightBg,
        flex: 1,
    },

    text: {
        ...Colors.lightBg,
        fontSize: 18,
        marginBottom: 10,
        padding: 10
    },

    textBold: {
        ...Colors.lightBg,
        fontSize: 18,
        fontWeight: 'bold',
    },

    textButton: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: Colors.lightBg.color,
        borderWidth: 1,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginBottom: 5
    },
    textButtonCompact: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: Colors.lightBg.color,
        borderWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 3,
        margin:1,
    },

    paragraph: {
        ...Colors.lightBg,
        fontSize: 20,
        paddingBottom: 10,
        marginTop: 10,
        textAlign: "justify"
    },

    rowView: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },
    rowViewBox: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 10,
        marginLeft: -3
    },

    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    imageStyle: {
        marginLeft: 15,
        marginRight: 20,
        alignSelf: 'center',
        width: 20,
        height: 24,
        justifyContent: 'center'
    },
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    scrollView: {
        paddingBottom: 40
    },
    button: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    cellButton: {
        display: 'flex',
        height: 'auto',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        width: '90%',
        backgroundColor: '#2AC062',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },

    closeButton: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3974',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 22,
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350,
    },
    closeText: {
        fontSize: 24,
        color: '#00479e',
        textAlign: 'center',
    },
    row: {
        flexDirection: "row",
        display: "flex"
    },
    rowJustified: {
        flexDirection: "row",
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    inputWrap: {
        flex: 1,
        marginBottom: 10
    },
    label: {
        ...Colors.lightBg,
        fontWeight: 'bold'
    },
    greenColor: {
        color: "#079915",
    },
    redColor: {
        color: "#fa0738",
    },
    grayColor: {
        color: "#666666",
    },
    blankLine: {
       height: 30
    },
    tableContainer: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    tableHead: {height: 40, backgroundColor: '#f1f8ff'},
    tableWrapper: {flexDirection: 'row'},
    tableTitle: {flex: 1, backgroundColor: '#f6f8fa'},
    tableRow: {height: 32},
    tableText: {textAlign: 'center',fontSize: 24},
    tableTextBold: {textAlign: 'center',fontSize: 24, fontWeight: 'bold'}
});
