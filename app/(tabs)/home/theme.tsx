import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ThemedText} from "../../../src/components/ThemedText";
import CustomButton from "../../../src/components/CustomButton";
import {useThemeStore} from "../../../src/store/themeStore";
import {useFontSizeStore} from "../../../src/store/fontSizeStore";

export default function ThemeScreen () {
    const { themeName, setTheme, theme } = useThemeStore();
    const { titleFontSize } = useFontSizeStore();
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <Text style={ { color: theme.text, fontSize: titleFontSize}}>Current Theme: {themeName}</Text>
            <View style={styles.btns}>
                <ThemedText>Choose your theme</ThemedText>
                <CustomButton title={'Light'}  backgroundColor={theme.primary} onPress={() => setTheme('light')} />
                <CustomButton title={'Dark'}  backgroundColor={theme.primary} onPress={() => setTheme('dark')} />
                <CustomButton title={'Adaptive'}  backgroundColor={theme.primary} onPress={() => setTheme('adaptive')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    btns: {
        marginTop: 20,
        rowGap: 10
    }
})