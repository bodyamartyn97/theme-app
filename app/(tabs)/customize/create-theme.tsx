import React, { useState } from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useCustomThemeStore } from '../../../src/store/customThemeStore';
import { useThemeStore } from '../../../src/store/themeStore';
import CustomButton from '../../../src/components/CustomButton';
import {ThemedText} from "../../../src/components/ThemedText";
import {TitleText} from "../../../src/components/TitleText";

const COLORS = ['#ffffff', '#000000', '#007aff', '#ff3b30', '#34c759', '#5856d6', '#ffcc00'];

const ColorOption = ({ color, selected, onPress }: { color: string; selected: boolean; onPress: () => void }) => (
    <Pressable
        onPress={onPress}
        style={[
            styles.colorCircle,
            { backgroundColor: color, borderWidth: selected ? 3 : 1, borderColor: selected ? '#000' : '#ccc' },
        ]}
    />
);

export default function CreateThemeScreen() {
    const { setCustomTheme } = useCustomThemeStore();
    const { setTheme } = useThemeStore();

    const [background, setBackground] = useState('#ffffff');
    const [text, setText] = useState('#000000');
    const [primary, setPrimary] = useState('#007aff');

    const handleApply = () => {
        const theme = { background, text, primary };
        setCustomTheme(theme);
        setTheme('custom');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TitleText >Customize Theme</TitleText>

            <ThemedText>Background Color</ThemedText>
            <View style={styles.row}>
                {COLORS.map((c) => (
                    <ColorOption key={c} color={c} selected={c === background} onPress={() => setBackground(c)} />
                ))}
            </View>

            <ThemedText>Text Color</ThemedText>
            <View style={styles.row}>
                {COLORS.map((c) => (
                    <ColorOption key={c} color={c} selected={c === text} onPress={() => setText(c)} />
                ))}
            </View>

            <ThemedText>Primary Color</ThemedText>
            <View style={styles.row}>
                {COLORS.map((c) => (
                    <ColorOption key={c} color={c} selected={c === primary} onPress={() => setPrimary(c)} />
                ))}
            </View>

            <View style={[styles.preview, { backgroundColor: background }]}>
                <ThemedText style={{ color: text }}>Preview ThemedText</ThemedText>
                <CustomButton title="Primary Button" backgroundColor={primary} onPress={() => {}} />
            </View>

            <CustomButton title="Apply Theme" backgroundColor={primary} onPress={handleApply} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 10,
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    preview: {
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        gap: 10,
    },
});
