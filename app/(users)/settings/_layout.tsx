import { Stack } from "expo-router";
import React from "react";
export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Cài đặt",
          headerShown: false,
        }}

      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Hồ sơ cá nhân",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="language"
        options={{
          title: "Ngôn ngữ",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sync"
        options={{
          title: "Đồng bộ dữ liệu",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
