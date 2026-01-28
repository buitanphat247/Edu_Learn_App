import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/common/Header";

const DEFAULT_HEADER_SHOWN = true;

const tabs = [
  {
    name: "index",
    title: "Trang chủ",
    icon: "home",
    headerShown: false,
  },
  {
    name: "news",
    title: "Tin tức",
    icon: "newspaper",
    headerShown: false,
  },
  {
    name: "events",
    title: "Sự kiện",
    icon: "calendar",
    headerShown: false,
  },
  {
    name: "features",
    title: "Tính năng",
    icon: "grid",
    headerShown: false,
  },
  {
    name: "settings",
    title: "Cài đặt",
    icon: "settings",
    headerShown: false,
  },
];

import CustomTabBar from "../components/navigation/CustomTabBar";

// ... imports

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#FFFFFF");
  }, []);

  return (
    <Tabs
      initialRouteName="index"
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: DEFAULT_HEADER_SHOWN,
        headerTitleAlign: "center",
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
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = focused ? tab.icon : `${tab.icon}-outline`;
              return (
                <Ionicons
                  name={iconName as any}
                  size={22}
                  color={color}
                />
              );
            },
          }}
        />
      ))}
    </Tabs>
  );
}
