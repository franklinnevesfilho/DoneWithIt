import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from "react-native";
import AppText from "./AppText";
import colors from "../config/Colors";

function AppButton({title, color="primary", style, onPress}) {

    return (
        <TouchableOpacity style={[style, styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
                <AppText style={styles.text}>{title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
    },
    text:{
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default AppButton;