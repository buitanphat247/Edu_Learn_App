import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

interface ProfileHeaderProps {
  onViewPress?: () => void;
  onEditPress?: () => void;
}

export default function ProfileHeader({
  onViewPress,
  onEditPress,
}: ProfileHeaderProps) {
  return (
      <View className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 items-center mb-2 border border-slate-200">
        {/* Header Background Decoration (Optional) - can add a gradient or pattern later */}

        {/* Avatar Section */}
        <View className="relative mb-4">
          <View className="w-24 h-24 rounded-full border-4 border-white shadow-sm overflow-hidden bg-slate-100">
            <Image
              source={{ uri: AVATAR_URL }}
              className="w-full h-full"
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 bg-violet-600 rounded-full items-center justify-center border-[3px] border-white shadow-sm">
            <Ionicons name="camera" size={14} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* User Info */}
        <View className="items-center mb-6">
          <Text className="text-xl font-bold text-slate-800 mb-1">
            Nguyễn Văn A
          </Text>
          <Text className="text-sm text-slate-500 font-medium">
            nguyen.van.a@example.com
          </Text>
          <View className="mt-2 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            <Text className="text-xs text-violet-600 font-semibold">
              Học viên
            </Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row w-full gap-3">
          <TouchableOpacity
            onPress={onViewPress}
            className="flex-1 flex-row items-center justify-center bg-slate-50 py-3 rounded-xl border border-slate-200 active:bg-slate-100"
          >
            <Ionicons name="eye-outline" size={18} color="#475569" />
            <Text className="text-slate-600 font-semibold ml-2 text-sm">
              Xem hồ sơ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onEditPress}
            className="flex-1 flex-row items-center justify-center bg-violet-600 py-3 rounded-xl shadow-lg shadow-violet-200 active:bg-violet-700"
          >
            <Ionicons name="pencil" size={18} color="#FFFFFF" />
            <Text className="text-white font-semibold ml-2 text-sm">
              Chỉnh sửa
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
