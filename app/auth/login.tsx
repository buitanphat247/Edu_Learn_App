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
import Divider from './components/Divider';
import GoogleButton from './components/GoogleButton';
import InputField from './components/InputField';
import Link from './components/Link';
import Logo from './components/Logo';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSignIn = () => {
        // TODO: Implement sign in logic
        console.log('Sign in:', { email, password });
        router.replace('/(tabs)');
    };

    const handleGoogleSignIn = () => {
        // TODO: Implement Google sign in logic
        console.log('Google sign in');
    };

    return (
        <SafeAreaView className="flex-1 bg-white" edges={['top', 'bottom']}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="flex-1">
                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        paddingHorizontal: 24,
                        paddingVertical: 32
                    }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled">
                    <Logo />

                    {/* Welcome Section */}
                    <View className="mb-8">
                        <Text className="text-[32px] font-bold text-gray-900 mb-3">Welcome back!</Text>
                        <Text className="text-base text-gray-500 leading-6">
                            Please enter your details to access your personalized learning dashboard.
                        </Text>
                    </View>

                    {/* Email Input */}
                    <InputField
                        label="Email"
                        placeholder="student@university.edu"
                        value={email}
                        onChangeText={setEmail}
                        leftIcon="mail-outline"
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

                    {/* Forgot Password */}
                    <TouchableOpacity className="items-end mb-6">
                        <Text className="text-sm text-blue-600 font-medium">Forgot password?</Text>
                    </TouchableOpacity>

                    {/* Sign In Button */}
                    <Button title="Sign In" onPress={handleSignIn} />

                    {/* Divider */}
                    <Divider />

                    {/* Google Sign In Button */}
                    <GoogleButton onPress={handleGoogleSignIn} />

                    {/* Sign Up Link */}
                    <Link
                        text="Don't have an account?"
                        linkText="Sign Up"
                        onPress={() => router.push('/auth/signup')}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
