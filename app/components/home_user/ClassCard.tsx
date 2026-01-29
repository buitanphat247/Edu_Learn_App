import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface ClassData {
  id: string;
  name: string;
  teacher: string;
  teacherCode?: string;
  thumbnail: string;
}

interface ClassCardProps {
  classData: ClassData;
  onPress?: (classData: ClassData) => void;
  onEnterPress?: (classData: ClassData) => void;
}

export default function ClassCard({
  classData,
  onPress,
  onEnterPress,
}: ClassCardProps) {
  return (
    <TouchableOpacity
      className="flex-row bg-white rounded-xl p-3 items-center shadow-sm border border-gray-200"
      onPress={() => onPress?.(classData)}
      activeOpacity={0.8}
    >
      {/* Thumbnail */}
      <Image
        source={{ uri: classData.thumbnail }}
        className="w-16 h-16 rounded-lg"
        resizeMode="cover"
      />

      {/* Content */}
      <View className="flex-1 ml-3">
        {/* Class Name */}
        <Text className="text-sm font-bold text-slate-800 mb-1" numberOfLines={1}>
          {classData.name}
        </Text>

        {/* Teacher Info */}
        <View className="flex-row items-center">
          <View className="bg-violet-500 px-1.5 py-0.5 rounded mr-1.5">
            <Text className="text-[10px] font-bold text-white">
              {classData.teacherCode || "GV"}
            </Text>
          </View>
          <Text className="text-xs text-slate-500" numberOfLines={1}>
            {classData.teacher}
          </Text>
        </View>
      </View>

      {/* Enter Button */}
      <TouchableOpacity
        className="bg-sky-500 px-3 py-2 rounded-full flex-row items-center"
        onPress={() => onEnterPress?.(classData)}
      >
        <Text className="text-xs font-semibold text-white mr-1">Vào lớp</Text>
        <Ionicons name="arrow-forward" size={12} color="#FFFFFF" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
