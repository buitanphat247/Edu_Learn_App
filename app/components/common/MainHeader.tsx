import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./SearchBar";

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

interface MainHeaderProps {
    /** Tiêu đề trang */
    title: string;
    /** Placeholder cho search bar */
    searchPlaceholder?: string;
    /** Số lượng thông báo chưa đọc */
    notificationCount?: number;
    /** Callback khi bấm icon thông báo */
    onNotificationPress?: () => void;
    /** Giá trị search */
    searchValue?: string;
    /** Callback khi thay đổi search */
    onSearchChange?: (text: string) => void;
    /** Animated style cho sticky effect */
    animatedStyle?: any;
    /** Ẩn search bar */
    hideSearch?: boolean;
}

/**
 * MainHeader Component với Drawer menu button bên trái
 */
export default function MainHeader({
    title,
    searchPlaceholder = "Tìm kiếm...",
    notificationCount = 0,
    onNotificationPress,
    searchValue,
    onSearchChange,
    animatedStyle,
    hideSearch = false,
}: MainHeaderProps) {
    const navigation = useNavigation();
    const HeaderWrapper = animatedStyle ? AnimatedSafeAreaView : SafeAreaView;

    const handleMenuPress = () => {
        console.log("Menu pressed");
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <HeaderWrapper
            style={[animatedStyle, { zIndex: 9999 }]}
            className="px-4 pb-3 gap-2"
            edges={["left", "right"]}
        >
            {/* Top Row: Menu + Title + Notification */}
            <View className="flex-row items-center justify-between">
                {/* Menu Button (LEFT) */}
                <TouchableOpacity
                    className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center"
                    onPress={handleMenuPress}
                    activeOpacity={0.7}
                    hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                >
                    <Ionicons name="menu-outline" size={24} color="#FFFFFF" />
                </TouchableOpacity>

                {/* Title */}
                <Text className="text-xl font-bold text-white text-center flex-1 mx-2">
                    {title}
                </Text>

                {/* Notification Icon (RIGHT) */}
                <TouchableOpacity
                    className="w-10 h-10 rounded-xl bg-white/20 items-center justify-center relative"
                    onPress={onNotificationPress}
                    activeOpacity={0.7}
                >
                    <Ionicons name="notifications-outline" size={24} color="#FFFFFF" />
                    {notificationCount > 0 && (
                        <View className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full bg-red-500 items-center justify-center px-1 border-2 border-[#3B82F6]">
                            <Text className="text-[10px] font-bold text-white">
                                {notificationCount > 99 ? "99+" : notificationCount}
                            </Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            {!hideSearch && (
                <View>
                    <SearchBar
                        placeholder={searchPlaceholder}
                        value={searchValue}
                        onChangeText={onSearchChange}
                        isDark={true}
                    />
                </View>
            )}
        </HeaderWrapper>
    );
}
