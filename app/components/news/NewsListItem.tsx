import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface NewsListItemProps {
    title: string;
    image: string;
    category: "Thông báo" | "Cập nhật" | "Chia sẻ" | "Sự kiện" | string;
    date: string;
    onPress: () => void;
}

const getCategoryStyles = (category: string) => {
    switch (category) {
        case "Thông báo":
            return { bg: "bg-blue-100", text: "text-blue-600" };
        case "Cập nhật":
            return { bg: "bg-green-100", text: "text-green-600" };
        case "Chia sẻ":
            return { bg: "bg-purple-100", text: "text-purple-600" };
        case "Sự kiện":
            return { bg: "bg-orange-100", text: "text-orange-600" };
        default:
            return { bg: "bg-gray-100", text: "text-gray-600" };
    }
};

export default function NewsListItem({
    title,
    image,
    category,
    date,
    onPress,
}: NewsListItemProps) {
    const { bg, text } = getCategoryStyles(category);

    return (
        <TouchableOpacity
            className=" flex-row bg-white p-3 rounded-2xl border border-slate-100 shadow-sm"
            onPress={onPress}
            activeOpacity={0.7}
        >
            <Image
                source={{ uri: image }}
                className="w-20 h-20 rounded-xl bg-slate-200"
                resizeMode="cover"
            />
            <View className="flex-1 ml-3 justify-between  py-0.5">
                <Text
                    className="text-slate-800 font-bold text-[15px] leading-5"
                    numberOfLines={2}
                >
                    {title}
                </Text>
                <View>
                    <View className={`self-start px-2 py-0.5 rounded-md mb-1 ${bg}`}>
                        <Text className={`text-[10px] font-bold ${text}`}>{category}</Text>
                    </View>
                    <Text className="text-slate-400 text-xs">{date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
