import React from 'react';
import {ImageBackground, View, StyleSheet, Image, Text} from "react-native";
import colors from "../config/Colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <AppText style={styles.tagline}>Sell What you don't need</AppText>
            </View>


            <View style={styles.btnContainer}>
                <AppButton style={styles.button} title={"Login"}/>
                <AppButton style={styles.button} title={"Register"} color={"secondary"}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    btnContainer: {
        width: '100%',
        padding: 20,
    },
    button: {
        width: '100%',
        height: 70,
        marginVertical: 10,
    },
    logo: {
        width: 100,
        height: 100,
        position: 'relative',
    },
    logoContainer: {
        position: 'absolute',
        alignItems: 'center',
        top: 70
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
});

export default WelcomeScreen;