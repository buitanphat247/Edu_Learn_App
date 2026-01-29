import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileHeader() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
            colors={["#0284C7", "#0EA5E9", "#38BDF8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
                paddingTop: insets.top + 8,
                paddingBottom: 60,
                paddingHorizontal: 16,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
            }}
        >
            <StatusBar style="light" />
            <View className="flex-row items-center justify-between py-2">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <Text className="text-xl font-bold text-white text-center">Hồ sơ</Text>
                <TouchableOpacity
                    className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
