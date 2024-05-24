import React from 'react';
import {StyleSheet} from 'react-native'
import Screen from "../components/Screen";
import * as Yup from "yup";

import {Form, FormField, FormPicker, SubmitButton} from "../components/forms";
import CategoryPickerItem from "../components/forms/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
    {label: "Furniture", value: 1, backgroundColor: "red", icon: "apps"},
    {label: "Clothing", value: 2, backgroundColor: "green", icon: "email"},
    {label: "Camera", value: 3, backgroundColor: "blue" ,icon: "lock"},
];


function ListingEditScreen() {
    const location = useLocation();

    return (
        <Screen>
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    category: null,
                    description: "",
                    images: []
                }}
                onSubmit={() => console.log(location)}
                validationSchema={validationSchema}
            >
                <FormImagePicker
                    name={"images"}

                />
                <FormField
                    maxLength={255}
                    name={"title"}
                    placeholder={"Title"}
                />
                <FormField
                    keyboardType={"numeric"}
                    maxLength={8}
                    name={"price"}
                    placeholder={"Price"}
                    width={120}
                />
                <FormPicker
                    name={"category"}
                    items={categories}
                    placeholder={"Category"}
                    width={"50%"}
                    PickerItemComponent={CategoryPickerItem}
                    numberOfColumns={3}
                />
                <FormField
                    maxLength={255}
                    multiline
                    name={"description"}
                    numberOfLines={3}
                    placeholder={"Description"}
                />
                <SubmitButton
                    title={"Post"}/>
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({})

export default ListingEditScreen;