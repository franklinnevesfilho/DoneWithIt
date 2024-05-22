import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, TouchableHighlight} from "react-native";
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/Colors";

function ListItem({img, IconComponent, title, subTitle, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    underlayColor={colors.light}
                    onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {img && <Image style={styles.image} source={img}/>}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                        </View>

                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
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