import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { SectionList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutCard from "../../components/settings/LogoutCard";
import SettingCard from "../../components/settings/SettingCard";

interface SettingItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
}

interface SettingSection {
  title: string;
  data: SettingItem[];
}

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout");
    router.replace("/auth/login");
  };

  const sections: SettingSection[] = [
    {
      title: "Tài khoản",
      data: [
        {
          id: "profile",
          icon: "person-outline",
          iconColor: "#0EA5E9", // Sky-500
          iconBgColor: "bg-sky-50",
          title: "Hồ sơ cá nhân",
          subtitle: "Thông tin tài khoản, mật khẩu",
          onPress: () => router.push("/(users)/settings/profile"),
        },
        {
          id: "subscription",
          icon: "ribbon-outline",
          iconColor: "#EAB308", // Yellow-500
          iconBgColor: "bg-yellow-50",
          title: "Gói học tập",
          subtitle: "Quản lý hạng thành viên",
          onPress: () => console.log("Subscription"),
        },
      ],
    },
    {
      title: "Cài đặt chung",
      data: [
        {
          id: "interface",
          icon: "color-palette-outline",
          iconColor: "#EC4899", // Pink-500
          iconBgColor: "bg-pink-50",
          title: "Giao diện",
          subtitle: "Dark mode, cỡ chữ",
          onPress: () => console.log("Interface"),
        },
        {
          id: "notifications",
          icon: "notifications-outline",
          iconColor: "#F97316", // Orange-500
          iconBgColor: "bg-orange-50",
          title: "Thông báo",
          subtitle: "Tin tức, nhắc học, sự kiện",
          onPress: () => console.log("Notifications"),
        },
        {
          id: "language",
          icon: "language-outline",
          iconColor: "#9333EA", // Purple-600
          iconBgColor: "bg-purple-50",
          title: "Ngôn ngữ",
          subtitle: "Tiếng Việt, English",
          onPress: () => console.log("Language"),
        },
        {
          id: "sync",
          icon: "cloud-done-outline",
          iconColor: "#06B6D4", // Cyan-500
          iconBgColor: "bg-cyan-50",
          title: "Đồng bộ dữ liệu",
          subtitle: "Sao lưu tiến độ học tập",
          onPress: () => console.log("Sync"),
        },
      ],
    },
    {
      title: "An toàn & Riêng tư",
      data: [
        {
          id: "security",
          icon: "lock-closed-outline",
          iconColor: "#3B82F6", // Blue-500
          iconBgColor: "bg-blue-50",
          title: "Bảo mật",
          subtitle: "FaceID, thiết bị đăng nhập",
          onPress: () => console.log("Security"),
        },
        {
          id: "privacy",
          icon: "shield-checkmark-outline",
          iconColor: "#6366F1", // Indigo-500
          iconBgColor: "bg-indigo-50",
          title: "Quyền riêng tư",
          subtitle: "Quản lý quyền Camera, Mic",
          onPress: () => console.log("Privacy"),
        },
      ],
    },
    {
      title: "Hỗ trợ & Thông tin",
      data: [
        {
          id: "help",
          icon: "help-circle-outline",
          iconColor: "#22C55E", // Green-500
          iconBgColor: "bg-green-50",
          title: "Trợ giúp",
          subtitle: "Trung tâm hỗ trợ, FAQ",
          onPress: () => console.log("Help & Support"),
        },
        {
          id: "feedback",
          icon: "mail-outline",
          iconColor: "#10B981", // Emerald-500
          iconBgColor: "bg-emerald-50",
          title: "Phản hồi & Góp ý",
          subtitle: "Báo lỗi, đánh giá ứng dụng",
          onPress: () => console.log("Feedback"),
        },
        {
          id: "terms",
          icon: "document-text-outline",
          iconColor: "#64748B", // Slate-500
          iconBgColor: "bg-slate-50",
          title: "Điều khoản & Chính sách",
          onPress: () => console.log("Terms"),
        },
        {
          id: "version",
          icon: "information-circle-outline",
          iconColor: "#94A3B8", // Slate-400
          iconBgColor: "bg-slate-50",
          title: "Phiên bản ứng dụng",
          subtitle: "v1.0.0 (Build 2026.01.28)",
          onPress: () => console.log("Version"),
        },
      ],
    },
  ];

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: SettingSection;
  }) => (
    <View className="mb-2">
      <Text className="text-sm font-bold text-slate-500 uppercase tracking-wider">
        {title}
      </Text>
    </View>
  );

  const renderItem = ({ item }: { item: SettingItem }) => (
    <SettingCard
      icon={item.icon}
      iconColor={item.iconColor}
      iconBgColor={item.iconBgColor}
      title={item.title}
      subtitle={item.subtitle}
      onPress={item.onPress}
    />
  );

  return (
    <SafeAreaView
      className="bg-[#F8FAFC] flex-1"
      edges={["left", "right", "top"]}
    >
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={() => <LogoutCard onPress={handleLogout} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
        stickySectionHeadersEnabled={false}
      />
    </SafeAreaView>
  );
}
