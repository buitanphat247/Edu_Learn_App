import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

interface DetailHeaderProps {
    /** Tiêu đề của header */
    title: string;
    /** Hiển thị nút quay lại (mặc định: true) */
    showBack?: boolean;
    /** Custom action khi bấm nút back */
    onBackPress?: () => void;
    /** Icon bên phải (tên từ Ionicons) */
    rightIcon?: keyof typeof Ionicons.glyphMap;
    /** Callback khi bấm icon phải */
    onRightIconPress?: () => void;
    /** Component tùy chỉnh bên phải (thay thế rightIcon) */
    rightComponent?: ReactNode;
    /** Style tùy chỉnh cho container */
    containerStyle?: ViewStyle;
}

export default function DetailHeader({
    title,
    showBack = true,
    onBackPress,
    rightIcon,
    onRightIconPress,
    rightComponent,
    containerStyle,
}: DetailHeaderProps) {
    const navigation = useNavigation();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        }
    };

    return (
        <View
            className="bg-[#3B82F6] px-4 pb-3 pt-2 gap-3"
            style={{ zIndex: 10 }}
        >
            <StatusBar style="light" />
            <View
                className="flex-row items-center gap-2"
                style={containerStyle}
            >
                {/* Left - Back button */}
                <View className="w-10">
                    {showBack && (
                        <TouchableOpacity
                            onPress={handleBackPress}
                            className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center"
                            activeOpacity={0.7}
                        >
                            <Ionicons name="arrow-back-outline" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Center - Title */}
                <View className="flex-1 items-center">
                    <Text
                        className="text-xl font-bold text-white text-center"
                        numberOfLines={1}
                    >
                        {title}
                    </Text>
                </View>

                {/* Right - Icon or custom component */}
                <View className="w-10 items-end">
                    {rightComponent ? (
                        rightComponent
                    ) : rightIcon ? (
                        <TouchableOpacity
                            onPress={onRightIconPress}
                            className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center"
                            activeOpacity={0.7}
                        >
                            <Ionicons name={rightIcon} size={22} color="#FFFFFF" />
                        </TouchableOpacity>
                    ) : (
                        <View className="w-10" />
                    )}
                </View>
            </View>
        </View>
    );
}
