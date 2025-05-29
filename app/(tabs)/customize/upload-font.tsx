import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as Font from 'expo-font';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { useFontFamilyStore, CustomFont } from '../../../src/store/fontFamilyStore';
import { TitleText } from '../../../src/components/TitleText';
import { ThemedText } from '../../../src/components/ThemedText';
import CustomButton from '../../../src/components/CustomButton';
import { useThemeStore } from '../../../src/store/themeStore';

export default function UploadFontScreen() {
    const { setFontFamily, fontFamily, clearCustomFont } = useFontFamilyStore();
    const [loading, setLoading] = useState(false);
    const { theme } = useThemeStore();

    const pickAndLoadFont = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ['application/x-font-ttf', 'application/x-font-opentype', 'font/ttf', 'font/otf'],
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (result.canceled || !result.assets || result.assets.length === 0) return;

            setLoading(true);

            const uri = result.assets[0].uri;
            const fileName = uri.split('/').pop() || `custom-font-${Date.now()}.ttf`;
            const fontName = `custom-font-${Date.now()}`;

            const newPath = FileSystem.documentDirectory + fileName;
            await FileSystem.copyAsync({ from: uri, to: newPath });

            const asset = Asset.fromURI(newPath);
            await asset.downloadAsync();

            await Font.loadAsync({
                [fontName]: asset.localUri!,
            });

            const customFont: CustomFont = {
                type: 'custom',
                name: fontName,
                uri: newPath,
            };

            setFontFamily(customFont);

            setLoading(false);
            Alert.alert('Success', 'Font uploaded and applied!');
        } catch (e) {
            setLoading(false);
            Alert.alert('Error', 'Failed to load font');
            console.error(e);
        }
    };

    const currentFontName =
        typeof fontFamily === 'string' ? fontFamily : fontFamily.type === 'custom' ? fontFamily.name : 'Unknown';

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <TitleText>Upload custom font</TitleText>
            <ThemedText>Current font: {currentFontName}</ThemedText>

            <CustomButton
                backgroundColor={theme.primary}
                title={loading ? 'Loading...' : 'Pick font file'}
                onPress={pickAndLoadFont}
            />

            {typeof fontFamily !== 'string' && fontFamily.type === 'custom' && (
                <CustomButton backgroundColor={theme.primary} title="Clear custom font" onPress={clearCustomFont} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        gap: 20
    },
});
