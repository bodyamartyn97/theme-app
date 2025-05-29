import { Tabs } from 'expo-router';
import { useThemeStore } from '../../src/store/themeStore';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    const { theme } = useThemeStore();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.primary,
                tabBarStyle: { backgroundColor: theme.background },
                tabBarLabelStyle: { fontSize: 12 },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="customize"
                options={{
                    title: 'Customize',
                    tabBarIcon: ({ color, size }) => <Ionicons name="color-palette" size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}
