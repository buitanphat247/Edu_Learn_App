import { Stack } from "expo-router";
import React from "react";
import Header from "../../components/common/Header";

export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        animation: "slide_from_right",
        header: ({ options, route, navigation, back }) => {
          const isIndex = route.name === "index";
          return (
            <Header
              title={options.title || ""}
              showBack={!isIndex && !!back}
              showAvatar={false} // Hide avatar in settings/profile headers to keep it clean or enable if needed
              onBackPress={() => navigation.goBack()}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Cài đặt",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Hồ sơ cá nhân",
        }}
      />
    </Stack>
  );
}
