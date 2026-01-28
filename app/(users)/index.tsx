import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ClassData,
  MotivationalBanner,
  QuickActions,
  WelcomeSection,
  YourClasses,
} from "../components/home_user";

// Mock user data
const user = {
  name: "Nguyễn Văn A",
  avatar:
    "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg",
  role: "Học viên",
  coursesInProgress: 3,
  completedCourses: 12,
  certificates: 5,
};

// Your classes
const yourClasses: ClassData[] = [
  {
    id: "1",
    name: "Lớp 11B2 - Toán Cao Cấp",
    teacher: "Cô Trần Thị B",
    teacherCode: "TB",
    thumbnail:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400",
  },
  {
    id: "2",
    name: "Lớp 12A1 - Vật Lý Nâng Cao",
    teacher: "Thầy Nguyễn Văn C",
    teacherCode: "NC",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: "3",
    name: "Lớp 10C3 - Hóa Học Cơ Bản",
    teacher: "Cô Lê Thị D",
    teacherCode: "LD",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
  {
    id: "4",
    name: "Lớp 11A1 - Tiếng Anh Giao Tiếp",
    teacher: "Thầy Hoàng Minh E",
    teacherCode: "HE",
    thumbnail:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
  },
  {
    id: "5",
    name: "Lớp 12B2 - Ngữ Văn",
    teacher: "Cô Phạm Thu F",
    teacherCode: "PF",
    thumbnail:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
  },
  {
    id: "6",
    name: "Lớp 10A2 - Tin Học Văn Phòng",
    teacher: "Thầy Đỗ Quang G",
    teacherCode: "DG",
    thumbnail:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  },
  {
    id: "7",
    name: "Lớp 11C1 - Lịch Sử Việt Nam",
    teacher: "Cô Vũ Thị H",
    teacherCode: "VH",
    thumbnail:
      "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?w=400",
  },
  {
    id: "8",
    name: "Lớp 12A3 - Sinh Học Nâng Cao",
    teacher: "Thầy Bùi Văn I",
    teacherCode: "BI",
    thumbnail:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
];

// Quick actions
const quickActions = [
  {
    label: "Lớp học",
    icon: "school-outline",
    color: "#EF4444",
    bgColor: "#FEE2E2",
  },
  {
    label: "Bài tập",
    icon: "document-text-outline",
    color: "#8B5CF6",
    bgColor: "#EDE9FE",
  },
  {
    label: "Lịch học",
    icon: "calendar-outline",
    color: "#06B6D4",
    bgColor: "#CFFAFE",
  },
  {
    label: "Tin nhắn",
    icon: "chatbubbles-outline",
    color: "#EC4899",
    bgColor: "#FCE7F3",
  },
];

export default function HomeScreen() {
  const handleSeeAllClasses = () => {
    console.log("See all classes");
  };

  const handleClassPress = (classData: ClassData) => {
    console.log("Class pressed:", classData.id);
  };

  const handleEnterClass = (classData: ClassData) => {
    console.log("Enter class:", classData.id);
  };

  const handleQuickActionPress = (action: (typeof quickActions)[0]) => {
    console.log("Action pressed:", action.label);
  };

  const handleStartGoal = () => {
    console.log("Start goal");
  };

  return (
    <SafeAreaView
      className="bg-[#F8FAFC] flex-1"
      edges={["left", "right", "top"]}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 16,
          paddingHorizontal: 16,
        }}
      >
        <WelcomeSection user={user} />

        <QuickActions
          actions={quickActions}
          onActionPress={handleQuickActionPress}
        />

        <YourClasses
          classes={yourClasses}
          onSeeAllPress={handleSeeAllClasses}
          onClassPress={handleClassPress}
          onEnterPress={handleEnterClass}
        />

        <MotivationalBanner
          title="🎯 Mục tiêu hôm nay"
          subtitle="Hoàn thành 2 bài học để đạt streak 7 ngày!"
          buttonText="Bắt đầu"
          onPress={handleStartGoal}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
