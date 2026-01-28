import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/common/Header";

const DEFAULT_HEADER_SHOWN = true;

const tabs = [
  {
    name: "index",
    title: "Trang chủ",
    icon: "home" as keyof typeof Ionicons.glyphMap,
    headerShown: true,
  },
  {
    name: "news",
    title: "Tin tức",
    icon: "newspaper" as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: "events",
    title: "Sự kiện",
    icon: "calendar" as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: "features",
    title: "Tính năng",
    icon: "grid" as keyof typeof Ionicons.glyphMap,
    headerShown: true,
  },
  {
    name: "settings",
    title: "Cài đặt",
    icon: "settings" as keyof typeof Ionicons.glyphMap,
    headerShown: false,
  },
];

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  // Set system background color for gesture bar
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#0EA5E9");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#0EA5E9" }}>
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: DEFAULT_HEADER_SHOWN,

          headerTitleAlign: "center",

          tabBarActiveTintColor: "#FFFFFF", // White color for active tab
          tabBarInactiveTintColor: "#7DD3FC", // Light blue for inactive tabs
          tabBarStyle: {
            backgroundColor: "#0EA5E9", // Sky blue background
            borderTopWidth: 0,
            height: 60 + insets.bottom,
            paddingBottom: insets.bottom,
            paddingTop: 8,
            elevation: 0,
            shadowOpacity: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "500",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              headerShown: tab.headerShown,
              header: tab.headerShown
                ? ({ route }) => (
                    <Header
                      title={tab.title}
                      showBack={false}
                      showAvatar={false}
                    />
                  )
                : undefined,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.icon} size={size} color={color} />
              ),
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}
