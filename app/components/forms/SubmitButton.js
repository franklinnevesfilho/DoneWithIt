import React from 'react';
import {StyleSheet} from 'react-native'
import {useFormikContext} from "formik";

import Button from "../Button";

function SubmitButton({title, style }) {
    const { handleSubmit } = useFormikContext();

    return (
        <Button style={style} title={title} onPress={handleSubmit}/>
    );
}

const styles = StyleSheet.create({})

export default SubmitButton;