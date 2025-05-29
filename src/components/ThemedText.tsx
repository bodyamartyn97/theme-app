import React from 'react';
import { Text } from 'react-native';
import { useThemeStore } from '../store/themeStore';
import {useFontSizeStore} from "../store/fontSizeStore";
import {useFontFamilyStore} from "../store/fontFamilyStore";

export const ThemedText = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useThemeStore();
    const { bodyFontSize } = useFontSizeStore();
    const { fontFamily } = useFontFamilyStore();

    return <Text style={{ color: theme.text, fontSize: bodyFontSize, fontFamily: fontFamily }}>{children}</Text>;
};
