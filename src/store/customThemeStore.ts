import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CustomTheme {
    background: string;
    text: string;
    primary: string;
}

interface ThemeState {
    customTheme: CustomTheme;
    setCustomTheme: (theme: CustomTheme) => void;
}

export const useCustomThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            customTheme: {
                background: '#ffffff',
                text: '#000000',
                primary: '#007bff',
            },
            setCustomTheme: (theme) => set({ customTheme: theme }),
        }),
        {
            name: 'custom-theme',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
