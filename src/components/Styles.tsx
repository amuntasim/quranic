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

    text: {
        ...Colors.lightBg,
        fontSize: 16,
    },

    paragraph: {
        ...Colors.lightBg,
        fontSize: 16,
        paddingBottom: 10,
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
        paddingTop: 10,
        paddingBottom: 10,
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
        alignItems: 'center',
    },
});
