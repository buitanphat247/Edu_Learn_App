import { Stack } from "expo-router";
import React from "react";

export default function NewsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                presentation: 'transparentModal'
            }}
        >
            <Stack.Screen name="index" />
            <Stack.Screen name="[id]" options={{ headerShown: false }} />
        </Stack>
    );
}
