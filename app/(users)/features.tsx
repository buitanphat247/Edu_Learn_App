import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FeatureCard from "../components/features/FeatureCard";
import FeaturesHeader from "../components/features/FeaturesHeader";

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
  const [searchText, setSearchText] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchText.trim()) {
      return featuresItems;
    }
    return featuresItems.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [searchText]);

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof featuresItems)[0];
    index: number;
  }) => {
    const isLastColumn = (index + 1) % NUM_COLUMNS === 0;
    const isFirstColumn = index % NUM_COLUMNS === 0;

    return (
      <View
        style={{
          flex: 1,
          marginLeft: isFirstColumn ? 0 : GAP / 2,
          marginRight: isLastColumn ? 0 : GAP / 2,
          marginBottom: GAP,
        }}
      >
        <FeatureCard
          icon={item.icon}
          iconColor={item.iconColor}
          iconBgColor={item.iconBgColor}
          title={item.title}
          onPress={item.onPress}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
      <FlashList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        ListHeaderComponent={() => (
          <FeaturesHeader
            searchText={searchText}
            onSearchChange={setSearchText}
          />
        )}
        contentContainerStyle={{
          paddingHorizontal: PADDING,
          paddingBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
