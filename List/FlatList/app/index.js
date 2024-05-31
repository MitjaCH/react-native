import React, { useState, useEffect } from "react";
import { Alert, View, FlatList } from "react-native";
import PlanetListItem from "../components/PlanetListItem";
import ItemSeparator from "../components/ItemSeperator";
import Spinner from "../components/Spinner";

export default function Home() {
    const [planets, setPlanets] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadPlanets = async () => {
            try {
                const response = await fetch('https://swapi.dev/api/planets/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    Alert.alert("Error", `The Server responded with ${response.status} ${response.statusText}`);
                    return;
                }
                const planetData = await response.json();
                setPlanets(planetData.results);
            } catch (error) {
                console.error(error);
                Alert.alert("An Error occurred", error.message);
            } finally {
                setIsLoading(false);
            }
        }
        loadPlanets();
    }, []);

    return (

        isLoading ?
            <Spinner />
            :
            <FlatList
                data={planets}
                renderItem={PlanetListItem}
                ItemSeparatorComponent={ItemSeparator}
            />
    );
}