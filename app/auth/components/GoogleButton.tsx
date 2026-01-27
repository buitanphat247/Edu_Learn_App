import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, TouchableOpacity, View } from 'react-native';

interface GoogleButtonProps {
    onPress: () => void;
}

export default function GoogleButton({ onPress }: GoogleButtonProps) {
    return (
        <TouchableOpacity
            className="flex-row items-center justify-center bg-white rounded-xl border border-gray-300 h-14 mb-8"
            style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.08,
                shadowRadius: 4,
                elevation: 3,
            }}
            onPress={onPress}
            activeOpacity={0.7}>
            {/* Google Icon */}
            <View className="mr-3">
                <AntDesign name="google" size={22} color="#4285F4" />
            </View>
            <Text className="text-base font-semibold text-gray-800 tracking-wide">
                Continue with Google
            </Text>
        </TouchableOpacity>
    );
}
