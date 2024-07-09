import React from 'react';
import {useFormikContext} from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({name, width, ...otherProps}) {
    const {
        setFieldTouched,
        errors,
        touched,
        handleChange
    } = useFormikContext();

    return (
        <>
            <TextInput
                {...otherProps}
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default FormField;