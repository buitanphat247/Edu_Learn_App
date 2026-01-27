import { Text, View } from 'react-native';

interface DividerProps {
    text?: string;
}

export default function Divider({ text = 'OR CONTINUE WITH' }: DividerProps) {
    return (
        <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-gray-200" />
            <Text className="text-xs text-gray-400 font-medium mx-4 tracking-wide">{text}</Text>
            <View className="flex-1 h-px bg-gray-200" />
        </View>
    );
}
