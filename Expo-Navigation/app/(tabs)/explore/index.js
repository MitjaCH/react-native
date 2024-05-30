import { View, Text, StyleSheet } from 'react-native';

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore</Text>
            <Text style={styles.subtitle}>This is the Explore Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // You can adjust this color as needed
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#888', // Adjust the color as needed
    },
});