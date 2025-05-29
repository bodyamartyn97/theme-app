import { Stack } from 'expo-router';
import {useThemeStore} from "../../../src/store/themeStore";

export default function HomeStackLayout() {
    const { theme } = useThemeStore();

    return (
        <Stack screenOptions={{
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.text,
            contentStyle: { backgroundColor: theme.background },
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="theme" options={{ title: 'Choose theme' }} />
            <Stack.Screen name="font-size" options={{ title: 'Font Size' }} />
            <Stack.Screen name="font-family" options={{ title: 'Font Family' }} />
        </Stack>
    );
}