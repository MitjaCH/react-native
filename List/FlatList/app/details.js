import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Spinner from '../components/Spinner';
 
export default function DetailPage() {
    const { detailUrl } = useLocalSearchParams();
    const [planet, setPlanet] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
        if (!detailUrl) {
            return;
        }
 
        const loadPlanetDetails = async () => {
            try {
                const response = await fetch(detailUrl, {
                    method: 'GET',
                    headers: {
                        contentType: "application/json"
                    }
                });
                if (!response.ok) {
                    Alert.alert("Error", `The Server responded with ${response.status} ${response.statusText}`);
                    return;
                }
                const planetData = await response.json();
                setPlanet(planetData);
            } catch (error) {
                console.log(error);
                Alert.alert("An Error occurred", error.message);
            } finally {
                setIsLoading(false);
            }
        };
 
        loadPlanetDetails();
    }, [detailUrl]);
 
    if (isLoading) {
        return (
            <View style={[styles.container, styles.center]}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
 
    if (!planet) {
        return (
            <View style={styles.container}>
                <Text>No planet data available</Text>
            </View>
        );
    }
 
    return (
        <View style={styles.container}>
            <Image source={require('../assets/moon.jpg')} style={styles.image} />
            <Text style={styles.header}>{planet.name}</Text>
            <View style={styles.detailsContainer}>
                <Text style={styles.detail}>Diameter: {planet.diameter} km</Text>
                <Text style={styles.detail}>Rotation Period: {planet.rotation_period} h</Text>
                <Text style={styles.detail}>Orbital Period: {planet.orbital_period} d</Text>
                <Text style={styles.detail}>Climate: {planet.climate}</Text>
                <Text style={styles.detail}>Terrain: {planet.terrain}</Text>
                <Text style={styles.detail}>Population: {planet.population}</Text>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 21 / 9,
        marginBottom: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    detailsContainer: {
        paddingHorizontal: 16,
    },
    detail: {
        fontSize: 16,
        marginBottom: 8,
    },
});
 