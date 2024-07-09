import React, {useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import colors from "../../config/colors";
import ImageInput from "../ImageInput";

function ImageInputList({imageUris = [], onAddImage, onRemoveImage}) {
    const scrollRef = useRef();

    return (
        <View>
            <ScrollView
                ref={scrollRef}
                horizontal
                onContentSizeChange={()=> scrollRef.current?.scrollToEnd()}
            >
                <View style={styles.container}>
                    {
                        imageUris.map((uri)=>(
                            <ImageInput
                                key={uri}
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        ))
                    }
                    <ImageInput onChangeImage={uri => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    flatList: {
      flexGrow: 0
    },
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

export default ImageInputList;