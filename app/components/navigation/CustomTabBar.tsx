import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomTabBar({
    state,
    descriptors,
    navigation,
}: BottomTabBarProps) {
    const insets = useSafeAreaInsets();
    const [layout, setLayout] = React.useState({ width: 0, height: 0 });
    const translateX = useSharedValue(0);

    const TAB_WIDTH = layout.width > 0 ? layout.width / state.routes.length : 0;

    useEffect(() => {
        if (layout.width > 0) {
            translateX.value = withSpring(state.index * TAB_WIDTH, {
                mass: 0.5,
                damping: 15,
                stiffness: 120,
            });
        }
    }, [state.index, layout.width]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const getLabel = (name: string, options: any) => {
        if (options.tabBarLabel) return options.tabBarLabel;
        if (options.title) return options.title;
        if (name === "index") return "Trang chủ";
        if (name === "news") return "Tin tức";
        if (name === "events") return "Sự kiện";
        if (name === "features") return "Tính năng";
        if (name === "settings") return "Cài đặt";
        return name;
    };

    return (
        <View
            onLayout={(e) => setLayout(e.nativeEvent.layout)}
            style={{
                flexDirection: "row",
                backgroundColor: "#FFFFFF",
                borderTopWidth: 1,
                borderTopColor: "#b2b7bbff",
                height: 44 + insets.bottom,
                paddingBottom: insets.bottom,
                alignItems: "center", // Vertically center content
            }}
        >
            {/* Sliding Pill Indicator */}
            {layout.width > 0 && (
                <Animated.View
                    style={[
                        animatedStyle,
                        {
                            position: "absolute",
                            top: 4, // Center vertically: (44 - 36) / 2
                            left: 0,
                            width: TAB_WIDTH,
                            height: 36,
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 0,
                        },
                    ]}
                >
                    {/* Dark Pill Shape */}
                    <View className="w-20 h-9 bg-blue-600 rounded-full" />
                </Animated.View>
            )}

            {/* Tab Items */}
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1,
                            height: 44,
                        }}
                        activeOpacity={1}
                    >
                        {options.tabBarIcon?.({
                            focused: isFocused,
                            color: isFocused ? "#FFFFFF" : "#64748B",
                            size: 24,
                        })}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
