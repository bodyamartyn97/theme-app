import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FontSizeState {
    titleFontSize: number;
    bodyFontSize: number;
    setTitleFontSize: (size: number) => void;
    setBodyFontSize: (size: number) => void;
}

export const useFontSizeStore = create<FontSizeState>()(
    persist(
        (set) => ({
            titleFontSize: 20,
            bodyFontSize: 14,
            setTitleFontSize: (size) => set({ titleFontSize: size }),
            setBodyFontSize: (size) => set({ bodyFontSize: size }),
        }),
        {
            name: 'font-size-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
