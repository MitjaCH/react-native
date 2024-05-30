import { Slot, Tabs } from "expo-router"
import { Text } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="explore/index"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="compass"
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="trails/index"
                options={{
                    title: "Trails",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="trail-sign"
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: "Favorites",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="heart"
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            size={28}
                            style={{ marginBottom: -3 }}
                            name="person-circle"
                            color={color}
                        />
                    )
                }}
            />
        </Tabs>
    )
} 