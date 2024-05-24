import React from 'react';
import {StyleSheet} from 'react-native'
import Screen from "../components/Screen";
import {Form, FormField, SubmitButton} from "../components/forms";

function RegisterScreen(props) {
    return (
        <Screen>
            <Form>
                <FormField
                    name={"name"}
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="email-address"
                    placeholder="Name"
                    textContentType="emailAddress"
                />
                <FormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    textContentType="email"/>

                <FormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"/>
                <SubmitButton title={"Register"} />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({})

export default RegisterScreen;