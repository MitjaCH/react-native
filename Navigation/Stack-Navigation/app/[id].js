import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import JumboText from "../components/JumboText";
import { Stack, router, Link} from "expo-router";
import AppButton from "../components/AppButton";

export default function DetailScreen() {
    const { id } = useLocalSearchParams();

    const goBack = () => {
        router.back()
    }
    return(
        <View style={styles.container}>
            <Stack.Screen 
                options={{
                    title: "Detail",
                }}
            />
        <JumboText>{id}</JumboText>
        <AppButton onPress={goBack}>Go back</AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})