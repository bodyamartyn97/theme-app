import { SafeAreaView, StyleSheet} from 'react-native';
import {useEffect} from "react";
import {useRouter} from "expo-router";
import {TitleText} from "../src/components/TitleText";

export default function HomeScreen() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/home');
        }, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
           <TitleText>Welcome to the Theme App</TitleText>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
})