import React from 'react';
import {Text, TextStyle} from 'react-native';
import { useThemeStore } from '../store/themeStore';
import { useFontSizeStore } from '../store/fontSizeStore';
import { useFontFamilyStore } from '../store/fontFamilyStore';

export const ThemedText = ({ children, style }: { children: React.ReactNode, style?: TextStyle }) => {
    const { theme } = useThemeStore();
    const { bodyFontSize } = useFontSizeStore();
    const { fontFamily } = useFontFamilyStore();

    const fontFamilyName =
        typeof fontFamily === 'string'
            ? fontFamily
            : fontFamily.type === 'custom'
                ? fontFamily.name
                : fontFamily.name;

    return (
        <Text
            style={[{
                color: theme.text,
                fontSize: bodyFontSize,
                fontFamily: fontFamilyName,
            }, style]}
        >
            {children}
        </Text>
    );
};
