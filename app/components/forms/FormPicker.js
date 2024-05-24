import React from 'react';
import {StyleSheet} from 'react-native'
import {useFormikContext} from "formik";

import Picker from "./Picker";
import ErrorMessage from "./ErrorMessage"

function FormPicker({
                        items,
                        name,
                        placeholder,
                        width,
                        PickerItemComponent,
                        numberOfColumns
}) {
    const {errors, setFieldValue, touched, values} = useFormikContext();

    return (
        <>
            <Picker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

const styles = StyleSheet.create({})

export default FormPicker;