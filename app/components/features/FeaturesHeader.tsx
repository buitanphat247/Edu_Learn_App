import { Ionicons } from "@expo/vector-icons";
import { cssInterop } from "nativewind";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

cssInterop(TextInput, { className: "style" });

interface FeaturesHeaderProps {
  searchText: string;
  onSearchChange: (text: string) => void;
}

export default function FeaturesHeader({
  searchText,
  onSearchChange,
}: FeaturesHeaderProps) {
  return (
    <View className="pb-4">
    
      <View className="flex-row items-center bg-white h-12 rounded-xl px-4 border border-slate-200 shadow-sm">
        <Ionicons name="search" size={20} color="#64748B" />
        <TextInput
          className="flex-1 ml-3 text-base text-slate-700 font-medium h-full"
          placeholder="Tìm kiếm tính năng..."
          placeholderTextColor="#94A3B8"
          value={searchText}
          onChangeText={onSearchChange}
        />
        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={() => onSearchChange("")}
            className="ml-2 p-1"
          >
            <Ionicons name="close-circle" size={18} color="#94A3B8" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
