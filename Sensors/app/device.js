import {StyleSheet, View} from "react-native";
import {Stack} from "expo-router";

export default function Device() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Device Motion",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        paddingHorizontal: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 12
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    }
})