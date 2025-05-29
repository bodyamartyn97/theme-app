import { View, StyleSheet } from 'react-native';
import { useThemeStore } from '../../../src/store/themeStore';
import CustomButton from '../../../src/components/CustomButton';
import { router } from 'expo-router';

export default function CustomizeIndex() {
    const { theme } = useThemeStore();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <CustomButton title="🎨 Create Theme" onPress={() => router.push('/customize/create-theme')} backgroundColor={theme.primary} />
            <CustomButton title="🖋 Upload Font" onPress={() => router.push('/customize/upload-font')} backgroundColor={theme.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        gap: 20,
    },
});
