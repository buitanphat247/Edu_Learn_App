import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import MainHeader from "../../components/common/MainHeader";
import FeatureCard from "../../components/features/FeatureCard";
import { useStickyHeader } from "../../hooks/useStickyHeader";

const NUM_COLUMNS = 3;
const GAP = 8;
const PADDING = 12;

const featuresItems = [
  {
    id: "library",
    icon: "library-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#9333EA",
    iconBgColor: "bg-purple-50",
    title: "Thư viện tài liệu",
    onPress: () => console.log("Thư viện tài liệu"),
  },
  {
    id: "quiz",
    icon: "help-circle-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#9333EA",
    iconBgColor: "bg-purple-50",
    title: "Thi trắc nghiệm",
    onPress: () => console.log("Thi trắc nghiệm"),
  },
  {
    id: "classroom",
    icon: "school-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#EF4444",
    iconBgColor: "bg-red-50",
    title: "Lớp học",
    onPress: () => console.log("Lớp học"),
  },
  {
    id: "discussion",
    icon: "people-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#22C55E",
    iconBgColor: "bg-green-50",
    title: "Thảo luận nhóm",
    onPress: () => console.log("Thảo luận nhóm"),
  },
  {
    id: "chat",
    icon: "chatbubbles-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#14B8A6",
    iconBgColor: "bg-teal-50",
    title: "Phòng chat ảo",
    onPress: () => console.log("Phòng chat ảo"),
  },
  {
    id: "vocabulary",
    icon: "book-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#F97316",
    iconBgColor: "bg-orange-50",
    title: "Học từ vựng",
    onPress: () => console.log("Học từ vựng"),
  },
  {
    id: "writing",
    icon: "create-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#EC4899",
    iconBgColor: "bg-pink-50",
    title: "Luyện viết",
    onPress: () => console.log("Luyện viết"),
  },
  {
    id: "listening",
    icon: "headset-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#14B8A6",
    iconBgColor: "bg-teal-50",
    title: "Luyện nghe",
    onPress: () => console.log("Luyện nghe"),
  },
  {
    id: "leaderboard",
    icon: "trophy-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#F59E0B",
    iconBgColor: "bg-yellow-50",
    title: "Bảng xếp hạng",
    onPress: () => console.log("Bảng xếp hạng"),
  },
  {
    id: "resources",
    icon: "folder-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#9333EA",
    iconBgColor: "bg-purple-50",
    title: "Kho tài liệu",
    onPress: () => console.log("Kho tài liệu"),
  },
  {
    id: "support",
    icon: "help-circle-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#6B7280",
    iconBgColor: "bg-gray-50",
    title: "Hỗ trợ",
    onPress: () => console.log("Hỗ trợ"),
  },
];

export default function Features() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const { scrollHandler, animatedHeaderStyle } = useStickyHeader("#3B82F6");

  // Format data into rows for grid layout within FlatList
  const listData = useMemo(() => {
    let filtered = featuresItems;
    if (searchText.trim()) {
      filtered = featuresItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    const rows = [];
    for (let i = 0; i < filtered.length; i += NUM_COLUMNS) {
      rows.push({
        type: "feature_row",
        id: `row-${i}`,
        items: filtered.slice(i, i + NUM_COLUMNS),
      });
    }

    return rows;
  }, [searchText]);

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {

      case "feature_row":
        return (
          <View
            className="flex-row px-4"
            style={{ gap: 8 }}
          >
            {item.items.map((feature: any) => (
              <View
                key={feature.id}
                style={{
                  flex: 1,
                  maxWidth: `${100 / NUM_COLUMNS}%`,
                }}
              >
                <FeatureCard
                  icon={feature.icon}
                  iconColor={feature.iconColor}
                  iconBgColor={feature.iconBgColor}
                  title={feature.title}
                  onPress={feature.onPress}
                />
              </View>
            ))}
            {/* Fill empty spacing for incomplete rows */}
            {Array.from({ length: NUM_COLUMNS - item.items.length }).map(
              (_, i) => (
                <View
                  key={`empty-${i}`}
                  style={{
                    flex: 1,
                    maxWidth: `${100 / NUM_COLUMNS}%`,
                  }}
                />
              )
            )}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-[#3B82F6]"
      edges={["left", "right", "top"]}
    >
      <SafeAreaView
        className="flex-1 bg-white"
        edges={["bottom"]}
      >
        <MainHeader
          title="Tiện ích"
          searchPlaceholder="Tìm kiếm tiện ích..."
          searchValue={searchText}
          onSearchChange={setSearchText}
          animatedStyle={animatedHeaderStyle}
        />

        <Animated.FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 16,
            paddingBottom: 24,
            gap: 8
          }}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}
