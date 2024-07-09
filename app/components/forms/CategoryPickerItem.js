import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native'
import Icon from "../Icon";
import Text from "../Text";

function CategoryPickerItem({onPress, item}) {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Icon
                backgroundColor={item.backgroundColor}
                name={item.icon}
                size={80}
            />
            <Text style={styles.label}>{item.name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        padding: 15,
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;