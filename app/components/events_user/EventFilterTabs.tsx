import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface FilterTab {
  id: string;
  label: string;
}

interface EventFilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function EventFilterTabs({ tabs, activeTab, onTabChange }: EventFilterTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 12 }}
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            className={`px-4 py-2 rounded-full mr-2 ${
              isActive
                ? "bg-violet-500"
                : "bg-white border border-gray-200"
            }`}
            onPress={() => onTabChange(tab.id)}
          >
            <Text
              className={`text-sm font-medium ${
                isActive ? "text-white" : "text-slate-500"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
