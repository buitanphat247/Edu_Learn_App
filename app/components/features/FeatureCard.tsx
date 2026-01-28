import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface FeatureCardProps {
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconBgColor: string;
    title: string;
    onPress?: () => void;
}

export default function FeatureCard({ icon, iconColor, iconBgColor, title, onPress }: FeatureCardProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="bg-white rounded-2xl p-4 border border-gray-200 items-center"
            activeOpacity={0.7}
            style={{ width: '100%' }}>
            <View className={`w-14 h-14 rounded-full items-center justify-center mb-3 ${iconBgColor}`}>
                <Ionicons name={icon} size={28} color={iconColor} />
            </View>
            <Text className="text-xs font-medium text-gray-900 text-center" numberOfLines={2}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}
