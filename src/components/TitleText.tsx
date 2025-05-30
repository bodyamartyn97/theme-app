import React from 'react';
import {Text} from 'react-native';
import {useThemeStore} from '../store/themeStore';
import {useFontSizeStore} from '../store/fontSizeStore';
import {useFontFamilyStore} from '../store/fontFamilyStore';


export const TitleText = ({ children }: { children: React.ReactNode }) => {
    const {theme} = useThemeStore();
    const {titleFontSize} = useFontSizeStore();
    const {fontFamily} = useFontFamilyStore();
    const content = Array.isArray(children) ? children.join('') : children;

    const fontFamilyName =
        typeof fontFamily === 'string'
            ? fontFamily
            : fontFamily.type === 'custom'
                ? fontFamily.name
                : fontFamily.name;

    return (
        <Text style={{color: theme.text, fontSize: titleFontSize, fontFamily: fontFamilyName}}>{content}</Text>
    );
};
