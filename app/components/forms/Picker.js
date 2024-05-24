import React, {useState} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyles from "../../config/styles";
import Text from "../Text";
import Screen from "../Screen";
import PickerItem from "./PickerItem";

function Picker({
                       icon,
                       items,
                       placeholder,
                       onSelectItem,
                       selectedItem,
                       width="100%",
                       PickerItemComponent = PickerItem,
                       numberOfColumns = 1
}) {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback
                onPress={()=> setModalVisible(true)}>
                <View style={[styles.container, {width}]}>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={icon}
                        size={30}
                        color={defaultStyles.colors.medium}/>
                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={[styles.text, styles.placeholder]}>{placeholder}</Text>
                    )}
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={"chevron-down"}
                        size={30}
                        color={defaultStyles.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType={"slide"}>
                <Screen>
                    <Button title={"close"} onPress={()=> setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({item}) =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />

                        }
                    />

                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
    placeholder: {
        color: defaultStyles.colors.medium
    }
})

export default Picker;
