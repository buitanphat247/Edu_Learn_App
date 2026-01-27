import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface SettingCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconBgColor: string;
    title: string;
    subtitle?: string;
    onPress?: () => void;
}

export default function SettingCard({ icon, iconColor, iconBgColor, title, subtitle, onPress }: SettingCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-2xl p-4 border border-gray-200"
            activeOpacity={0.7}
            style={{ flex: 1, margin: 4 }}>
            <View className={`w-12 h-12 rounded-full items-center justify-center mb-3 ${iconBgColor}`}>
                <Ionicons name={icon} size={24} color={iconColor} />
            </View>
            <Text className="text-base font-semibold text-gray-900 mb-1">{title}</Text>
            {subtitle && (
                <Text className="text-xs text-gray-500">{subtitle}</Text>
            )}
        </TouchableOpacity>
    );
}
