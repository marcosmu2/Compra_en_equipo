import { StyleSheet } from "react-native";
import colors from "./colors";

const mainStyles = StyleSheet.create({
    homeContainer : {
        backgroundColor : 'white',
        opacity : 0.87,
        borderColor : colors.secondary,
        borderWidth : 3,
        borderRadius : 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    }
});

export default mainStyles;