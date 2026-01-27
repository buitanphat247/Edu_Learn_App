import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import InputField from './components/InputField';
import Link from './components/Link';

export default function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const router = useRouter();

    const handleCreateAccount = () => {
        // TODO: Implement sign up logic
        console.log('Sign up:', { fullName, email, password, confirmPassword });
        router.replace('/(tabs)');
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1">
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1, paddingHorizontal: 24, paddingTop: 20,
                        justifyContent: 'center',
                        paddingBottom: 32
                    }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled">

                    {/* Logo Section */}
                    <View className="items-center mb-8">
                        <View className="w-20 h-20 rounded-2xl bg-blue-600 justify-center items-center mb-4">
                            <Ionicons name="school" size={40} color="#FFFFFF" />
                        </View>
                        <Text className="text-3xl font-bold text-gray-900 mb-2">Create Account</Text>
                        <Text className="text-base text-gray-500">Sign up to get started with AIO</Text>
                    </View>

                    {/* Full Name Input */}
                    <InputField
                        label="Full Name"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChangeText={setFullName}
                        autoCapitalize="words"
                    />

                    {/* Email Input */}
                    <InputField
                        label="Email Address"
                        placeholder="name@example.com"
                        value={email}
                        onChangeText={setEmail}
                        leftIcon="mail-outline"
                        rightIcon="mail-outline"
                        keyboardType="email-address"
                    />

                    {/* Password Input */}
                    <InputField
                        label="Password"
                        placeholder="••••••••"
                        value={password}
                        onChangeText={setPassword}
                        leftIcon="lock-closed-outline"
                        secureTextEntry
                        showPasswordToggle
                    />

                    {/* Confirm Password Input */}
                    <InputField
                        label="Confirm Password"
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        leftIcon="lock-closed-outline"
                        secureTextEntry
                        showPasswordToggle
                    />

                    {/* Terms and Conditions Checkbox */}
                    <Checkbox
                        checked={agreeToTerms}
                        onToggle={() => setAgreeToTerms(!agreeToTerms)}
                        label={
                            <View className="flex-row flex-wrap">
                                <Text className="text-sm text-gray-600">I agree to the </Text>
                                <TouchableOpacity>
                                    <Text className="text-sm text-blue-600 underline">Terms and Conditions</Text>
                                </TouchableOpacity>
                                <Text className="text-sm text-gray-600"> and </Text>
                                <TouchableOpacity>
                                    <Text className="text-sm text-blue-600 underline">Privacy Policy.</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />

                    {/* Create Account Button */}
                    <Button
                        title="Create Account"
                        onPress={handleCreateAccount}
                        disabled={!agreeToTerms}
                    />

                    {/* Sign In Link */}
                    <Link
                        text="Already have an account?"
                        linkText="Sign In"
                        onPress={() => router.push('/auth/login')}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}