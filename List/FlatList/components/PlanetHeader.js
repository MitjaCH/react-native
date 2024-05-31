import { StyleSheet, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"
export default function PlanetHeader() {
    const { planetName } = useLocalSearchParams()
    return (
        <Text style={styles.title}>{planetName}</Text>
    )
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 19
    }
}) 