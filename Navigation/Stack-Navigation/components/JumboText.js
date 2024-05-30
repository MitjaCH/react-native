import { Text, StyleSheet } from "react-native"
export default function JumboText({ children }) {
    return <Text style={styles.text}>{children}</Text>
}
const styles = StyleSheet.create({
    text: {
        color: "#222222",
        fontSize: 90,
        fontWeight: "900",
    },
}) 