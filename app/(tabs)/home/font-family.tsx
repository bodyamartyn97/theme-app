import {View, StyleSheet} from 'react-native';
import {useThemeStore} from "../../../src/store/themeStore";
import {ThemedText} from "../../../src/components/ThemedText";
import { useFontFamilyStore} from "../../../src/store/fontFamilyStore";
import CustomButton from "../../../src/components/CustomButton";
import {TitleText} from "../../../src/components/TitleText";

const fonts = ['System', 'Montserrat', 'Oswald'];

export default function FontFamilyScreen() {
    const { theme } = useThemeStore();
    const { fontFamily, setFontFamily } = useFontFamilyStore();
    const currentFontName =
        typeof fontFamily === 'string'
            ? fontFamily
            : fontFamily.type === 'custom'
                ? fontFamily.name
                : fontFamily.name;

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <TitleText>Current font: {currentFontName}</TitleText>
            <ThemedText>Choose your font</ThemedText>
            <View style={styles.btns}>
            {fonts.map((font) => (
                <CustomButton
                    key={font}
                    title={font}
                    onPress={() => setFontFamily(font)}
                    backgroundColor={theme.primary}
                />
            ))}
            </View>

        </View>
    );
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