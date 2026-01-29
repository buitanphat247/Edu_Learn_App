import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

interface NotificationSetting {
    id: string;
    title: string;
    description: string;
    icon: keyof typeof Ionicons.glyphMap;
    color: string;
    bgColor: string;
}

const settings: NotificationSetting[] = [
    {
        id: "news",
        title: "Tin tức & Cập nhật",
        description: "Thông báo về các bài viết mới, tính năng ứng dụng",
        icon: "newspaper-outline",
        color: "#F97316",
        bgColor: "bg-orange-50",
    },
    {
        id: "learning",
        title: "Nhắc nhở học tập",
        description: "Nhắc nhở khi đến giờ học hoặc có bài tập mới",
        icon: "school-outline",
        color: "#3B82F6",
        bgColor: "bg-blue-50",
    },
    {
        id: "events",
        title: "Sự kiện & Hội thảo",
        description: "Thông báo về các webinar, sự kiện sắp diễn ra",
        icon: "calendar-outline",
        color: "#10B981",
        bgColor: "bg-emerald-50",
    },
    {
        id: "system",
        title: "Thông báo hệ thống",
        description: "Bảo trì, cập nhật ứng dụng quan trọng",
        icon: "settings-outline",
        color: "#64748B",
        bgColor: "bg-slate-50",
    },
];

export default function Notifications() {
    const [enabledSettings, setEnabledSettings] = useState<Record<string, boolean>>({
        news: true,
        learning: true,
        events: false,
        system: true,
    });

    const toggleSetting = (id: string) => {
        setEnabledSettings((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <SafeAreaView className="flex-1 bg-[#3B82F6]" edges={["top", "left", "right"]}>
            <View className="flex-1 bg-white">
                <DetailHeader title="Thông báo" />

                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ padding: 16, gap: 8 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="bg-orange-50 p-4 rounded-2xl flex-row items-start border border-orange-100 mb-2">
                        <Ionicons name="notifications" size={24} color="#F97316" />
                        <Text className="flex-1 ml-3 text-sm text-orange-700 leading-5">
                            Tùy chỉnh các loại thông báo bạn muốn nhận. Chúng tôi sẽ cố gắng chỉ gửi những thông tin thực sự hữu ích đến bạn.
                        </Text>
                    </View>

                    {settings.map((item) => (
                        <View
                            key={item.id}
                            className="flex-row items-center p-4 bg-white rounded-2xl border border-slate-200"
                        >
                            <View className={`w-12 h-12 rounded-full ${item.bgColor} items-center justify-center mr-4`}>
                                <Ionicons name={item.icon} size={22} color={item.color} />
                            </View>

                            <View className="flex-1 mr-3">
                                <Text className="text-base font-bold text-slate-800 mb-0.5">{item.title}</Text>
                                <Text className="text-xs text-slate-500 leading-4">{item.description}</Text>
                            </View>

                            <Switch
                                value={enabledSettings[item.id]}
                                onValueChange={() => toggleSetting(item.id)}
                                trackColor={{ false: "#E2E8F0", true: "#F97316" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                    ))}

                    <View className="mt-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                        <Text className="text-sm font-bold text-slate-800 mb-2">Cài đặt nâng cao</Text>
                        <Text className="text-xs text-slate-500 leading-5 mb-4">
                            Bạn cũng có thể quản lý cài đặt thông báo của ứng dụng AIO trong phần Cài đặt của thiết bị.
                        </Text>

                        <View className="flex-row items-center justify-between border-t border-slate-200 pt-4">
                            <Text className="text-sm font-medium text-slate-700">Âm báo & Rung</Text>
                            <Ionicons name="chevron-forward" size={18} color="#94A3B8" />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
