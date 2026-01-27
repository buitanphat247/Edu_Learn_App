import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

interface LogoProps {
    title?: string;
    subtitle?: string;
    showSubtitle?: boolean;
}

export default function Logo({ title = 'AIO LMS', subtitle, showSubtitle = false }: LogoProps) {
    return (
        <View className="items-center mb-8">
            <View className="w-20 h-20 rounded-2xl bg-blue-600 justify-center items-center mb-4">
                <Ionicons name="school" size={40} color="#FFFFFF" />
            </View>
            {title && (
                <Text className="text-2xl font-bold text-blue-600 tracking-wide">{title}</Text>
            )}
            {showSubtitle && subtitle && (
                <Text className="text-base text-gray-500 mt-2">{subtitle}</Text>
            )}
        </View>
    );
}
