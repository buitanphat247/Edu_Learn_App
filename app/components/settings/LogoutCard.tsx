import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface LogoutCardProps {
    onPress: () => void;
}

export default function LogoutCard({ onPress }: LogoutCardProps) {
    return (
        <View className="mt-2">
            <TouchableOpacity
                onPress={onPress}
                className="bg-white rounded-2xl p-4 border border-red-200 flex-row items-center"
                activeOpacity={0.7}>
                <View className="w-12 h-12 rounded-full items-center justify-center bg-red-50 mr-4">
                    <Ionicons name="log-out-outline" size={22} color="#EF4444" />
                </View>
                <View className="flex-1">
                    <Text className="text-base font-semibold text-red-600">Đăng xuất</Text>
                    <Text className="text-sm text-gray-500 mt-0.5">Thoát khỏi tài khoản</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
