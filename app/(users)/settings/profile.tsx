import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

export default function Profile() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Welcome Style Profile Card */}
        <View className="mt-4 px-4">
          <View className="flex-row justify-between items-center px-5 py-5 bg-white rounded-2xl shadow-sm border border-slate-200">
            <View className="flex-1">
              <Text className="text-sm text-slate-500 mb-1">
                Chào buổi chiều,
              </Text>
              <Text className="text-2xl font-bold text-slate-800 mb-2">
                Nguyễn Văn A 👋
              </Text>
              <View className="flex-row items-center bg-sky-100 px-2.5 py-1 rounded-xl self-start">
                <Ionicons name="person-outline" size={14} color="#0EA5E9" />
                <Text className="text-xs text-sky-500 font-semibold ml-1">
                  Học viên
                </Text>
              </View>
            </View>
            <View className="relative">
              <Image
                source={{ uri: AVATAR_URL }}
                className="w-16 h-16 rounded-full border-[3px] border-sky-500"
              />
              <View className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
            </View>
          </View>
        </View>

        {/* Stats */}
        <View className="flex-row justify-between px-4 mt-6">
          <View className="items-center justify-center bg-blue-50 w-[30%] py-4 rounded-2xl border border-blue-100">
            <Text className="text-blue-600 text-xl font-bold">12</Text>
            <Text className="text-blue-400 text-xs mt-1">Khóa học</Text>
          </View>
          <View className="items-center justify-center bg-orange-50 w-[30%] py-4 rounded-2xl border border-orange-100">
            <Text className="text-orange-600 text-xl font-bold">5</Text>
            <Text className="text-orange-400 text-xs mt-1">Chứng chỉ</Text>
          </View>
          <View className="items-center justify-center bg-purple-50 w-[30%] py-4 rounded-2xl border border-purple-100">
            <Text className="text-purple-600 text-xl font-bold">850</Text>
            <Text className="text-purple-400 text-xs mt-1">Điểm XP</Text>
          </View>
        </View>

        {/* Detail Info */}
        <View className="px-4 mt-8">
          <Text className="text-lg font-bold text-slate-800 mb-3">
            Thông tin chi tiết
          </Text>
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            {/* Email */}
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-slate-100 rounded-full items-center justify-center mr-3">
                <Ionicons name="mail-outline" size={20} color="#64748B" />
              </View>
              <View>
                <Text className="text-xs text-slate-400">Email</Text>
                <Text className="text-sm text-slate-700 font-medium">
                  nguyen.van.a@example.com
                </Text>
              </View>
            </View>
            {/* Phone */}
            <View className="flex-row items-center mb-4">
              <View className="w-10 h-10 bg-slate-100 rounded-full items-center justify-center mr-3">
                <Ionicons name="call-outline" size={20} color="#64748B" />
              </View>
              <View>
                <Text className="text-xs text-slate-400">Số điện thoại</Text>
                <Text className="text-sm text-slate-700 font-medium">
                  0901234567
                </Text>
              </View>
            </View>
            {/* Date */}
            <View className="flex-row items-center">
              <View className="w-10 h-10 bg-slate-100 rounded-full items-center justify-center mr-3">
                <Ionicons name="calendar-outline" size={20} color="#64748B" />
              </View>
              <View>
                <Text className="text-xs text-slate-400">Ngày tham gia</Text>
                <Text className="text-sm text-slate-700 font-medium">
                  20/01/2024
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Intro */}
        <View className="px-4 mt-6 mb-10">
          <Text className="text-lg font-bold text-slate-800 mb-3">
            Giới thiệu
          </Text>
          <View className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
            <Text className="text-slate-600 leading-6 text-sm">
              Xin chào, mình là Nguyễn Văn A. Mình rất đam mê lập trình và đang
              theo học các khóa học về React Native và Node.js. Mục tiêu của
              mình là trở thành một Fullstack Developer chuyên nghiệp trong
              tương lai gần.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
