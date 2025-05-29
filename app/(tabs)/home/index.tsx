import {View, StyleSheet} from 'react-native';
import {useThemeStore} from '../../../src/store/themeStore';
import CustomButton from "../../../src/components/CustomButton";

import {useRouter} from "expo-router";

export default function HomeScreen() {
    const router = useRouter();
    const {theme} = useThemeStore();

    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <CustomButton title={'Change Theme'} backgroundColor={theme.primary}
                          onPress={() => router.push('/home/theme')}/>
            <CustomButton title={'Change font size'} backgroundColor={theme.primary}
                          onPress={() => router.push('/home/font-size')}/>
            <CustomButton title={'Change font family'} backgroundColor={theme.primary}
                          onPress={() => router.push('/home/font-family')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        rowGap: 20
    },
})


