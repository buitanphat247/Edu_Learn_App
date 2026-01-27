import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const DEFAULT_HEADER_SHOWN = false;

const tabs = [
  {
    name: 'index',
    title: 'Trang chủ',
    icon: 'home' as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: 'news',
    title: 'Tin tức',
    icon: 'newspaper' as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: 'events',
    title: 'Sự kiện',
    icon: 'calendar' as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: 'features',
    title: 'Tính năng',
    icon: 'grid' as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
  {
    name: 'settings',
    title: 'Cài đặt',
    icon: 'settings' as keyof typeof Ionicons.glyphMap,
    headerShown: DEFAULT_HEADER_SHOWN,
  },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: DEFAULT_HEADER_SHOWN,

        tabBarActiveTintColor: '#9333EA', // Purple color for active tab
        tabBarInactiveTintColor: '#9CA3AF', // Gray color for inactive tabs
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: tab.headerShown,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
