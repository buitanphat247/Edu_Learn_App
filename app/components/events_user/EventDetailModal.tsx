import React, { useEffect } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { EventData } from "./EventCard";

interface EventDetailModalProps {
  isVisible: boolean;
  event: EventData | null;
  onClose: () => void;
  onJoin: (event: EventData) => void;
  onModalHide?: () => void;
}

const ANIMATION_DURATION = 300;

export default function EventDetailModal({
  isVisible,
  event,
  onClose,
  onJoin,
  onModalHide,
}: EventDetailModalProps) {
  const translateY = useSharedValue(1000);
  const backdropOpacity = useSharedValue(0);

  useEffect(() => {
    if (isVisible) {
      backdropOpacity.value = withTiming(1, { duration: ANIMATION_DURATION });
      translateY.value = withTiming(0, { duration: ANIMATION_DURATION });
    } else {
      backdropOpacity.value = withTiming(0, { duration: ANIMATION_DURATION });
      translateY.value = withTiming(1000, { duration: ANIMATION_DURATION }, () => {
        if (onModalHide) {
          runOnJS(onModalHide)();
        }
      });
    }
  }, [isVisible]);

  const backdropStyle = useAnimatedStyle(() => ({
    opacity: backdropOpacity.value * 0.5,
  }));

  const contentStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  if (!isVisible && !event) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents={isVisible ? "auto" : "none"}>
      {/* Backdrop */}
      <Animated.View style={[styles.backdrop, backdropStyle]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
      </Animated.View>

      {/* Content */}
      <Animated.View style={[styles.contentContainer, contentStyle]}>
        {event && (
          <View className="bg-white rounded-t-3xl px-4 py-4">
            {/* Swipe Handle - Visual Indicator */}
            <View className="items-center pb-6">
              <View className="w-12 h-1.5 bg-slate-300 rounded-full" />
            </View>
            {/* Header */}
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-1 mr-4">
                <Text className="text-xs font-bold text-violet-500 uppercase tracking-widest mb-1">
                  {event.type.toUpperCase()}
                </Text>
                <Text className="text-2xl font-bold text-slate-800">
                  {event.title}
                </Text>
              </View>
              <TouchableOpacity
                onPress={onClose}
                className="bg-slate-100 p-2 rounded-full"
              >
                <Text className="text-slate-500 font-bold text-lg px-2">✕</Text>
              </TouchableOpacity>
            </View>

            {/* Info Rows */}
            <View className="space-y-5 mb-8">
              <View className="flex-row items-start">
                <View className="w-10 h-10 rounded-full bg-violet-50 items-center justify-center mr-4 mt-0.5">
                  <Text className="text-lg">📅</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm text-slate-500 mb-0.5">Thời gian</Text>
                  <Text className="text-base font-semibold text-slate-800">
                    {event.startTime} - {event.endTime}
                  </Text>
                  <Text className="text-base font-semibold text-slate-800">
                    {event.date.toLocaleDateString("vi-VN")}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-start">
                <View className="w-10 h-10 rounded-full bg-violet-50 items-center justify-center mr-4 mt-0.5">
                  <Text className="text-lg">📍</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm text-slate-500 mb-0.5">Địa điểm</Text>
                  <Text className="text-base font-semibold text-slate-800">
                    {event.location}
                  </Text>
                </View>
              </View>

              <View className="flex-row items-start">
                <View className="w-10 h-10 rounded-full bg-violet-50 items-center justify-center mr-4 mt-0.5">
                  <Text className="text-lg">👥</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-sm text-slate-500 mb-0.5">
                    Người tham gia
                  </Text>
                  <Text className="text-base font-semibold text-slate-800">
                    {event.attendees} người đã đăng ký
                  </Text>
                </View>
              </View>
            </View>

            {/* Description */}
            <View>
              <Text className="text-base font-bold text-slate-800 mb-2">
                Thông tin chi tiết
              </Text>
              <Text className="text-slate-500 leading-6 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                quae impedit quam dolor magni aut illo perferendis sapiente. Fugit
                incidunt sunt voluptatum ex accusamus deserunt dolorum consequatur,
                reprehenderit temporibus deleniti?
              </Text>
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
