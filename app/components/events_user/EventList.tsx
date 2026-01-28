import React from "react";
import { FlatList, Text, View } from "react-native";
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
  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <EventCard
          event={item}
          onPress={onEventPress}
          onJoinPress={onJoinPress}
        />
      )}
      ItemSeparatorComponent={() => <View className="h-3" />}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center py-20">
          <Text className="text-slate-400 text-base">Không có sự kiện nào</Text>
        </View>
      }
    />
  );
}
