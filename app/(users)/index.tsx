import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../components/common/MainHeader";
import {
  ClassData,
  QuickActions,
  WelcomeSection,
  YourClasses,
} from "../components/home_user";
import { useStickyHeader } from "../hooks/useStickyHeader";

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
  const router = useRouter();
  const { scrollHandler, animatedHeaderStyle } = useStickyHeader("#3B82F6");

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

  const listData = useMemo(() => {
    return [
      { type: "welcome", id: "welcome" },
      { type: "quick_actions", id: "quick_actions" },
      { type: "your_classes", id: "your_classes" },
    ];
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {

      case "welcome":
        return (
          <View className="px-4 mb-2 mt-3">
            <WelcomeSection user={user} />
          </View>
        );
      case "quick_actions":
        return (
          <View className="px-4 mb-2">
            <QuickActions
              actions={quickActions}
              onActionPress={handleQuickActionPress}
            />
          </View>
        );
      case "your_classes":
        return (
          <View className="px-4">
            <YourClasses
              classes={yourClasses}
              onSeeAllPress={handleSeeAllClasses}
              onClassPress={handleClassPress}
              onEnterPress={handleEnterClass}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView
      className="bg-[#3B82F6] flex-1"
      edges={["top", "left", "right"]}
    >
      <SafeAreaView
        className="bg-[#F8FAFC] flex-1"
        edges={["bottom"]}
      >
        <MainHeader
          title="Trang chủ"
          searchPlaceholder="Tìm kiếm khóa học, tài liệu..."
          animatedStyle={animatedHeaderStyle}
        />

        <Animated.FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
