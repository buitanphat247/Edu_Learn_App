import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CourseCard, { Course } from "./CourseCard";

interface ContinueLearningProps {
  courses: Course[];
  onSeeAllPress?: () => void;
  onCoursePress?: (course: Course) => void;
  onPlayPress?: (course: Course) => void;
}

export default function ContinueLearning({
  courses,
  onSeeAllPress,
  onCoursePress,
  onPlayPress,
}: ContinueLearningProps) {
  return (
    <View className="px-4 mt-2">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-bold text-slate-800">Lớp học của bạn</Text>
        <TouchableOpacity onPress={onSeeAllPress}>
          <Text className="text-sm text-sky-500 font-semibold">Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          onPress={onCoursePress}
          onPlayPress={onPlayPress}
        />
      ))}
    </View>
  );
}
