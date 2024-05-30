import { View, Text, StyleSheet, Pressable } from "react-native";
import JumboText from "../components/JumboText";
import AppButton from "../components/AppButton";
import { router, Stack } from "expo-router";
export default function ThirdScreen() {
    const goBack = () => {
        router.back()
    }
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Third",
                    headerRight: () => (
                        <Pressable onPress={() => alert("Alert pressed")}>
                            <Text>Alert</Text>
                        </Pressable>
                    ),
                }}
            />
            <JumboText>Third</JumboText>
            <AppButton onPress={goBack}>Go back</AppButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
}) 