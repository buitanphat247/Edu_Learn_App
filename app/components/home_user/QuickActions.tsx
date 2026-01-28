import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuickAction {
  label: string;
  icon: string;
  color: string;
  bgColor: string;
}

interface QuickActionsProps {
  actions: QuickAction[];
  onActionPress?: (action: QuickAction) => void;
}

const bgColorMap: Record<string, string> = {
  "#FEE2E2": "bg-red-100",
  "#EDE9FE": "bg-violet-100",
  "#CFFAFE": "bg-cyan-100",
  "#FCE7F3": "bg-pink-100",
  "#DCFCE7": "bg-green-100",
  "#FEF3C7": "bg-amber-100",
};

export default function QuickActions({
  actions,
  onActionPress,
}: QuickActionsProps) {
  return (
    <View className="mt-2">
      <Text className="text-lg font-bold text-slate-800 mb-3">
        Truy cập nhanh
      </Text>
      <View className="flex-row flex-wrap gap-3">
        {actions.map((action, index) => {
          const bgClass = bgColorMap[action.bgColor] || "bg-gray-100";
          return (
            <TouchableOpacity
              key={index}
              className="w-[22%] items-center"
              onPress={() => onActionPress?.(action)}
            >
              <View
                className={`w-14 h-14 rounded-2xl items-center justify-center mb-2 ${bgClass}`}
              >
                <Ionicons
                  name={action.icon as keyof typeof Ionicons.glyphMap}
                  size={28}
                  color={action.color}
                />
              </View>
              <Text className="text-xs text-slate-600 font-medium text-center">
                {action.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
