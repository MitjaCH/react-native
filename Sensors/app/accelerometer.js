import { StyleSheet, View, Text } from "react-native";
import { Stack } from "expo-router";
import { useState } from "react";
import { useEffect } from "react";
import { Accelerometer } from "expo-sensors";


export default function AccelerometerPage() {

    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 })
    const [subscription, setSubscription] = useState(null)

    const subscribe = () => {
        setSubscription(Accelerometer.addListener(setData))
    }
    const unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }

    useEffect(() => {
        subscribe()
        return () => unsubscribe()
    }, [])



    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Accelerometer",
                }}
            />

            <Text style={styles.title}>Accelerometer: (in gs where 1g = 9.81 m/s^2)</Text>
            <Text style={styles.title}>Acceleration along x:</Text>
            <Text style={styles.text}>{x} g</Text>
            <Text style={styles.title}>Acceleration along y:</Text>
            <Text style={styles.text}>{y} g</Text>
            <Text style={styles.title}>Acceleration along z:</Text>
            <Text style={styles.text}>{z} g</Text>

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