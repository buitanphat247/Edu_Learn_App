import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

interface SyncOption {
    id: string;
    icon: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    iconBgColor: string;
    title: string;
    subtitle: string;
    isToggle?: boolean;
}

const syncOptions: SyncOption[] = [
    {
        id: "auto_sync",
        icon: "sync-outline",
        iconColor: "#06B6D4",
        iconBgColor: "bg-cyan-50",
        title: "Tự động đồng bộ",
        subtitle: "Đồng bộ khi có kết nối WiFi",
        isToggle: true,
    },
    {
        id: "sync_progress",
        icon: "trending-up-outline",
        iconColor: "#22C55E",
        iconBgColor: "bg-green-50",
        title: "Tiến độ học tập",
        subtitle: "Điểm số, bài đã hoàn thành",
        isToggle: true,
    },
    {
        id: "sync_notes",
        icon: "document-text-outline",
        iconColor: "#F59E0B",
        iconBgColor: "bg-amber-50",
        title: "Ghi chú cá nhân",
        subtitle: "Ghi chú bài học, đánh dấu",
        isToggle: true,
    },
    {
        id: "sync_offline",
        icon: "download-outline",
        iconColor: "#8B5CF6",
        iconBgColor: "bg-violet-50",
        title: "Bài học offline",
        subtitle: "Tải xuống để học không cần mạng",
        isToggle: true,
    },
];

export default function DataSync() {
    const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({
        auto_sync: true,
        sync_progress: true,
        sync_notes: true,
        sync_offline: false,
    });
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSyncTime, setLastSyncTime] = useState("Hôm nay, 14:30");

    const handleToggle = (id: string) => {
        setToggleStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleSyncNow = async () => {
        setIsSyncing(true);
        // Simulate sync process
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSyncing(false);
        setLastSyncTime("Vừa xong");
    };

    return (
        <SafeAreaView
            className="bg-white flex-1"
            edges={["left", "right", "top"]}
        >
            <DetailHeader title="Đồng bộ dữ liệu" />

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingTop: 8,
                    paddingBottom: 16,
                    gap: 16,
                }}
            >
                {/* Sync Status Card */}
                <View className="bg-white rounded-2xl p-5 border border-slate-100">
                    <View className="flex-row items-center justify-between mb-4">
                        <View className="flex-row items-center">
                            <View className="w-12 h-12 rounded-full bg-cyan-50 items-center justify-center mr-4">
                                <Ionicons name="cloud-done" size={24} color="#06B6D4" />
                            </View>
                            <View>
                                <Text className="text-base font-semibold text-slate-800">
                                    Trạng thái đồng bộ
                                </Text>
                                <Text className="text-sm text-slate-500">
                                    Cập nhật lần cuối: {lastSyncTime}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Sync Now Button */}
                    <TouchableOpacity
                        onPress={handleSyncNow}
                        disabled={isSyncing}
                        className={`py-3 rounded-xl items-center justify-center flex-row ${isSyncing ? "bg-slate-100" : "bg-cyan-500"
                            }`}
                        activeOpacity={0.8}
                    >
                        {isSyncing ? (
                            <>
                                <ActivityIndicator size="small" color="#06B6D4" />
                                <Text className="text-cyan-600 font-semibold ml-2">
                                    Đang đồng bộ...
                                </Text>
                            </>
                        ) : (
                            <>
                                <Ionicons name="sync" size={18} color="#fff" />
                                <Text className="text-white font-semibold ml-2">
                                    Đồng bộ ngay
                                </Text>
                            </>
                        )}
                    </TouchableOpacity>
                </View>


                <View className="gap-2">

                    {/* Section Title */}
                    <Text className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                        Tùy chọn đồng bộ
                    </Text>

                    {/* Sync Options */}
                    {syncOptions.map((option) => (
                        <View
                            key={option.id}
                            className="bg-white rounded-2xl p-4 border border-slate-100 flex-row items-center justify-between"
                        >
                            <View className="flex-row items-center flex-1">
                                <View
                                    className={`w-12 h-12 rounded-full items-center justify-center mr-4 ${option.iconBgColor}`}
                                >
                                    <Ionicons name={option.icon} size={22} color={option.iconColor} />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-slate-800 mb-0.5">
                                        {option.title}
                                    </Text>
                                    <Text className="text-sm text-slate-500">{option.subtitle}</Text>
                                </View>
                            </View>
                            {option.isToggle && (
                                <Switch
                                    value={toggleStates[option.id]}
                                    onValueChange={() => handleToggle(option.id)}
                                    trackColor={{ false: "#E2E8F0", true: "#06B6D4" }}
                                    thumbColor="#fff"
                                />
                            )}
                        </View>
                    ))}
                </View>

                {/* Storage Info */}
                <View className="p-4 bg-slate-50 rounded-2xl">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-sm font-semibold text-slate-700">Dung lượng sử dụng</Text>
                        <Text className="text-sm font-bold text-cyan-600">128 MB / 1 GB</Text>
                    </View>
                    {/* Progress Bar */}
                    <View className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <View className="h-full w-[13%] bg-cyan-500 rounded-full" />
                    </View>
                    <Text className="text-xs text-slate-500 mt-2">
                        Dữ liệu offline và ghi chú được lưu trữ trên thiết bị
                    </Text>
                </View>

                {/* Clear Data Button */}
                <TouchableOpacity
                    className="py-4 rounded-2xl items-center justify-center flex-row border border-red-200 bg-red-50"
                    activeOpacity={0.7}
                >
                    <Ionicons name="trash-outline" size={18} color="#EF4444" />
                    <Text className="text-red-500 font-semibold ml-2">Xóa dữ liệu đã lưu</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}
