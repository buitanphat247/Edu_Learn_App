import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface Course {
  id: string;
  title: string;
  progress: number;
  instructor: string;
  thumbnail: string;
}

interface CourseCardProps {
  course: Course;
  onPress?: (course: Course) => void;
  onPlayPress?: (course: Course) => void;
}

export default function CourseCard({
  course,
  onPress,
  onPlayPress,
}: CourseCardProps) {
  return (
    <TouchableOpacity
      className="flex-row bg-white rounded-2xl p-3 mb-3 items-center shadow-sm border border-gray-200"
      onPress={() => onPress?.(course)}
    >
      <Image
        source={{ uri: course.thumbnail }}
        className="w-20 h-20 rounded-xl"
      />
      <View className="flex-1 ml-3 mr-2">
        <Text
          className="text-sm font-semibold text-slate-800 mb-1"
          numberOfLines={2}
        >
          {course.title}
        </Text>
        <Text className="text-xs text-slate-500 mb-2">{course.instructor}</Text>
        <View className="flex-row items-center gap-2">
          <View className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <View
              className="h-full bg-sky-500 rounded-full"
              style={{ width: `${course.progress}%` }}
            />
          </View>
          <Text className="text-xs font-semibold text-sky-500">
            {course.progress}%
          </Text>
        </View>
      </View>
      <TouchableOpacity className="p-1" onPress={() => onPlayPress?.(course)}>
        <Ionicons name="play-circle" size={40} color="#0EA5E9" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
