import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    className?: string;
}

export default function Button({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
}: ButtonProps) {
    const baseClasses = 'rounded-xl h-14 justify-center items-center mb-6';
    
    const variantClasses = {
        primary: 'bg-blue-600 shadow-lg',
        secondary: 'bg-white border border-gray-200',
        outline: 'bg-transparent border border-gray-300',
    };

    const textClasses = {
        primary: disabled ? 'text-gray-400' : 'text-white',
        secondary: 'text-gray-900',
        outline: 'text-blue-600',
    };

    return (
        <TouchableOpacity
            className={`${baseClasses} ${variantClasses[variant]}`}
            style={
                variant === 'primary'
                    ? {
                          shadowColor: '#2563EB',
                          shadowOffset: { width: 0, height: 4 },
                          shadowOpacity: 0.3,
                          shadowRadius: 8,
                          elevation: 4,
                      }
                    : undefined
            }
            onPress={onPress}
            disabled={disabled}>
            <Text className={`text-base font-semibold ${textClasses[variant]}`}>{title}</Text>
        </TouchableOpacity>
    );
}
