import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ProfileTags from "./ProfileTags";

interface ProfileInfoCardProps {
    avatarUrl: string;
    name: string;
}

export default function ProfileInfoCard({ avatarUrl, name }: ProfileInfoCardProps) {
    return (
        <View className="px-4 -mt-10">
            <View className="border border-slate-200 bg-white rounded-3xl px-5 pt-5 pb-4 shadow-md shadow-sky-200">
                <View className="flex-row items-center">
                    <View className="relative">
                        <Image source={{ uri: avatarUrl }} className="w-20 h-20 rounded-3xl" />
                        <TouchableOpacity className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-sky-500 items-center justify-center border-2 border-white">
                            <Ionicons name="pencil" size={14} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>

                    <View className="flex-1 ml-4">
                        <Text className="text-xl font-bold text-slate-900">{name}</Text>
                        <View className="flex-row items-center mt-1">
                            <Ionicons name="location-outline" size={14} color="#0EA5E9" />
                            <Text className="text-xs text-slate-500 ml-1">
                                2 năm kinh nghiệm học online
                            </Text>
                        </View>

                        <ProfileTags />
                    </View>
                </View>

                {/* Stats row */}
                <View className="flex-row justify-between mt-5 border-t border-slate-100 pt-4">
                    <View className="flex-1 items-center">
                        <Text className="text-xl font-bold text-slate-900">12</Text>
                        <Text className="text-xs text-slate-400 mt-1">Khóa học</Text>
                    </View>
                    <View className="w-px h-10 bg-slate-200" />
                    <View className="flex-1 items-center">
                        <Text className="text-xl font-bold text-slate-900">5</Text>
                        <Text className="text-xs text-slate-400 mt-1">Chứng chỉ</Text>
                    </View>
                    <View className="w-px h-10 bg-slate-200" />
                    <View className="flex-1 items-center">
                        <Text className="text-xl font-bold text-slate-900">850</Text>
                        <Text className="text-xs text-slate-400 mt-1">Điểm XP</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
