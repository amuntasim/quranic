import {StyleSheet} from "react-native";
import Colors from "../constants/Colors";

export default StyleSheet.create({
    container: {
        ...Colors.lightBg,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },
    rowView: {
        ...Colors.lightBg,
        fontSize: 20,
        fontWeight: 'bold',
    },


    title: {
        fontSize: 20,
        fontWeight: 'bold',
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
    scrollView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
