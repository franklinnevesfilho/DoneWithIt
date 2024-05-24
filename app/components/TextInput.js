import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({icon, width="100%", ...otherProps}) {
    return (
        <View style={[styles.container, { width }]}>
            <MaterialCommunityIcons style={styles.icon} name={icon} size={30} color={defaultStyles.colors.medium}/>
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, styles.textInput]} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        width: '100%',
    }
})

export default AppTextInput;
