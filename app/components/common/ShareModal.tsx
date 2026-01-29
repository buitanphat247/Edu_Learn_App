import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

interface ShareOption {
    id: string;
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
    color: string;
    bgColor: string;
}

const shareOptions: ShareOption[] = [
    {
        id: "copy",
        icon: "copy-outline",
        label: "Sao chép",
        color: "#6366F1",
        bgColor: "#EEF2FF",
    },
    {
        id: "facebook",
        icon: "logo-facebook",
        label: "Facebook",
        color: "#1877F2",
        bgColor: "#E7F3FF",
    },
    {
        id: "messenger",
        icon: "chatbubble-ellipses",
        label: "Messenger",
        color: "#0084FF",
        bgColor: "#E7F3FF",
    },
    {
        id: "zalo",
        icon: "chatbubbles",
        label: "Zalo",
        color: "#0068FF",
        bgColor: "#E6F2FF",
    },
    {
        id: "telegram",
        icon: "paper-plane",
        label: "Telegram",
        color: "#0088CC",
        bgColor: "#E6F4FA",
    },
    {
        id: "more",
        icon: "ellipsis-horizontal",
        label: "Khác",
        color: "#64748B",
        bgColor: "#F1F5F9",
    },
];

interface ShareModalProps {
    isVisible: boolean;
    onClose: () => void;
    onShare?: (option: ShareOption) => void;
    title?: string;
}

export default function ShareModal({
    isVisible,
    onClose,
    onShare,
    title = "Chia sẻ",
}: ShareModalProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const translateY = useSharedValue(400);
    const backdropOpacity = useSharedValue(0);

    const finishClosing = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        if (isVisible) {
            setModalVisible(true);
            // Small delay to ensure modal is mounted before animation
            setTimeout(() => {
                backdropOpacity.value = withTiming(1, { duration: 250 });
                translateY.value = withTiming(0, { duration: 300 });
            }, 50);
        } else if (modalVisible) {
            backdropOpacity.value = withTiming(0, { duration: 200 });
            translateY.value = withTiming(400, { duration: 250 }, (finished) => {
                if (finished) {
                    runOnJS(finishClosing)();
                }
            });
        }
    }, [isVisible]);

    const backdropStyle = useAnimatedStyle(() => ({
        opacity: backdropOpacity.value * 0.5,
    }));

    const sheetStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    const handleShare = (option: ShareOption) => {
        onShare?.(option);
        onClose();
    };

    return (
        <Modal
            visible={modalVisible}
            transparent
            animationType="none"
            statusBarTranslucent
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                {/* Backdrop */}
                <Animated.View style={[styles.backdrop, backdropStyle]}>
                    <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
                </Animated.View>

                {/* Bottom Sheet */}
                <Animated.View style={[styles.sheetContainer, sheetStyle]}>
                    {/* Handle Bar */}
                    <View style={styles.handleContainer}>
                        <View style={styles.handleBar} />
                    </View>

                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    {/* Share Options Grid */}
                    <View style={styles.optionsGrid}>
                        {shareOptions.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                style={styles.optionItem}
                                onPress={() => handleShare(option)}
                                activeOpacity={0.7}
                            >
                                <View
                                    style={[
                                        styles.optionIcon,
                                        { backgroundColor: option.bgColor },
                                    ]}
                                >
                                    <Ionicons
                                        name={option.icon}
                                        size={26}
                                        color={option.color}
                                    />
                                </View>
                                <Text style={styles.optionLabel}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Cancel Button */}
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={onClose}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.cancelText}>Hủy</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "#000",
    },
    sheetContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        paddingBottom: 34,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 20,
    },
    handleContainer: {
        alignItems: "center",
        paddingVertical: 12,
    },
    handleBar: {
        width: 40,
        height: 4,
        backgroundColor: "#E2E8F0",
        borderRadius: 2,
    },
    header: {
        paddingHorizontal: 20,
        paddingBottom: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#1E293B",
    },
    optionsGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 16,
        gap: 8,
    },
    optionItem: {
        width: "30%",
        alignItems: "center",
        paddingVertical: 12,
    },
    optionIcon: {
        width: 56,
        height: 56,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    optionLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "#475569",
        textAlign: "center",
    },
    cancelButton: {
        marginTop: 16,
        marginHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#F1F5F9",
        borderRadius: 14,
        alignItems: "center",
    },
    cancelText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#64748B",
    },
});
