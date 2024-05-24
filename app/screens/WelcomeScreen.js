import React from 'react';
import {ImageBackground, View, StyleSheet, Image} from "react-native";

import Text from "../components/Text";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground
            blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.tagline}>Sell What you don't need</Text>
            </View>


            <View style={styles.btnContainer}>
                <Button
                    style={styles.button}
                    title={"Login"}
                    onPress={()=>navigation.navigate(routes.LOGIN)}
                />
                <Button
                    style={styles.button}
                    title={"Register"}
                    color={"secondary"}
                    onPress={()=>navigation.navigate(routes.REGISTER)}/>
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