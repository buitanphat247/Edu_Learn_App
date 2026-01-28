import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface SettingCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

export default function SettingCard({
  icon,
  iconColor,
  iconBgColor,
  title,
  subtitle,
  onPress,
}: SettingCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-white rounded-2xl p-4 mb-3 border border-slate-100 flex-row items-center justify-between shadow-sm"
      activeOpacity={0.7}
    >
      <View className="flex-row items-center flex-1">
        <View
          className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${iconBgColor}`}
        >
          <Ionicons name={icon} size={22} color={iconColor} />
        </View>
        <View>
          <Text className="text-base font-semibold text-slate-800 mb-0.5">
            {title}
          </Text>
          {subtitle && (
            <Text className="text-sm text-slate-500 font-medium">
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
    </TouchableOpacity>
  );
}
