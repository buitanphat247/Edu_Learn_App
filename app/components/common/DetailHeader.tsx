import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
    /** Hiển thị border dưới header (mặc định: true) */
    showBorder?: boolean;
    /** Style tùy chỉnh cho container */
    containerStyle?: ViewStyle;
}

/**
 * DetailHeader - Header component dành cho các trang chi tiết
 *
 * Sử dụng cho: Chi tiết tin tức, Cài đặt ngôn ngữ, Profile, v.v.
 *
 * @example
 * // Cơ bản - chỉ có title và nút back
 * <DetailHeader title="Ngôn ngữ" />
 *
 * @example
 * // Với icon bên phải
 * <DetailHeader
 *   title="Chi tiết tin tức"
 *   rightIcon="share-outline"
 *   onRightIconPress={() => handleShare()}
 * />
 *
 * @example
 * // Với custom component bên phải
 * <DetailHeader
 *   title="Hồ sơ"
 *   rightComponent={<EditButton />}
 * />
 */
export default function DetailHeader({
    title,
    showBack = true,
    onBackPress,
    rightIcon,
    onRightIconPress,
    rightComponent,
    showBorder = true,
    containerStyle,
}: DetailHeaderProps) {
    const router = useRouter();

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

    return (
        <SafeAreaView
            edges={["left", "right"]}
            className="bg-[#3B82F6] px-4 pb-2 gap-3"
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
        </SafeAreaView>
    );
}
