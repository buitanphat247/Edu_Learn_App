import React from "react";
import { ScrollView, Text, View } from "react-native";
import EventCard, { EventData } from "./EventCard";

interface EventListProps {
  events: EventData[];
  onEventPress?: (event: EventData) => void;
  onJoinPress?: (event: EventData) => void;
}

export default function EventList({
  events,
  onEventPress,
  onJoinPress,
}: EventListProps) {
  if (events.length === 0) {
    return (
      <View className="flex-1 items-center justify-center py-20">
        <Text className="text-slate-400 text-base">Không có sự kiện nào</Text>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 8, paddingBottom: 24 }}
    >
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onPress={onEventPress}
          onJoinPress={onJoinPress}
        />
      ))}
    </ScrollView>
  );
}
