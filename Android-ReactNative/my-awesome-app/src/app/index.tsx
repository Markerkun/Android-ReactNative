import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (isLogin) {
      console.log('Login:', {
        email,
        password,
      });
    } else {
      console.log('Register:', {
        name,
        email,
        password,
      });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerClassName="flex-grow justify-center px-6 py-10"
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View className="mb-10 items-center">
            <View className="mb-5 h-20 w-20 items-center justify-center rounded-full bg-[#ff5500]">
              <Text className="text-3xl font-bold text-white">
                M
              </Text>
            </View>

            <Text className="text-3xl font-bold text-white">
              My Awesome App
            </Text>

            <Text className="mt-2 text-center text-sm text-gray-400">
              {isLogin
                ? 'Sign in to continue listening'
                : 'Create an account and start listening'}
            </Text>
          </View>

          {/* Login / Register switch */}
          <View className="mb-7 flex-row rounded-xl bg-[#242424] p-1">
            <Pressable
              onPress={() => setIsLogin(true)}
              className={`flex-1 items-center rounded-lg py-3 ${
  isLogin ? 'bg-[#ff5500]' : 'bg-transparent'
}`}
            >
              <Text
                className={`font-semibold ${
  isLogin ? 'text-white' : 'text-gray-400'
}`}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              onPress={() => setIsLogin(false)}
              className={`flex-1 items-center rounded-lg py-3 ${
  !isLogin ? 'bg-[#ff5500]' : 'bg-transparent'
}`}
            >
              <Text
                className={`font-semibold ${
  !isLogin ? 'text-white' : 'text-gray-400'
}`}
              >
                Register
              </Text>
            </Pressable>
          </View>

          {/* Form */}
          <View className="rounded-2xl bg-[#1c1c1c] p-5">
            {/* Name */}
            {!isLogin && (
              <View className="mb-5">
                <Text className="mb-2 text-sm font-medium text-gray-300">
                  Username
                </Text>

                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your username"
                  placeholderTextColor="#777"
                  autoCapitalize="none"
                  className="rounded-xl border border-[#333] bg-[#242424] px-4 py-4 text-base text-white"
                />
              </View>
            )}

            {/* Email */}
            <View className="mb-5">
              <Text className="mb-2 text-sm font-medium text-gray-300">
                Email
              </Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#777"
                keyboardType="email-address"
                autoCapitalize="none"
                className="rounded-xl border border-[#333] bg-[#242424] px-4 py-4 text-base text-white"
              />
            </View>

            {/* Password */}
            <View className="mb-6">
              <Text className="mb-2 text-sm font-medium text-gray-300">
                Password
              </Text>

              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#777"
                secureTextEntry
                className="rounded-xl border border-[#333] bg-[#242424] px-4 py-4 text-base text-white"
              />
            </View>

            {/* Forgot password */}
            {isLogin && (
              <Pressable className="mb-6 self-end">
                <Text className="text-sm font-medium text-[#ff5500]">
                  Forgot password?
                </Text>
              </Pressable>
            )}

            {/* Submit */}
            <Pressable
              onPress={handleSubmit}
              className="items-center rounded-xl bg-[#ff5500] py-4 active:opacity-80"
            >
              <Text className="text-base font-bold text-white">
                {isLogin ? 'Sign In' : 'Create Account'}
              </Text>
            </Pressable>
          </View>

          {/* Bottom text */}
          <View className="mt-7 flex-row justify-center">
            <Text className="text-sm text-gray-400">
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}

            </Text>

            <Pressable onPress={() => setIsLogin(!isLogin)}>
              <Text className="text-sm font-bold text-[#ff5500]">
                {isLogin ? 'Register' : 'Login'}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}