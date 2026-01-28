import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["left", "right"]}>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Info */}
        <View className="items-center py-2 px-4 ">
          <View className="relative">
            <Image
              source={{ uri: AVATAR_URL }}
              className="w-24 h-24 rounded-full border-4 border-slate-50"
            />
            <View className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white" />
          </View>
          <Text className="text-2xl font-bold text-slate-800 mt-3">
            Nguyễn Văn A
          </Text>
          <Text className="text-slate-500">Học viên xuất sắc</Text>

          <View className="flex-row gap-4 mt-6 w-full px-4">
            <View className="flex-1 bg-blue-50 p-4 rounded-2xl items-center">
              <Text className="text-2xl font-bold text-blue-600">12</Text>
              <Text className="text-xs text-blue-600/80 font-medium mt-1">
                Khóa học
              </Text>
            </View>
            <View className="flex-1 bg-orange-50 p-4 rounded-2xl items-center">
              <Text className="text-2xl font-bold text-orange-600">5</Text>
              <Text className="text-xs text-orange-600/80 font-medium mt-1">
                Chứng chỉ
              </Text>
            </View>
            <View className="flex-1 bg-purple-50 p-4 rounded-2xl items-center">
              <Text className="text-2xl font-bold text-purple-600">850</Text>
              <Text className="text-xs text-purple-600/80 font-medium mt-1">
                Điểm XP
              </Text>
            </View>
          </View>
        </View>

        {/* Detailed Info Section */}
        <View className="px-4 mt-2">
          <Text className="text-lg font-bold text-slate-800 mb-3">
            Thông tin chi tiết
          </Text>

          <View className="bg-slate-50 rounded-2xl p-4 gap-4">
            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-slate-200 items-center justify-center">
                <Ionicons name="mail-outline" size={20} color="#64748B" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-xs text-slate-500 mb-0.5">Email</Text>
                <Text className="text-sm font-medium text-slate-800">
                  nguyen.van.a@example.com
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-slate-200 items-center justify-center">
                <Ionicons name="call-outline" size={20} color="#64748B" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-xs text-slate-500 mb-0.5">
                  Số điện thoại
                </Text>
                <Text className="text-sm font-medium text-slate-800">
                  0901234567
                </Text>
              </View>
            </View>

            <View className="flex-row items-center">
              <View className="w-10 h-10 rounded-full bg-slate-200 items-center justify-center">
                <Ionicons name="calendar-outline" size={20} color="#64748B" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-xs text-slate-500 mb-0.5">
                  Ngày tham gia
                </Text>
                <Text className="text-sm font-medium text-slate-800">
                  20/01/2024
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View className="px-4 mt-6 pb-10">
          <Text className="text-lg font-bold text-slate-800 mb-3">
            Giới thiệu
          </Text>
          <Text className="text-slate-600 leading-6 bg-slate-50 p-4 rounded-2xl">
            Xin chào, mình là Nguyễn Văn A. Mình rất đam mê lập trình và đang
            theo học các khóa học về React Native và Node.js. Mục tiêu của mình
            là trở thành một Fullstack Developer chuyên nghiệp trong tương lai
            gần.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
