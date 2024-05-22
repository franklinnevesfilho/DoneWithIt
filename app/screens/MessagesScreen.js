import React from 'react';
import {View, StyleSheet, FlatList, SafeAreaView, Platform, StatusBar} from "react-native";
import ListItem from "../components/ListItem";

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        img: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        img: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <SafeAreaView>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        img={item.img}/>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default MessagesScreen;