import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Alert, Image} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from "../config/colors";
import * as ImagePicker from 'expo-image-picker';

function ImageInput({imageUri, onChangeImage}) {

    useEffect(() => {
        requestPermission().then();
    })

    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert('You need to enable permission to access the library');
    }

    const handlePress = () => {
        if(!imageUri) selectImage().then();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            {text: 'Yes', onPress: () => onChangeImage(null)},
            {text: 'No'}
        ]);
    }

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
        });
        if(!result.canceled) onChangeImage(result.assets[0].uri);
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={[styles.box]}>
                {!imageUri ? (
                    <MaterialCommunityIcons name={"camera"} style={styles.cameraIcon} />
                ):(
                    <Image source={{uri: imageUri}} style={{width: 100, height: 100}} />
                )}

            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    box:{
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden',
        marginRight: 10
    },
    image: {
        width: "100%",
        height: "100%"
    },
    camera: {
        backgroundColor: colors.light,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraIcon: {
        color: colors.medium,
        fontSize: 50,
    },
})

export default ImageInput;