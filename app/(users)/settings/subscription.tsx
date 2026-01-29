import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

export default function Subscription() {
    const currentPlan = {
        name: "Gói Premium",
        price: "199.000đ",
        period: "tháng",
        expiryDate: "25/12/2026",
        status: "Active",
    };

    const benefits = [
        "Truy cập toàn bộ khóa học",
        "Hỗ trợ 1:1 từ giáo viên",
        "Tải xuống bài học offline",
        "Chứng chỉ hoàn thành khóa học",
        "Không chứa quảng cáo",
    ];

    return (
        <SafeAreaView className="flex-1 bg-[#3B82F6]" edges={["top", "left", "right"]}>
            <View className="flex-1 bg-white">
                <DetailHeader title="Gói học tập" />

                <ScrollView
                    className="flex-1"
                    contentContainerStyle={{ padding: 16, gap: 24 }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Current Plan Card */}
                    <View className="bg-[#1E293B] rounded-[32px] p-6 shadow-xl relative overflow-hidden">
                        <View className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full" />
                        <View className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/10 rounded-full" />

                        <View className="flex-row items-center justify-between mb-6">
                            <View className="w-12 h-12 rounded-2xl bg-blue-500 items-center justify-center">
                                <Ionicons name="ribbon" size={28} color="#FFF" />
                            </View>
                            <View className="bg-green-500/20 px-3 py-1 rounded-full">
                                <Text className="text-green-400 text-xs font-bold uppercase tracking-wider">Đang hoạt động</Text>
                            </View>
                        </View>

                        <View className="mb-6">
                            <Text className="text-white/60 text-sm font-medium mb-1">Gói hiện tại</Text>
                            <Text className="text-white text-3xl font-bold">{currentPlan.name}</Text>
                        </View>

                        <View className="flex-row items-center justify-between border-t border-white/10 pt-6">
                            <View>
                                <Text className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Ngày hết hạn</Text>
                                <Text className="text-white font-semibold">{currentPlan.expiryDate}</Text>
                            </View>
                            <TouchableOpacity className="bg-white px-5 py-2.5 rounded-xl">
                                <Text className="text-slate-900 font-bold text-sm">Gia hạn</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Benefits Section */}
                    <View className="gap-4">
                        <Text className="text-lg font-bold text-slate-800">Quyền lợi của bạn</Text>
                        <View className="gap-3">
                            {benefits.map((benefit, index) => (
                                <View key={index} className="flex-row items-center">
                                    <View className="w-6 h-6 rounded-full bg-blue-50 items-center justify-center mr-3">
                                        <Ionicons name="checkmark" size={14} color="#3B82F6" />
                                    </View>
                                    <Text className="text-slate-600 text-sm font-medium">{benefit}</Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Upgrade Section */}
                    <View className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
                        <Text className="text-xl font-bold text-slate-800 mb-2">Gói Pro thường niên</Text>
                        <Text className="text-slate-500 text-sm mb-6 leading-5">Khám phá toàn bộ tiềm năng với gói tiết kiệm nhất dành cho học viên trung thành.</Text>

                        <View className="flex-row items-baseline mb-6">
                            <Text className="text-3xl font-bold text-slate-900">1.490.000đ</Text>
                            <Text className="text-slate-400 text-sm ml-1">/ năm</Text>
                            <View className="ml-3 bg-red-100 px-2 py-1 rounded-lg">
                                <Text className="text-red-600 text-[10px] font-black uppercase">-35%</Text>
                            </View>
                        </View>

                        <TouchableOpacity className="bg-blue-600 w-full py-4 rounded-2xl shadow-lg shadow-blue-200 items-center">
                            <Text className="text-white font-bold text-base">Nâng cấp ngay</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Billing Info */}
                    <View className="gap-4 mb-4">
                        <Text className="text-lg font-bold text-slate-800">Thông tin thanh toán</Text>
                        <View className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-50">
                            <TouchableOpacity className="flex-row items-center justify-between p-4" activeOpacity={0.7}>
                                <View className="flex-row items-center">
                                    <Ionicons name="card-outline" size={20} color="#64748B" />
                                    <Text className="text-slate-700 font-medium ml-3">Phương thức thanh toán</Text>
                                </View>
                                <View className="flex-row items-center">
                                    <Text className="text-slate-400 text-xs mr-2">Visa **** 1234</Text>
                                    <Ionicons name="chevron-forward" size={16} color="#CBD5E1" />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-row items-center justify-between p-4" activeOpacity={0.7}>
                                <View className="flex-row items-center">
                                    <Ionicons name="receipt-outline" size={20} color="#64748B" />
                                    <Text className="text-slate-700 font-medium ml-3">Lịch sử giao dịch</Text>
                                </View>
                                <Ionicons name="chevron-forward" size={16} color="#CBD5E1" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
