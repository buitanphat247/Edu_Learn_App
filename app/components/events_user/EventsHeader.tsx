import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface EventsHeaderProps {
  title?: string;
  avatarUrl?: string;
  onNotificationPress?: () => void;
  onAvatarPress?: () => void;
}

export default function EventsHeader({
  title = "Sự kiện",
  avatarUrl,
  onNotificationPress,
  onAvatarPress,
}: EventsHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row items-center justify-between px-4 pb-2 bg-white"
      style={{ paddingTop: insets.top + 8 }}
    >
      <Text className="text-2xl font-bold text-slate-800">{title}</Text>
      <View className="flex-row items-center gap-3">
        <TouchableOpacity
          className="relative p-1"
          onPress={onNotificationPress}
        >
          <Ionicons name="notifications-outline" size={24} color="#1E293B" />
          <View className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </TouchableOpacity>
        {avatarUrl && (
          <TouchableOpacity onPress={onAvatarPress}>
            <Image
              source={{ uri: avatarUrl }}
              className="w-9 h-9 rounded-full border-2 border-violet-500"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
