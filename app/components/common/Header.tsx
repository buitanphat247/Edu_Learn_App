import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showAvatar?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
  onBackPress?: () => void;
}

export default function Header({
  title,
  showBack = false,
  showAvatar = true,
  rightIcon,
  onRightIconPress,
  onBackPress,
}: HeaderProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleAvatarPress = () => {
    if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-[#0EA5E9] shadow-sm "
      style={Platform.select({
        android: { elevation: 4, backgroundColor: "#0EA5E9" },
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          backgroundColor: "#0EA5E9",
        },
        default: { backgroundColor: "#0EA5E9" },
      })}
    >
      <View className="flex-row items-center justify-between px-4 pb-3">
        {/* Left section - Back button or spacer */}
        <View className="w-10">
          {showBack && (
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Center section - Title */}
        <View className="flex-1 items-center justify-center">
          <Text className="text-lg font-bold text-white">{title}</Text>
        </View>

        {/* Right section - Avatar or icon */}
        <View className="w-10 items-end">
          {rightIcon ? (
            <TouchableOpacity
              onPress={onRightIconPress || handleAvatarPress}
              className="p-1"
            >
              <Ionicons name={rightIcon} size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ) : showAvatar ? (
            <TouchableOpacity onPress={handleAvatarPress} className="p-0.5">
              <Image
                source={{ uri: AVATAR_URL }}
                className="w-9 h-9 rounded-full border-2 border-white/50"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}
