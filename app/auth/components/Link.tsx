import { Text, TouchableOpacity, View } from 'react-native';

interface LinkProps {
    text: string;
    linkText: string;
    onPress: () => void;
}

export default function Link({ text, linkText, onPress }: LinkProps) {
    return (
        <View className="flex-row justify-center items-center">
            <Text className="text-sm text-gray-500">{text} </Text>
            <TouchableOpacity onPress={onPress}>
                <Text className="text-sm text-blue-600 font-semibold">{linkText}</Text>
            </TouchableOpacity>
        </View>
    );
}
