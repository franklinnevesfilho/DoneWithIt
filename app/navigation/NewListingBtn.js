import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

function NewListingBtn({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name={"plus-circle"} color={colors.white} size={40}/>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderColor: colors.white,
        width: 80,
        height: 80,
        bottom: 20,
        borderWidth: 10,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default NewListingBtn;