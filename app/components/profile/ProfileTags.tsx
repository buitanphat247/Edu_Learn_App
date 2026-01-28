import React from "react";
import { Text, View } from "react-native";

interface TagProps {
    label: string;
    color: string;
}

const Tag = ({ label, color }: TagProps) => (
    <View
        className="px-3 py-1 rounded-full"
        style={{ backgroundColor: color }}
    >
        <Text className="text-xs font-semibold text-white">{label}</Text>
    </View>
);

export default function ProfileTags() {
    return (
        <View className="flex-row mt-3" style={{ gap: 8 }}>
            <Tag label="Học viên chăm chỉ" color="#FBBF24" />
            {/* #FBBF24 is amber-400 */}
            <Tag label="Explorer" color="#0EA5E9" />
            {/* #0EA5E9 is sky-500 */}
        </View>
    );
}
