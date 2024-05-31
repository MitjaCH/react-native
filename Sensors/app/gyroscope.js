import {StyleSheet, View} from "react-native";
import {Stack} from "expo-router";

export default function GyroscopePage() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Gyroscope",
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
        fontSize: 14
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    }
})