import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface EventSearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFilterPress?: () => void;
}

export default function EventSearchBar({
  value,
  onChangeText,
  onFilterPress,
}: EventSearchBarProps) {
  return (
    <View className="flex-row items-center mb-4">
      {/* Search Input */}
      <View className="flex-1 flex-row items-center bg-white h-12 rounded-2xl px-4 border border-slate-100 shadow-sm shadow-slate-200">
        <Ionicons name="search" size={20} color="#94A3B8" />
        <TextInput
          className="flex-1 ml-3 text-base text-slate-700 font-medium h-full"
          placeholder="Tìm kiếm sự kiện..."
          placeholderTextColor="#94A3B8"
          value={value}
          onChangeText={onChangeText}
        />
      </View>

      {/* Filter Button */}
      <TouchableOpacity
        className="w-12 h-12 bg-white ml-3 rounded-2xl items-center justify-center border border-slate-100 shadow-sm shadow-slate-200"
        onPress={onFilterPress}
      >
        <Ionicons name="options-outline" size={22} color="#64748B" />
      </TouchableOpacity>
    </View>
  );
}
