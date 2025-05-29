import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import { View, StatusBar } from 'react-native';
import { useThemeStore } from '../src/store/themeStore';
import { useFontFamilyStore } from '../src/store/fontFamilyStore';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { theme, themeName, setTheme } = useThemeStore();
    const { fontFamily } = useFontFamilyStore();
    const [customFontLoaded, setCustomFontLoaded] = useState(true);

    const [baseFontsLoaded] = useFonts({
        Montserrat: require('../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        Oswald: require('../assets/fonts/Oswald-VariableFont_wght.ttf'),
    });

    useEffect(() => {
        if (themeName === 'adaptive') {
            setTheme('adaptive');
        }
    }, []);

    useEffect(() => {
        const loadCustomFont = async () => {
            if (typeof fontFamily !== 'string' && fontFamily.type === 'custom') {
                try {
                    await Font.loadAsync({ [fontFamily.name]: fontFamily.uri });
                    setCustomFontLoaded(true);
                } catch (e) {
                    console.warn('Failed to load custom font:', e);
                    setCustomFontLoaded(true); // чтобы не застряло
                }
            }
        };

        setCustomFontLoaded(typeof fontFamily === 'string' || fontFamily.type !== 'custom');
        loadCustomFont();
    }, [fontFamily]);

    const onLayoutRootView = useCallback(async () => {
        if (baseFontsLoaded && customFontLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [baseFontsLoaded, customFontLoaded]);

    if (!baseFontsLoaded || !customFontLoaded) return null;

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1, backgroundColor: theme.background }}>
            <StatusBar barStyle={themeName === 'dark' ? 'light-content' : 'dark-content'} />
            <Slot />
        </View>
    );
}
