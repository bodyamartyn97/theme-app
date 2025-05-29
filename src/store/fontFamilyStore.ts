import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type FontFamily = 'System' | 'Montserrat' | 'Oswald';

interface FontFamilyState {
    fontFamily: FontFamily;
    setFontFamily: (font: FontFamily) => void;
}

export const useFontFamilyStore = create<FontFamilyState>()(
    persist(
        (set) => ({
            fontFamily: 'System',
            setFontFamily: (font) => set({ fontFamily: font }),
        }),
        {
            name: 'font-family-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
