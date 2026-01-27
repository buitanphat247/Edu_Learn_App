import { Stack } from 'expo-router';
import React from 'react';

const screens = [
    {
        name: 'login',
    },
    {
        name: 'signup',
    },
];

export default function _layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="login">
            {screens.map((screen) => (
                <Stack.Screen key={screen.name} name={screen.name} />
            ))}
        </Stack>
    );
}