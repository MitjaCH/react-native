import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function AppButton({ onPress, children }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 4,
        backgroundColor: "#222222",
        borderRadius: 50,
        marginBottom: 10,
    },
    text: {
        color: "#fff",
        fontWeight: "bold",
    },
}) 