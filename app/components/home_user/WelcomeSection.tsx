import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface User {
  name: string;
  avatar: string;
  role: string;
}

interface WelcomeSectionProps {
  user: User;
}

export default function WelcomeSection({ user }: WelcomeSectionProps) {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Chào buổi sáng";
    if (hour < 18) return "Chào buổi chiều";
    return "Chào buổi tối";
  };

  return (
    <View className="pt-4">
      <View className="flex-row justify-between items-center px-5 py-5 bg-white rounded-2xl shadow-sm border border-gray-200">
        <View className="flex-1">
          <Text className="text-sm text-slate-500 mb-1">{getGreeting()},</Text>
          <Text className="text-2xl font-bold text-slate-800 mb-2">
            {user.name} 👋
          </Text>
          <View className="flex-row items-center bg-sky-100 px-2.5 py-1 rounded-xl self-start">
            <Ionicons name="person-outline" size={14} color="#0EA5E9" />
            <Text className="text-xs text-sky-500 font-semibold ml-1">
              {user.role}
            </Text>
          </View>
        </View>
        <TouchableOpacity className="relative">
          <Image
            source={{ uri: user.avatar }}
            className="w-14 h-14 rounded-full border-[3px] border-sky-500"
          />
          <View className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
