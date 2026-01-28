import React from "react";
import { Text, View } from "react-native";

export default function ProfileAbout() {
    return (
        <View className="mt-8 px-4 mb-8">
            <Text className="text-base font-semibold text-slate-800 mb-3">
                Giới thiệu
            </Text>
            <View className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                <Text className="text-slate-600 leading-6 text-sm">
                    Xin chào, mình là Nguyễn Văn A. Mình rất đam mê lập trình và đang theo
                    học các khóa học về React Native và Node.js. Mục tiêu của mình là trở
                    thành một Fullstack Developer chuyên nghiệp trong tương lai gần.
                </Text>
            </View>
        </View>
    );
}
