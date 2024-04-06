import {StyleSheet} from "react-native";
import {Colors} from "../../assets/styles/Colors";

const componentStyles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        padding: 10,
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 10,
        borderRadius: 8,
        marginBottom: 10,
    },
    btnText: {
        fontSize: 18,
        color: "white"
    },
    textArea: {
        borderWidth: 1,
        borderColor: "#afafaf",
        borderRadius: 10,
        backgroundColor: "rgba(255,255,255,0.75)",
        textAlignVertical:"top",
        padding: 10,
        fontSize: 18,
    }
})

export default componentStyles;