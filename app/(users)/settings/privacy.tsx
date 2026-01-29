import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

export default function Privacy() {
    const [profilePublic, setProfilePublic] = useState(true);
    const [showProgress, setShowProgress] = useState(true);
    const [marketingData, setMarketingData] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-[#3B82F6]" edges={["top", "left", "right"]}>
            <View className="flex-1 bg-white">
                <DetailHeader title="Quyền riêng tư" />

                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ padding: 16, gap: 20 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View className="bg-indigo-50 p-5 rounded-3xl border border-indigo-200 flex-row items-center">
                        <View className="w-12 h-12 rounded-full bg-indigo-500 items-center justify-center">
                            <Ionicons name="shield-checkmark" size={24} color="#FFF" />
                        </View>
                        <View className="flex-1 ml-4">
                            <Text className="text-base font-bold text-indigo-900">Quyền lợi của bạn</Text>
                            <Text className="text-xs text-indigo-700 leading-4">Dữ liệu của bạn được bảo vệ theo tiêu chuẩn quốc tế GDPR và nghị định 13/2023/NĐ-CP.</Text>
                        </View>
                    </View>

                    {/* Visibility Section */}
                    <View className="gap-3">
                        <Text className="text-sm font-bold text-slate-800 ml-1">Chế độ hiển thị</Text>

                        <View className="bg-white rounded-2xl border border-slate-200 p-4 flex-row items-center justify-between">
                            <View className="flex-1 mr-4">
                                <Text className="text-base font-semibold text-slate-800">Hồ sơ công khai</Text>
                                <Text className="text-xs text-slate-500">Người khác có thể tìm thấy bạn qua tên hoặc email</Text>
                            </View>
                            <Switch
                                value={profilePublic}
                                onValueChange={setProfilePublic}
                                trackColor={{ false: "#E2E8F0", true: "#6366F1" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>

                        <View className="bg-white rounded-2xl border border-slate-200 p-4 flex-row items-center justify-between">
                            <View className="flex-1 mr-4">
                                <Text className="text-base font-semibold text-slate-800">Tiến độ học tập</Text>
                                <Text className="text-xs text-slate-500">Hiển thị huy hiệu và thứ hạng trên bảng xếp hạng</Text>
                            </View>
                            <Switch
                                value={showProgress}
                                onValueChange={setShowProgress}
                                trackColor={{ false: "#E2E8F0", true: "#6366F1" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                    </View>

                    {/* Data Permissions Section */}
                    <View className="gap-3">
                        <Text className="text-sm font-bold text-slate-800 ml-1">Quyền truy cập dữ liệu</Text>

                        <View className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                            <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50" activeOpacity={0.7}>
                                <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Ionicons name="camera-outline" size={20} color="#64748B" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-slate-800">Máy ảnh</Text>
                                    <Text className="text-xs text-green-500">Đã cho phép • Chỉ khi dùng</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50" activeOpacity={0.7}>
                                <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Ionicons name="mic-outline" size={20} color="#64748B" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-slate-800">Microphone</Text>
                                    <Text className="text-xs text-slate-400">Chưa cấp quyền</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center p-4" activeOpacity={0.7}>
                                <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Ionicons name="images-outline" size={20} color="#64748B" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-semibold text-slate-800">Thư viện ảnh</Text>
                                    <Text className="text-xs text-slate-400">Chỉ chọn một số ảnh</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Marketing Section */}
                    <View className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                        <View className="flex-row items-center justify-between mb-2">
                            <Text className="text-base font-bold text-slate-800">Cá nhân hóa quảng cáo</Text>
                            <Switch
                                value={marketingData}
                                onValueChange={setMarketingData}
                                trackColor={{ false: "#E2E8F0", true: "#6366F1" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                        <Text className="text-xs text-slate-500 leading-4">
                            Cho phép ứng dụng sử dụng dữ liệu ẩn danh để đề xuất các khóa học phù hợp hơn với sở thích của bạn.
                        </Text>
                    </View>

                    <TouchableOpacity className="py-4 items-center">
                        <Text className="text-sm font-bold text-indigo-600 underline">Đọc Chính sách bảo mật chi tiết</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
