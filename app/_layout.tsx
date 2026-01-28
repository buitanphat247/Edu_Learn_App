import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

const screens = [
  {
    name: 'auth',
  },
  {
    name: '(users)',
  },
];

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack
        initialRouteName="(users)"
        screenOptions={{
          headerShown: false,
        }}>
        {screens.map((screen) => (
          <Stack.Screen key={screen.name} name={screen.name} />
        ))}
      </Stack>
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
