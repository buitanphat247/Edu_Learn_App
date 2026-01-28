import { Ionicons } from '@expo/vector-icons';
import { cssInterop } from 'nativewind';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

cssInterop(TextInput, { className: 'style' });

interface FeaturesHeaderProps {
    searchText: string;
    onSearchChange: (text: string) => void;
}

export default function FeaturesHeader({ searchText, onSearchChange }: FeaturesHeaderProps) {
    return (
        <View className="pt-4 pb-4">
            <View className="flex-row items-center bg-white rounded-2xl px-4 h-14 border border-gray-200 shadow-sm">
                <Ionicons name="search-outline" size={22} color="#9CA3AF" />
                <TextInput
                    className="flex-1 text-base text-gray-900 ml-3 py-0"
                    placeholder="Tìm kiếm tính năng..."
                    placeholderTextColor="#9CA3AF"
                    value={searchText}
                    onChangeText={onSearchChange}
                />
                {searchText.length > 0 && (
                    <TouchableOpacity
                        onPress={() => onSearchChange('')}
                        className="ml-2 p-1">
                        <Ionicons name="close-circle" size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
