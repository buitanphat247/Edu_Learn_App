import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface CheckboxProps {
    checked: boolean;
    onToggle: () => void;
    label: React.ReactNode;
}

export default function Checkbox({ checked, onToggle, label }: CheckboxProps) {
    return (
        <View className="flex-row items-start mb-6">
            <TouchableOpacity onPress={onToggle} className="mr-3 mt-1">
                <View
                    className={`w-5 h-5 rounded border-2 items-center justify-center ${
                        checked ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                    }`}>
                    {checked && <Ionicons name="checkmark" size={16} color="#FFFFFF" />}
                </View>
            </TouchableOpacity>
            <View className="flex-1">{label}</View>
        </View>
    );
}
