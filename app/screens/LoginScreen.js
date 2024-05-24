import React from 'react';
import {StyleSheet, Image} from 'react-native'
import * as Yup from 'yup';

import {Form, FormField, SubmitButton} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")} />
            <Form
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <FormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry
                />

                <SubmitButton title={"Login"} />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;