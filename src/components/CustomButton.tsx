import React from 'react';
import { Pressable, StyleSheet} from "react-native";
import {ThemedText} from "./ThemedText";

type Props = {
    title: string;
    backgroundColor: string;
    onPress: () => void;
}

export default function CustomButton({title, onPress, backgroundColor}: Props) {
    return (
        <Pressable
            style={({pressed}) => [
                styles.button,
                {backgroundColor: backgroundColor},
                pressed && styles.buttonPressed
            ]}
            onPress={onPress}
        >
            <ThemedText>{title}</ThemedText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#357ABD',
    },
})