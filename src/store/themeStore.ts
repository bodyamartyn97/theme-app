import { create } from 'zustand';
import { Appearance, ColorSchemeName } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme, ThemeType } from '../theme';

type ThemeName = 'light' | 'dark' | 'adaptive';

interface ThemeState {
    themeName: ThemeName;
    theme: ThemeType;
    setTheme: (name: ThemeName) => void;
}

const getAdaptiveTheme = (scheme: ColorSchemeName = Appearance.getColorScheme()) => {
    return scheme === 'dark' ? darkTheme : lightTheme;
};

export const useThemeStore = create<ThemeState>()(
    persist(
        (set, get) => {
            Appearance.addChangeListener(({ colorScheme }) => {
                if (get().themeName === 'adaptive') {
                    set({ theme: getAdaptiveTheme(colorScheme) });
                }
            });

            return {
                themeName: 'adaptive',
                theme: getAdaptiveTheme(),
                setTheme: (themeName: ThemeName) => {
                    const theme =
                        themeName === 'adaptive'
                            ? getAdaptiveTheme()
                            : themeName === 'dark'
                                ? darkTheme
                                : lightTheme;
                    set({ themeName, theme });
                },
            };
        },
        {
            name: 'theme-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
