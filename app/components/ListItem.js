import React from 'react';
import {View, Image, StyleSheet} from "react-native";
import AppText from "./AppText";

function ListItem({img, title, subTitle}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={img}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: 'grey',
    }
});

export default ListItem;