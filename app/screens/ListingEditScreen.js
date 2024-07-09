import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native'
import Screen from "../components/Screen";
import * as Yup from "yup";

import {Form, FormField, FormPicker, SubmitButton} from "../components/forms";
import CategoryPickerItem from "../components/forms/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import categoriesAPI from "../api/categories";
import listingsAPI from "../api/listings";
import useApi from "../hooks/useApi";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description"),
    images: Yup.array().min(1, "Please select at least one image.")
});

function ListingEditScreen() {
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const location = useLocation();
    const getCategoriesApi = useApi(categoriesAPI.getCategories);

    const handleSubmit = async (listing) => {
        console.log("Submitting...")
        setUploadVisible(true);
        const result = await listingsAPI.addListing(
            {...listing, location},
            (progress) => console.log(progress)
        );
        setUploadVisible(false);
        console.log("Submitting")


        if (!result.ok) {
            Alert.alert("Error", "Could not save the listing.");
            return;
        }
        Alert.alert("Success", "Listing saved successfully.");
    }

    useEffect(() => {
        getCategoriesApi.request();
    }, []);

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
                onSubmit={handleSubmit}
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
                    items={getCategoriesApi.data}
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