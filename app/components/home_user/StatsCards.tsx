import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface Stat {
  label: string;
  value: number;
  icon: string;
  color: string;
}

interface StatsCardsProps {
  stats: Stat[];
}

const colorMap: Record<string, { bg: string; text: string }> = {
  "#3B82F6": { bg: "bg-blue-50", text: "text-blue-500" },
  "#22C55E": { bg: "bg-green-50", text: "text-green-500" },
  "#F59E0B": { bg: "bg-amber-50", text: "text-amber-500" },
  "#EF4444": { bg: "bg-red-50", text: "text-red-500" },
  "#8B5CF6": { bg: "bg-violet-50", text: "text-violet-500" },
};

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <View className="flex-row px-4 py-4 gap-3">
      {stats.map((stat, index) => {
        const colors = colorMap[stat.color] || {
          bg: "bg-gray-50",
          text: "text-gray-500",
        };
        return (
          <View
            key={index}
            className="flex-1 bg-white rounded-2xl p-4 items-center shadow-sm border border-gray-200"
          >
            <View
              className={`w-12 h-12 rounded-full items-center justify-center mb-2 ${colors.bg}`}
            >
              <Ionicons
                name={stat.icon as keyof typeof Ionicons.glyphMap}
                size={24}
                color={stat.color}
              />
            </View>
            <Text className="text-2xl font-bold text-slate-800">
              {stat.value}
            </Text>
            <Text className="text-xs text-slate-500 mt-1">{stat.label}</Text>
          </View>
        );
      })}
    </View>
  );
}
