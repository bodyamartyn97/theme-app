import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import { View, StatusBar } from 'react-native';
import { useThemeStore } from '../src/store/themeStore';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { theme, themeName, setTheme } = useThemeStore();

    const [fontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        Oswald: require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    });

    useEffect(() => {
        if (themeName === 'adaptive') {
            setTheme('adaptive');
        }
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: theme.background }}>
            <StatusBar barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />
            <Slot />
        </View>
    );
}