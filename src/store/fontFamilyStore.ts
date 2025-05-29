import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type BaseFontFamily = 'System' | 'Montserrat' | 'Oswald' | string;

export interface CustomFont {
    type: 'custom';
    name: string;
    uri: string;
}

export type FontFamily = BaseFontFamily | CustomFont;

interface FontFamilyState {
    fontFamily: FontFamily;
    setFontFamily: (font: FontFamily) => void;
    clearCustomFont: () => void;
}

export const useFontFamilyStore = create<FontFamilyState>()(
    persist(
        (set) => ({
            fontFamily: 'System',  // стартовое значение
            setFontFamily: (font) => set({ fontFamily: font }),
            clearCustomFont: () => set({ fontFamily: 'System' }),
        }),
        {
            name: 'font-family-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
