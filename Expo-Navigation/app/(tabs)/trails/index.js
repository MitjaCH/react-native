import { View, Text, StyleSheet } from 'react-native';

export default function TrailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trails</Text>
            <Text style={styles.subtitle}>This is the Trails Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#888',
    },
});