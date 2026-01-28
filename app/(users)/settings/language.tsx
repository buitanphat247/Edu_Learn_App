import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DetailHeader from "../../components/common/DetailHeader";

interface LanguageOption {
    id: string;
    code: string;
    name: string;
    nativeName: string;
    flag: string;
}

const languages: LanguageOption[] = [
    {
        id: "vi",
        code: "vi-VN",
        name: "Vietnamese",
        nativeName: "Tiếng Việt",
        flag: "🇻🇳",
    },
    {
        id: "en",
        code: "en-US",
        name: "English",
        nativeName: "English",
        flag: "🇺🇸",
    },
    {
        id: "ja",
        code: "ja-JP",
        name: "Japanese",
        nativeName: "日本語",
        flag: "🇯🇵",
    },
    {
        id: "ko",
        code: "ko-KR",
        name: "Korean",
        nativeName: "한국어",
        flag: "🇰🇷",
    },
    {
        id: "zh",
        code: "zh-CN",
        name: "Chinese (Simplified)",
        nativeName: "简体中文",
        flag: "🇨🇳",
    },
];

export default function Language() {
    const [selectedLanguage, setSelectedLanguage] = useState("vi");

    const handleLanguageSelect = (languageId: string) => {
        setSelectedLanguage(languageId);
        // TODO: Save language preference and apply localization
        console.log("Selected language:", languageId);
    };

    return (
        <SafeAreaView
            className="bg-white flex-1"
            edges={["left", "right", "top"]}
        >
            <DetailHeader title="Ngôn ngữ" />
            <View className="gap-3 pt-2"
                style={{
                    paddingHorizontal: 16,
                }}
            >
                {/* Description */}
                <View >
                    <Text className="text-sm text-slate-500 leading-5">
                        Chọn ngôn ngữ hiển thị cho ứng dụng. Thay đổi sẽ được áp dụng ngay lập tức.
                    </Text>
                </View>
                {/* Language Options */}
                {languages.map((language) => {
                    const isSelected = selectedLanguage === language.id;
                    return (
                        <TouchableOpacity
                            key={language.id}
                            onPress={() => handleLanguageSelect(language.id)}
                            className={`bg-white rounded-2xl p-4 border flex-row items-center justify-between ${isSelected ? "border-violet-500 bg-violet-50" : "border-slate-100"
                                }`}
                            activeOpacity={0.7}
                        >
                            <View className="flex-row items-center flex-1">
                                {/* Flag */}
                                <View className="w-12 h-12 rounded-full bg-slate-50 items-center justify-center mr-4">
                                    <Text className="text-2xl">{language.flag}</Text>
                                </View>
                                {/* Text */}
                                <View className="flex-1">
                                    <Text
                                        className={`text-base font-semibold mb-0.5 ${isSelected ? "text-violet-700" : "text-slate-800"
                                            }`}
                                    >
                                        {language.nativeName}
                                    </Text>
                                    <Text className="text-sm text-slate-500">{language.name}</Text>
                                </View>
                            </View>
                            {/* Checkbox */}
                            <View
                                className={`w-6 h-6 rounded-full items-center justify-center ${isSelected ? "bg-violet-500" : "border-2 border-slate-200"
                                    }`}
                            >
                                {isSelected && (
                                    <Ionicons name="checkmark" size={16} color="#fff" />
                                )}
                            </View>
                        </TouchableOpacity>
                    );
                })}
                {/* Footer Note */}
                <View className="p-4 bg-violet-50 rounded-2xl">
                    <View className="flex-row items-start">
                        <Ionicons name="information-circle" size={20} color="#7C3AED" />
                        <Text className="text-sm text-violet-700 ml-2 flex-1 leading-5">
                            Một số nội dung như thông báo từ giáo viên hoặc tên lớp học có thể giữ nguyên ngôn ngữ gốc.
                        </Text>
                    </View>
                </View>


            </View>
        </SafeAreaView>
    );
}
