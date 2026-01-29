import { Ionicons } from "@expo/vector-icons";
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import * as SystemUI from "expo-system-ui";
import React, { useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Menu items configuration
const menuItems = [
    { name: "index", label: "Trang chủ", icon: "home-outline", iconActive: "home" },
    { name: "news", label: "Tin tức", icon: "newspaper-outline", iconActive: "newspaper" },
    { name: "events", label: "Sự kiện", icon: "calendar-outline", iconActive: "calendar" },
    { name: "features", label: "Tiện ích", icon: "grid-outline", iconActive: "grid" },
    { name: "settings", label: "Cài đặt", icon: "settings-outline", iconActive: "settings" },
];

// Custom Menu Item Component
function MenuItem({
    label,
    icon,
    iconActive,
    isActive,
    onPress,
}: {
    label: string;
    icon: string;
    iconActive: string;
    isActive: boolean;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            className={`flex-row items-center px-4 py-2 border border-slate-300 rounded-xl ${isActive ? "bg-blue-100" : "bg-transparent"
                }`}
        >
            {/* Icon */}
            <View className="w-10 h-10 rounded-full items-center justify-center mr-3"
                style={{ backgroundColor: isActive ? "#DBEAFE" : "#F1F5F9" }}
            >
                <Ionicons
                    name={(isActive ? iconActive : icon) as any}
                    size={22}
                    color={isActive ? "#2563EB" : "#64748B"}
                />
            </View>

            {/* Label */}
            <Text
                className={`text-base ${isActive ? "font-bold text-blue-600" : "font-medium text-slate-600"
                    }`}
            >
                {label}
            </Text>

            {/* Active Indicator */}
            {isActive && (
                <View className="ml-auto w-1.5 h-6 bg-blue-600 rounded-full" />
            )}
        </TouchableOpacity>
    );
}

const AVATAR_URL =
    "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

// Custom Drawer Content
function CustomDrawerContent(props: DrawerContentComponentProps) {
    const insets = useSafeAreaInsets();
    const { state, navigation } = props;
    const currentRoute = state.routes[state.index]?.name;

    return (
        <View className="flex-1 bg-white">
            {/* Header with User Info */}
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate("settings", { screen: "profile" })}
                className="bg-[#2563EB] px-5 pb-6"
                style={{
                    paddingTop: insets.top + 20,
                }}
            >
                {/* Avatar */}
                <View className="w-16 h-16 rounded-full bg-white/20 items-center justify-center mb-4 border-2 border-white/30 overflow-hidden">
                    <Image
                        source={{ uri: AVATAR_URL }}
                        className="w-full h-full"
                        resizeMode="cover"
                    />
                </View>

                {/* User Info */}
                <View className="gap-0.5">
                    <Text className="text-white text-xl font-bold">Nguyễn Văn A</Text>
                    <Text className="text-white/70 text-sm">nguyenvana@email.com</Text>
                </View>

                {/* Role Badge */}
                <View className="bg-white/20 self-start px-3 py-1 rounded-full mt-3">
                    <Text className="text-white text-[10px] font-bold uppercase tracking-wider">Học viên</Text>
                </View>
            </TouchableOpacity>

            {/* Divider */}

            {/* Menu Items */}
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ paddingTop: 8, paddingBottom: 8 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="gap-3">
                    {menuItems.map((item) => (
                        <MenuItem
                            key={item.name}
                            label={item.label}
                            icon={item.icon}
                            iconActive={item.iconActive}
                            isActive={currentRoute === item.name}
                            onPress={() => {
                                if (item.name === "settings") {
                                    navigation.navigate("settings", { screen: "index" });
                                } else {
                                    navigation.navigate(item.name);
                                }
                            }}
                        />
                    ))}
                </View>
            </DrawerContentScrollView>

            {/* Footer */}
            <View
                className="border-t border-slate-300 px-3 pt-3"
                style={{ paddingBottom: insets.bottom + 12 }}
            >
                {/* Logout Button */}
                <TouchableOpacity
                    onPress={() => console.log("Logout")}
                    activeOpacity={0.7}
                    className="flex-row border border-slate-300 items-center px-4 py-2 mx-0 rounded-xl bg-red-100"
                >
                    <View className="w-10 h-10 rounded-full items-center justify-center mr-3 bg-red-100">
                        <Ionicons name="log-out-outline" size={22} color="#ef4444ff" />
                    </View>
                    <Text className="text-base font-medium text-red-500">Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default function DrawerLayout() {
    useEffect(() => {
        SystemUI.setBackgroundColorAsync("#FFFFFF");
    }, []);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerPosition: "left",
                    drawerType: "front",
                    drawerStyle: {
                        width: 300,
                        backgroundColor: "#FFFFFF",
                    },
                    overlayColor: "rgba(0,0,0,0.5)",
                    swipeEdgeWidth: 50,
                }}
            >
                {menuItems.map((item) => (
                    <Drawer.Screen
                        key={item.name}
                        name={item.name}
                        options={{
                            title: item.label,
                            drawerLabel: item.label,
                        }}
                    />
                ))}
            </Drawer>
        </GestureHandlerRootView>
    );
}
