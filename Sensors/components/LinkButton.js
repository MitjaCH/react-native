import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {Link} from "expo-router";

export default function LinkButton({link, text}) {
    return (
        <Link asChild={true} href={link}>
            <TouchableOpacity style={defaultStyle.button}>
                <Text>{text}</Text>
            </TouchableOpacity>
        </Link>
    )
}

const defaultStyle = StyleSheet.create({
    button: {
        margin: 8,
        backgroundColor: "#eebe03",
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        height: 36,
        marginHorizontal: 3,
        padding: 8,
        width: 150
    }
})