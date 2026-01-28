import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
        <View style={{ zIndex: 10 }}>
            <View
                className={`flex-row items-center justify-between px-4 py-3 bg-white ${showBorder ? "border-b border-slate-100" : ""
                    }`}
                style={containerStyle}
            >
                {/* Left - Back button */}
                <View className="w-10">
                    {showBack && (
                        <TouchableOpacity
                            onPress={handleBackPress}
                            className="w-10 h-10 items-center justify-center -ml-2"
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Ionicons name="arrow-back-outline" size={24} color="#334155" />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Center - Title */}
                <View className="flex-1 ml-1">
                    <Text
                        className="text-lg font-bold text-slate-800"
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
                            className="w-10 h-10 items-center justify-center -mr-2"
                            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        >
                            <Ionicons name={rightIcon} size={22} color="#334155" />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
            {/* Bottom Shadow Bar */}
            <View
                style={{
                    height: 4,
                    backgroundColor: "transparent",
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 3,
                    elevation: 4,
                    marginTop: -4,
                }}
            />
        </View>
    );
}
