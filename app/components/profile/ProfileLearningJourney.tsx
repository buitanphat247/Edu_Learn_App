import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ProfileLearningJourney() {
    return (
        <View className="mt-4" style={{ paddingHorizontal: 16, gap: 8 }}>
            <Text className="text-base font-semibold text-slate-800">
                Hành trình học tập
            </Text>

            <View style={{ gap: 12 }}>
                <TouchableOpacity className="flex-row items-center bg-white rounded-2xl px-4 py-4 border border-slate-100 shadow-sm">
                    <View className="w-10 h-10 rounded-full bg-amber-50 items-center justify-center mr-3">
                        <Ionicons name="compass-outline" size={22} color="#F59E0B" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-sm font-semibold text-slate-800">
                            Lộ trình học cá nhân
                        </Text>
                        <Text className="text-xs text-slate-500 mt-1" numberOfLines={1}>
                            Frontend, Mobile, Backend · Đang học 3/10 module
                        </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center bg-white rounded-2xl px-4 py-4 border border-slate-100 shadow-sm">
                    <View className="w-10 h-10 rounded-full bg-rose-50 items-center justify-center mr-3">
                        <Ionicons name="bookmark-outline" size={22} color="#FB7185" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-sm font-semibold text-slate-800">
                            Khóa học đã lưu
                        </Text>
                        <Text className="text-xs text-slate-500 mt-1" numberOfLines={1}>
                            18 khóa học yêu thích
                        </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>

                <TouchableOpacity className="flex-row items-center bg-white rounded-2xl px-4 py-4 border border-slate-100 shadow-sm">
                    <View className="w-10 h-10 rounded-full bg-sky-50 items-center justify-center mr-3">
                        <Ionicons name="calendar-outline" size={22} color="#0EA5E9" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-sm font-semibold text-slate-800">
                            Lịch học & nhắc nhở
                        </Text>
                        <Text className="text-xs text-slate-500 mt-1" numberOfLines={1}>
                            3 buổi học sắp tới trong tuần này
                        </Text>
                    </View>
                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
