import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Events() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 items-center justify-center">
                <Text className="text-2xl font-bold text-gray-900">Sự kiện</Text>
            </View>
        </SafeAreaView>
    );
}
