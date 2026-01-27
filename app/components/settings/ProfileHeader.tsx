import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const AVATAR_URL = 'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg';

interface ProfileHeaderProps {
    onEditPress: () => void;
}

export default function ProfileHeader({ onEditPress }: ProfileHeaderProps) {
    return (
        <View className="items-center pt-8 pb-6">
            {/* Avatar with dashed border */}
            <View className="relative mb-4">
                <View className="w-24 h-24 rounded-full border-2 border-dashed border-purple-500 items-center justify-center overflow-hidden">
                    <Image
                        source={{ uri: AVATAR_URL }}
                        className="w-full h-full rounded-full"
                        resizeMode="cover"
                    />
                </View>
                {/* Camera icon overlay */}
                <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full items-center justify-center border border-gray-200">
                    <Ionicons name="camera" size={16} color="#9333EA" />
                </TouchableOpacity>
            </View>

            {/* Name */}
            <Text className="text-xl font-bold text-gray-900 mb-1">Nguyễn Văn A</Text>

            {/* Email */}
            <Text className="text-sm text-gray-500 mb-6">nguyen.van.a@example.com</Text>

            {/* Edit Profile Button */}
            <TouchableOpacity
                onPress={onEditPress}
                className="flex-row items-center bg-purple-600 px-6 py-3 rounded-xl"
                activeOpacity={0.8}>
                <Ionicons name="pencil" size={18} color="#FFFFFF" />
                <Text className="text-white font-semibold ml-2">Chỉnh sửa hồ sơ</Text>
            </TouchableOpacity>
        </View>
    );
}
