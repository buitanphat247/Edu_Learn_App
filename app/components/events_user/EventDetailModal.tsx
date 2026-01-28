import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { EventData } from "./EventCard";

interface EventDetailModalProps {
  isVisible: boolean;
  event: EventData | null;
  onClose: () => void;
  onJoin: (event: EventData) => void;
}

export default function EventDetailModal({
  isVisible,
  event,
  onClose,
  onJoin,
}: EventDetailModalProps) {
  if (!event) return null;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={{ margin: 0, justifyContent: "flex-end" }}
      propagateSwipe
    >
      <View className="bg-white rounded-t-3xl p-6 ">
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
        <View className="mb-6">
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

        {/* Action Button */}
        <View className="pt-2">
          <TouchableOpacity
            className="w-full bg-violet-600 py-4 rounded-xl items-center shadow-lg shadow-violet-200"
            onPress={() => onJoin(event)}
          >
            <Text className="text-white font-bold text-lg">Tham gia ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
