import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface FilterTab {
  id: string;
  label: string;
}

interface EventTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function EventTabs({
  tabs,
  activeTab,
  onTabChange,
}: EventTabsProps) {
  return (
    <View className="flex-row bg-slate-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            className={`flex-1 py-2.5 rounded-full mx-1 ${
              isActive ? "bg-violet-500" : "bg-white border border-gray-200"
            }`}
            onPress={() => onTabChange(tab.id)}
          >
            <Text
              className={`text-sm font-semibold text-center ${
                isActive ? "text-white" : "text-slate-500"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
