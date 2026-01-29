import { Stack } from "expo-router";
import React from "react";
export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: 'transparentModal'
      }}

    >
      <Stack.Screen
        name="index"
        options={{
          title: "Cài đặt",
          headerShown: false,
        }}

      />
      <Stack.Screen
        name="profile"
        options={{ title: "Hồ sơ cá nhân" }}
      />
      <Stack.Screen
        name="subscription"
        options={{ title: "Gói học tập" }}
      />
      <Stack.Screen
        name="notifications"
        options={{ title: "Thông báo" }}
      />
      <Stack.Screen
        name="language"
        options={{ title: "Ngôn ngữ" }}
      />
      <Stack.Screen
        name="sync"
        options={{ title: "Đồng bộ dữ liệu" }}
      />
      <Stack.Screen
        name="security"
        options={{ title: "Bảo mật" }}
      />
      <Stack.Screen
        name="privacy"
        options={{ title: "Quyền riêng tư" }}
      />
    </Stack>
  );
}
