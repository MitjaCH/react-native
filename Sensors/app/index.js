import {Stack} from "expo-router";
import {StyleSheet, View} from "react-native";
import LinkButton from "../components/LinkButton";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Home",
                }}
            />
            <LinkButton link={"/accelerometer"} text={"Accelerometer"}/>
            <LinkButton link={"/barometer"} text={"Barometer"}/>
            <LinkButton link={"/device"} text={"Device Motion"}/>
            <LinkButton link={"/gyroscope"} text={"Gyroscope"}/>
            <LinkButton link={"/magnetometer"} text={"Magnetometer"}/>
            <LinkButton link={"/pedometer"} text={"Pedometer"}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})