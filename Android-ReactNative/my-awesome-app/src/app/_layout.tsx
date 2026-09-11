import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <>
            <StatusBar style="light" />

            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#0f172a",
                    },
                    headerTintColor: "#ffffff",
                    headerTitleStyle: {
                        fontWeight: "700",
                    },
                    contentStyle: {
                        backgroundColor: "#0f172a",
                    },
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        title: "Home",
                    }}
                />

                <Stack.Screen
                    name="explore"
                    options={{
                        title: "Explore",
                    }}
                />
            </Stack>
        </>
    );
}