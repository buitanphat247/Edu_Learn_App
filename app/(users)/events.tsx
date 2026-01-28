import React, { useMemo, useState } from "react";
import { Platform, Text, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/common/SearchBar";
import {
  EventCard,
  EventData,
  EventDetailModal,
  EventTabs,
} from "../components/events_user";

// Filter tabs
const filterTabs = [
  { id: "upcoming", label: "Sắp tới" },
  { id: "past", label: "Đã qua" },
];

// Mock events data
const mockEvents: EventData[] = [
  // Sự kiện sắp tới (2026)
  {
    id: "1",
    type: "workshop",
    title: "Workshop UI/UX Nâng Cao",
    date: new Date(2026, 1, 5), // 5/2/2026
    startTime: "09:00",
    endTime: "11:30",
    location: "Online (Zoom)",
    isOnline: true,
    attendees: 24,
    avatars: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
    ],
    accentColor: "#8B5CF6",
  },
  {
    id: "2",
    type: "talkshow",
    title: "Xu hướng AI năm 2026",
    date: new Date(2026, 1, 10), // 10/2/2026
    startTime: "14:00",
    endTime: "16:00",
    location: "Hội trường A, HCM",
    isOnline: false,
    attendees: 120,
    avatars: [
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/women/5.jpg",
      "https://randomuser.me/api/portraits/men/6.jpg",
    ],
    accentColor: "#EC4899",
  },
  {
    id: "3",
    type: "networking",
    title: "Giao lưu Cộng đồng Dev",
    date: new Date(2026, 1, 15), // 15/2/2026
    startTime: "18:30",
    endTime: "20:30",
    location: "The Coffee House, HN",
    isOnline: false,
    attendees: 45,
    avatars: [
      "https://randomuser.me/api/portraits/women/7.jpg",
      "https://randomuser.me/api/portraits/men/8.jpg",
    ],
    accentColor: "#0EA5E9",
  },
  {
    id: "4",
    type: "seminar",
    title: "Clean Code & Best Practices",
    date: new Date(2026, 2, 5), // 5/3/2026
    startTime: "10:00",
    endTime: "12:00",
    location: "Online (Google Meet)",
    isOnline: true,
    attendees: 86,
    avatars: [
      "https://randomuser.me/api/portraits/men/9.jpg",
      "https://randomuser.me/api/portraits/women/10.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
    ],
    accentColor: "#22C55E",
  },
  {
    id: "5",
    type: "competition",
    title: "Hackathon EduLearn 2026",
    date: new Date(2026, 2, 20), // 20/3/2026
    startTime: "08:00",
    endTime: "20:00",
    location: "ĐHBK TP.HCM",
    isOnline: false,
    attendees: 200,
    avatars: [
      "https://randomuser.me/api/portraits/women/12.jpg",
      "https://randomuser.me/api/portraits/men/13.jpg",
      "https://randomuser.me/api/portraits/women/14.jpg",
    ],
    accentColor: "#F59E0B",
  },
  // Sự kiện đã qua
  {
    id: "6",
    type: "workshop",
    title: "React Native Basics",
    date: new Date(2026, 0, 10), // 10/1/2026
    startTime: "09:00",
    endTime: "12:00",
    location: "Online (Zoom)",
    isOnline: true,
    attendees: 56,
    avatars: [
      "https://randomuser.me/api/portraits/men/15.jpg",
      "https://randomuser.me/api/portraits/women/16.jpg",
    ],
    accentColor: "#8B5CF6",
  },
  {
    id: "7",
    type: "talkshow",
    title: "Career in Tech 2026",
    date: new Date(2026, 0, 20), // 20/1/2026
    startTime: "14:00",
    endTime: "16:00",
    location: "Hội trường B, HN",
    isOnline: false,
    attendees: 80,
    avatars: [
      "https://randomuser.me/api/portraits/women/17.jpg",
      "https://randomuser.me/api/portraits/men/18.jpg",
      "https://randomuser.me/api/portraits/women/19.jpg",
    ],
    accentColor: "#EC4899",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const scrollY = useSharedValue(0);

  const getFilteredEvents = () => {
    const now = new Date();
    if (activeTab === "past") {
      return mockEvents.filter((e) => e.date < now);
    }
    return mockEvents.filter((e) => e.date >= now);
  };

  const handleEventPress = (event: EventData) => {
    setSelectedEvent(event);
    setModalVisible(true);
  };

  const handleJoinPress = (event: EventData) => {
    console.log("Join event:", event.id);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleModalHide = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = getFilteredEvents();

  const listData = useMemo(() => {
    return [
      { type: "search_bar", id: "sticky_search" },
      { type: "filter_tabs", id: "filter_tabs" },
      ...filteredEvents.map((e) => ({ ...e, type: "event_item" })),
    ];
  }, [filteredEvents]);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const isScrolled = scrollY.value > 0;
    return {
      shadowOpacity: Platform.OS === "ios" ? withTiming(isScrolled ? 0.08 : 0) : 0,
      elevation: Platform.OS === "android" ? withTiming(isScrolled ? 4 : 0) : 0,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      shadowColor: "#000",
      backgroundColor: "#F8FAFC",
      zIndex: 10,
    };
  });

  const renderItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case "search_bar":
        return (
          <Animated.View
            style={animatedHeaderStyle}
            className="px-4 pb-2 mb-2"
          >
            <SearchBar placeholder="Tìm kiếm sự kiện, workshop..." />
          </Animated.View>
        );
      case "filter_tabs":
        return (
          <View className="px-4 pb-4">
            <EventTabs
              tabs={filterTabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </View>
        );
      case "event_item":
        return (
          <View className="px-4">
            <EventCard
              event={item}
              onPress={handleEventPress}
              onJoinPress={handleJoinPress}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView
      className="flex-1 bg-slate-50"
      edges={["left", "right", "top"]}
    >
      <Animated.FlatList
        data={listData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          paddingBottom: 16,
        }}
        ItemSeparatorComponent={({ leadingItem }) => {
          if (leadingItem.type === "event_item") return <View className="h-3" />;
          return null;
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          filteredEvents.length === 0 ? (
            <View className="flex-1 items-center justify-center py-20">
              <Text className="text-slate-400 text-base">Không có sự kiện nào</Text>
            </View>
          ) : null
        }
      />

      <EventDetailModal
        isVisible={isModalVisible}
        event={selectedEvent}
        onClose={handleCloseModal}
        onJoin={handleJoinPress}
        onModalHide={handleModalHide}
      />
    </SafeAreaView>
  );
}
