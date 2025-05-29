import {View, StyleSheet} from 'react-native';
import {ThemedText} from "../../../src/components/ThemedText";
import Slider from "@react-native-community/slider";
import {useFontSizeStore} from "../../../src/store/fontSizeStore";
import {useThemeStore} from "../../../src/store/themeStore";
import {TitleText} from "../../../src/components/TitleText";

export default function FontSizeScreen() {
    const { titleFontSize, bodyFontSize, setTitleFontSize, setBodyFontSize } = useFontSizeStore();
    const { theme } = useThemeStore();
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.blocks}>
                <View>
                    <TitleText>Title text</TitleText>
                    <Slider
                        style={{width: 300, height: 40}}
                        minimumValue={12}
                        maximumValue={40}
                        step={1}
                        value={titleFontSize}
                        onValueChange={setTitleFontSize}
                    />
                    <TitleText>Size: {titleFontSize}</TitleText>
                </View>
                <View>

                    <ThemedText>Ordinary text</ThemedText>
                    <Slider
                        style={{width: 300, height: 40}}
                        minimumValue={10}
                        maximumValue={30}
                        step={1}
                        value={bodyFontSize}
                        onValueChange={setBodyFontSize}
                    />
                    <ThemedText>Size: {bodyFontSize}</ThemedText>
                </View>
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
    blocks: {
        flex: 1,
        justifyContent: 'space-evenly',
    }
})