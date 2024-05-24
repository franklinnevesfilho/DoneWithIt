import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, ActivityIndicator} from "react-native";
import colors from "../config/colors";
import Text from "./Text";

function Card({title, subTitle, imageUrl, onPress}) {
    const [loading, setLoading] = React.useState(true);

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                {loading && (
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        style={styles.loader}
                    />
                )}
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.img}
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    }
});

export default Card;