import React from 'react';
import {View, Image, StyleSheet, TouchableHighlight} from "react-native";
import {GestureHandlerRootView, Swipeable} from "react-native-gesture-handler";

import Text from "../Text";
import colors from "../../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";

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
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            {subTitle && <Text style={styles.subTitle} numberOfLines={2}>{subTitle}</Text>}
                        </View>
                        <MaterialCommunityIcons color={colors.medium} name={"chevron-right"} size={30} />
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
        alignItems: 'center',
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    detailsContainer: {
        flex:1,
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