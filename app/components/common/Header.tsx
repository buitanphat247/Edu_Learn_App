import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AVATAR_URL =
  "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/anh-thien-nhien-4.jpg";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showAvatar?: boolean;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
  onBackPress?: () => void;
}

export default function Header({
  title,
  showBack = false,
  showAvatar = true,
  rightIcon,
  onRightIconPress,
  onBackPress,
}: HeaderProps) {
  const navigation = useNavigation();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const handleAvatarPress = () => {
    if (onRightIconPress) {
      onRightIconPress();
    }
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.content}>
        {/* Left section - Back button or spacer */}
        <View style={styles.leftSection}>
          {showBack && (
            <TouchableOpacity onPress={handleBackPress} style={styles.iconButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>

        {/* Center section - Title */}
        <View style={styles.centerSection}>
          <Text style={styles.title}>{title}</Text>
        </View>

        {/* Right section - Avatar or icon */}
        <View style={styles.rightSection}>
          {rightIcon ? (
            <TouchableOpacity
              onPress={onRightIconPress || handleAvatarPress}
              style={styles.iconButton}
            >
              <Ionicons name={rightIcon} size={24} color="#FFFFFF" />
            </TouchableOpacity>
          ) : showAvatar ? (
            <TouchableOpacity onPress={handleAvatarPress} style={styles.avatarButton}>
              <Image
                source={{ uri: AVATAR_URL }}
                style={styles.avatar}
                resizeMode="cover"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0EA5E9", // Sky blue - same as bottom navigation
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 4,
  },
  leftSection: {
    width: 40,
  },
  centerSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  rightSection: {
    width: 40,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  iconButton: {
    padding: 4,
  },
  avatarButton: {
    padding: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
});
