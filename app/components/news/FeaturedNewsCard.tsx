import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

interface FeaturedNewsCardProps {
    title: string;
    image: string;
    timestamp: string;
    onPress: () => void;
}

export default function FeaturedNewsCard({
    title,
    image,
    timestamp,
    onPress,
}: FeaturedNewsCardProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={onPress}
            className="w-full h-[220px] rounded-2xl overflow-hidden"
        >
            <ImageBackground source={{ uri: image }} className="flex-1 justify-end">
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="absolute inset-0"
                />
                <View className="p-4">
                    <View className="bg-purple-600 self-start px-2 py-1 rounded-md mb-2">
                        <Text className="text-white text-xs font-bold uppercase">
                            Nổi bật
                        </Text>
                    </View>
                    <Text
                        className="text-white text-lg font-bold mb-2 leading-6"
                        numberOfLines={2}
                    >
                        {title}
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="text-slate-300 text-xs">🕒 {timestamp}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}
