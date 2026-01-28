import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutCard from "../../components/settings/LogoutCard";
import ProfileHeader from "../../components/settings/ProfileHeader";
import SettingCard from "../../components/settings/SettingCard";

const settingsItems = [
  {
    id: "notifications",
    icon: "notifications-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#F97316",
    iconBgColor: "bg-orange-50",
    title: "Thông báo",
    onPress: () => console.log("Notifications"),
  },
  {
    id: "security",
    icon: "lock-closed-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#3B82F6",
    iconBgColor: "bg-blue-50",
    title: "Bảo mật",
    onPress: () => console.log("Security"),
  },
  {
    id: "language",
    icon: "language-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#9333EA",
    iconBgColor: "bg-purple-50",
    title: "Ngôn ngữ",
    subtitle: "Tiếng Việt",
    onPress: () => console.log("Language"),
  },
  {
    id: "help",
    icon: "help-circle-outline" as keyof typeof Ionicons.glyphMap,
    iconColor: "#22C55E",
    iconBgColor: "bg-green-50",
    title: "Trợ giúp",
    subtitle: "& Hỗ trợ",
    onPress: () => console.log("Help & Support"),
  },
];

export default function Settings() {
  const router = useRouter();

  const handleViewProfile = () => {
    // Navigate to the profile screen within the current settings stack
    router.push("/(users)/settings/profile");
  };

  const handleEditProfile = () => {
    // TODO: Navigate to edit profile screen
    console.log("Edit profile");
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log("Logout");
    router.replace("/auth/login");
  };

  const renderItem = ({ item }: { item: (typeof settingsItems)[0] }) => (
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
    <SafeAreaView className="bg-[#F8FAFC] flex-1" edges={["left", "right"]}>
      <FlatList
        data={settingsItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={() => (
          <ProfileHeader
            onViewPress={handleViewProfile}
            onEditPress={handleEditProfile}
          />
        )}
        ListFooterComponent={() => (
          <>
            <LogoutCard onPress={handleLogout} />
          </>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
        columnWrapperStyle={{ justifyContent: "space-between", gap: 12 }}
      />
    </SafeAreaView>
  );
}
