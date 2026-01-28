import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export interface EventData {
  id: string;
  type: "workshop" | "talkshow" | "networking" | "seminar" | "competition";
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  isOnline: boolean;
  attendees: number;
  avatars: string[];
  accentColor: string;
}

interface EventCardProps {
  event: EventData;
  onPress?: (event: EventData) => void;
  onJoinPress?: (event: EventData) => void;
}

const typeLabels: Record<EventData["type"], string> = {
  workshop: "WORKSHOP",
  talkshow: "TALKSHOW",
  networking: "NETWORKING",
  seminar: "SEMINAR",
  competition: "COMPETITION",
};

const months = [
  "THG 1",
  "THG 2",
  "THG 3",
  "THG 4",
  "THG 5",
  "THG 6",
  "THG 7",
  "THG 8",
  "THG 9",
  "THG 10",
  "THG 11",
  "THG 12",
];

const accentColorMap: Record<
  string,
  { border: string; text: string; bg: string }
> = {
  "#8B5CF6": {
    border: "border-l-violet-500",
    text: "text-violet-500",
    bg: "bg-violet-500",
  },
  "#EC4899": {
    border: "border-l-pink-500",
    text: "text-pink-500",
    bg: "bg-pink-500",
  },
  "#0EA5E9": {
    border: "border-l-sky-500",
    text: "text-sky-500",
    bg: "bg-sky-500",
  },
  "#22C55E": {
    border: "border-l-green-500",
    text: "text-green-500",
    bg: "bg-green-500",
  },
  "#F59E0B": {
    border: "border-l-amber-500",
    text: "text-amber-500",
    bg: "bg-amber-500",
  },
};

export default function EventCard({
  event,
  onPress,
  onJoinPress,
}: EventCardProps) {
  const day = event.date.getDate();
  const month = months[event.date.getMonth()];
  const colors = accentColorMap[event.accentColor] || {
    border: "border-l-gray-500",
    text: "text-gray-500",
    bg: "bg-gray-500",
  };

  return (
    <TouchableOpacity
      className={`flex-row bg-white rounded-xl p-4 border-l-4 ${colors.border} shadow-sm border border-gray-100`}
      onPress={() => onPress?.(event)}
      activeOpacity={0.7}
    >
      {/* Date Column */}
      <View className="items-center justify-start mr-4 pt-1">
        <Text className={`text-[10px] font-semibold ${colors.text}`}>
          {month}
        </Text>
        <Text className="text-2xl font-bold text-slate-800">{day}</Text>
      </View>

      {/* Content */}
      <View className="flex-1">
        {/* Type Badge */}
        <Text
          className={`text-[10px] font-bold tracking-wide mb-1 ${colors.text}`}
        >
          {typeLabels[event.type]}
        </Text>

        {/* Title */}
        <Text
          className="text-base font-bold text-slate-800 mb-2"
          numberOfLines={2}
        >
          {event.title}
        </Text>

        {/* Time */}
        <View className="flex-row items-center mb-1">
          <Ionicons name="time-outline" size={12} color="#94A3B8" />
          <Text className="text-xs text-slate-400 ml-1">
            {event.startTime} - {event.endTime}
          </Text>
        </View>

        {/* Location */}
        <View className="flex-row items-center mb-3">
          <Ionicons
            name={event.isOnline ? "videocam-outline" : "location-outline"}
            size={12}
            color="#94A3B8"
          />
          <Text className="text-xs text-slate-400 ml-1" numberOfLines={1}>
            {event.location}
          </Text>
        </View>

        {/* Footer */}
        <View className="flex-row items-center justify-between">
          {/* Attendees */}
          <View className="flex-row items-center">
            <View className="flex-row">
              {event.avatars.slice(0, 3).map((avatar, index) => (
                <Image
                  key={index}
                  source={{ uri: avatar }}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ marginLeft: index > 0 ? -8 : 0, zIndex: 3 - index }}
                />
              ))}
            </View>
            <Text className="text-xs text-slate-400 ml-2">
              +{event.attendees}
            </Text>
          </View>

          {/* Join Button */}
          <TouchableOpacity
            className={`px-4 py-1.5 rounded-full ${colors.bg}`}
            onPress={() => onJoinPress?.(event)}
          >
            <Text className="text-xs font-semibold text-white">Tham gia</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
