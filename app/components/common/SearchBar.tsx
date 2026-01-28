import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
}

export default function SearchBar({
    value,
    onChangeText,
    placeholder = "Tìm kiếm...",
}: SearchBarProps) {
    return (
        <View className="flex-row items-center bg-white border border-slate-200 rounded-2xl px-4 py-3.5 shadow-sm shadow-slate-200">
            <Ionicons name="search" size={22} color="#64748B" />
            <TextInput
                className="flex-1 ml-3 text-slate-800 text-[15px] font-medium h-full pt-0 pb-0 justify-center"
                placeholder={placeholder}
                placeholderTextColor="#94A3B8"
                value={value}
                onChangeText={onChangeText}
            />
            {/* Optional: Clear button if needed later */}
            {value ? (
                <TouchableOpacity onPress={() => onChangeText && onChangeText("")}>
                    <Ionicons name="close-circle" size={20} color="#CBD5E1" />
                </TouchableOpacity>
            ) : (
                <View className="border-l border-slate-200 pl-3 ml-1">
                    <Ionicons name="options-outline" size={20} color="#64748B" />
                </View>
            )}
        </View>
    );
}
