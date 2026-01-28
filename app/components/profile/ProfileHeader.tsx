import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
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
                paddingTop: insets.top + 16,
                paddingBottom: 60,
                paddingHorizontal: 16,
                borderBottomLeftRadius: 24,
                borderBottomRightRadius: 24,
            }}
        >
            <View className="flex-row items-center justify-between">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-9 h-9 rounded-full bg-white/30 items-center justify-center"
                >
                    <Ionicons name="chevron-back" size={20} color="#FFFFFF" />
                </TouchableOpacity>
                <Text className="text-white text-lg font-bold">Profile</Text>
                <TouchableOpacity className="w-9 h-9 rounded-full bg-white/30 items-center justify-center">
                    <Ionicons name="ellipsis-horizontal" size={20} color="#FFFFFF" />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
