import { Ionicons } from '@expo/vector-icons';
import { cssInterop } from 'nativewind';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

cssInterop(TextInput, { className: 'style' });

interface InputFieldProps {
    label: string;
    placeholder?: string;
    value: string;
    onChangeText: (text: string) => void;
    leftIcon?: keyof typeof Ionicons.glyphMap;
    rightIcon?: keyof typeof Ionicons.glyphMap;
    onRightIconPress?: () => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    showPasswordToggle?: boolean;
}

export default function InputField({
    label,
    placeholder,
    value,
    onChangeText,
    leftIcon,
    rightIcon,
    onRightIconPress,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'none',
    autoCorrect = false,
    showPasswordToggle = false,
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = secureTextEntry && showPasswordToggle;

    return (
        <View className="mb-5">
            <Text className="text-sm font-medium text-gray-700 mb-2">{label}</Text>
            <View className="flex-row items-center bg-white rounded-xl border border-gray-200 px-4 h-14">
                {leftIcon && (
                    <View className="mr-3">
                        <Ionicons name={leftIcon} size={20} color="#9CA3AF" />
                    </View>
                )}
                <TextInput
                    className="flex-1 text-base text-gray-900 py-0"
                    placeholder={placeholder}
                    placeholderTextColor="#9CA3AF"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword ? !showPassword : secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                />
                {isPassword ? (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        className="ml-3 p-1">
                        <Ionicons
                            name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                            size={20}
                            color="#9CA3AF"
                        />
                    </TouchableOpacity>
                ) : rightIcon && onRightIconPress ? (
                    <TouchableOpacity onPress={onRightIconPress} className="ml-3 p-1">
                        <Ionicons name={rightIcon} size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                ) : rightIcon ? (
                    <View className="ml-3">
                        <Ionicons name={rightIcon} size={20} color="#9CA3AF" />
                    </View>
                ) : null}
            </View>
        </View>
    );
}
