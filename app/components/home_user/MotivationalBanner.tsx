import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MotivationalBannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  onPress?: () => void;
}

export default function MotivationalBanner({
  title,
  subtitle,
  buttonText = "Bắt đầu",
  onPress,
}: MotivationalBannerProps) {
  return (
    <View className="flex-row bg-sky-500 rounded-2xl p-4 items-center">
      <View className="flex-1">
        <Text className="text-base font-bold text-white mb-1">{title}</Text>
        <Text className="text-sm text-white/90">{subtitle}</Text>
      </View>
      <TouchableOpacity
        className="bg-white px-4 py-2 rounded-full"
        onPress={onPress}
      >
        <Text className="text-sm font-semibold text-sky-500">
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
