import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export default function PlanetListItem({ item }) {
    return (
        <Link href={{pathname: 'details', params: {detailUrl: item.url, planetName: 
            item.name}}} asChild> 
            <TouchableOpacity>
                <View style={styles.container}>
                    <Ionicons name={'planet-outline'} size={56} />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </Link>

    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        backgroundColor: '#fff',
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'regular',
        marginLeft: 16,
    },
});