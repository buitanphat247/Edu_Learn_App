import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ClassCard, { ClassData } from "./ClassCard";

interface YourClassesProps {
  classes: ClassData[];
  onSeeAllPress?: () => void;
  onClassPress?: (classData: ClassData) => void;
  onEnterPress?: (classData: ClassData) => void;
}

export default function YourClasses({
  classes,
  onSeeAllPress,
  onClassPress,
  onEnterPress,
}: YourClassesProps) {
  return (
    <View className="mt-2">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-slate-800">
          Lớp học của bạn
        </Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text className="text-sm text-sky-500 font-semibold">Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      {classes.map((classItem) => (
        <ClassCard
          key={classItem.id}
          classData={classItem}
          onPress={onClassPress}
          onEnterPress={onEnterPress}
        />
      ))}
    </View>
  );
}
