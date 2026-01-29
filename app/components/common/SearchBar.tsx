import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface SearchBarProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    isDark?: boolean;
}

export default function SearchBar({
    value,
    onChangeText,
    placeholder = "Tìm kiếm...",
    isDark = false,
}: SearchBarProps) {
    const borderColor = isDark ? "border-white/20" : "border-slate-200";
    const bgColor = isDark ? "bg-white/10" : "bg-transparent";
    const iconColor = isDark ? "#FFFFFF" : "#64748B";
    const textColor = isDark ? "text-white" : "text-slate-800";
    const placeholderColor = isDark ? "rgba(255,255,255,0.6)" : "#94A3B8";

    return (
        <View className={`flex-row items-center border ${borderColor} ${bgColor} rounded-2xl px-4 py-2`}>
            <Ionicons name="search" size={22} color={iconColor} />
            <TextInput
                className={`flex-1 ml-3 ${textColor} text-[15px] font-medium h-full pt-0 pb-0 justify-center`}
                placeholder={placeholder}
                placeholderTextColor={placeholderColor}
                value={value}
                onChangeText={onChangeText}
            />
            {value ? (
                <TouchableOpacity onPress={() => onChangeText && onChangeText("")}>
                    <Ionicons name="close-circle" size={20} color={isDark ? "rgba(255,255,255,0.4)" : "#CBD5E1"} />
                </TouchableOpacity>
            ) : (
                <View className={`border-l ${isDark ? "border-white/20" : "border-slate-200"} pl-3 ml-1`}>
                    <Ionicons name="options-outline" size={20} color={iconColor} />
                </View>
            )}
        </View>
    );
}
