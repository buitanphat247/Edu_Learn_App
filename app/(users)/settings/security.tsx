import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

export default function Security() {
    const [useFaceID, setUseFaceID] = useState(true);
    const [twoFactor, setTwoFactor] = useState(false);

    return (
        <SafeAreaView className="flex-1 bg-[#3B82F6]" edges={["top", "left", "right"]}>
            <View className="flex-1 bg-white">
                <DetailHeader title="Bảo mật" />

                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ padding: 16, gap: 16 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Section: Authentication */}
                    <View className="gap-2">
                        <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Xác thực</Text>

                        <TouchableOpacity
                            className="flex-row items-center p-4 bg-white rounded-2xl border border-slate-200"
                            activeOpacity={0.7}
                        >
                            <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center mr-4">
                                <Ionicons name="key-outline" size={20} color="#3B82F6" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-bold text-slate-800">Thay đổi mật khẩu</Text>
                                <Text className="text-xs text-slate-500">Cập nhật mật khẩu định kỳ để an toàn hơn</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                        </TouchableOpacity>

                        <View className="flex-row items-center p-4 bg-white rounded-2xl border border-slate-200">
                            <View className="w-10 h-10 rounded-full bg-indigo-50 items-center justify-center mr-4">
                                <Ionicons name="scan-outline" size={20} color="#6366F1" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-bold text-slate-800">FaceID / Vân tay</Text>
                                <Text className="text-xs text-slate-500">Đăng nhập nhanh không cần mật khẩu</Text>
                            </View>
                            <Switch
                                value={useFaceID}
                                onValueChange={setUseFaceID}
                                trackColor={{ false: "#E2E8F0", true: "#3B82F6" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>

                        <View className="flex-row items-center p-4 bg-white rounded-2xl border border-slate-200">
                            <View className="w-10 h-10 rounded-full bg-purple-50 items-center justify-center mr-4">
                                <Ionicons name="shield-checkmark-outline" size={20} color="#A855F7" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-bold text-slate-800">Xác thực 2 lớp (2FA)</Text>
                                <Text className="text-xs text-slate-500">Thêm một lớp bảo mật qua tin nhắn/email</Text>
                            </View>
                            <Switch
                                value={twoFactor}
                                onValueChange={setTwoFactor}
                                trackColor={{ false: "#E2E8F0", true: "#3B82F6" }}
                                thumbColor="#FFFFFF"
                            />
                        </View>
                    </View>

                    {/* Section: Devices */}
                    <View className="gap-2 mt-2">
                        <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Thiết bị & Đăng nhập</Text>

                        <View className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                            <TouchableOpacity className="flex-row items-center p-4 border-b border-slate-50" activeOpacity={0.7}>
                                <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Ionicons name="phone-portrait-outline" size={20} color="#64748B" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-bold text-slate-800">iPhone 14 Pro (Hiện tại)</Text>
                                    <Text className="text-xs text-green-500 font-medium">Đang hoạt động • TP. Hồ Chí Minh</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center p-4" activeOpacity={0.7}>
                                <View className="w-10 h-10 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Ionicons name="desktop-outline" size={20} color="#64748B" />
                                </View>
                                <View className="flex-1">
                                    <Text className="text-base font-bold text-slate-800">MacBook M1</Text>
                                    <Text className="text-xs text-slate-400">Đăng nhập từ 2 ngày trước • Hà Nội</Text>
                                </View>
                                <TouchableOpacity className="px-3 py-1.5 bg-red-50 rounded-lg">
                                    <Text className="text-xs font-bold text-red-500">Đăng xuất</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Section: Danger Zone */}
                    <View className="gap-2 mt-2">
                        <Text className="text-xs font-bold text-red-400 uppercase tracking-widest ml-1">Vùng nguy hiểm</Text>
                        <TouchableOpacity
                            className="flex-row items-center p-4 bg-red-50 rounded-2xl border border-red-100"
                            activeOpacity={0.7}
                        >
                            <View className="w-10 h-10 rounded-full bg-white items-center justify-center mr-4">
                                <Ionicons name="trash-outline" size={20} color="#EF4444" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-bold text-red-600">Xóa tài khoản</Text>
                                <Text className="text-xs text-red-400">Hành động này không thể hoàn tác</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
