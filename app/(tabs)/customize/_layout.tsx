import { Stack } from 'expo-router';
import {useThemeStore} from "../../../src/store/themeStore";

export default function HomeStackLayout() {
    const { theme } = useThemeStore();

    return (
        <Stack screenOptions={{
            animation: 'slide_from_right',
            headerStyle: { backgroundColor: theme.background },
            headerTintColor: theme.text,
            contentStyle: { backgroundColor: theme.background },
        }}>
            <Stack.Screen name="index" options={{ title: 'Customize' }} />
            <Stack.Screen name="create-theme" options={{ title: 'Create theme' }} />
            <Stack.Screen name="upload-font" options={{ title: 'Upload font' }} />
        </Stack>
    );
}