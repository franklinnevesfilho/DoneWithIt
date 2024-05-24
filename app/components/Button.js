import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import Text from "./Text";
import colors from "../config/colors";

function Button({title, color="primary", style, onPress}) {

    return (
        <TouchableOpacity style={[style, styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
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

export default Button;