import React, { useState } from 'react';
import {FlatList} from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";

const InitialMessages = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque ea eveniethic " +
            "in minima minus quis rerum similique. Assumenda dolor dolorum eveniet explicabo nesciunt nobis pariatur" +
            "saepe, voluptatum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque ea eveniethic " +
            "in minima minus quis rerum similique. Assumenda dolor dolorum eveniet explicabo nesciunt nobis pariatur" +
            "saepe, voluptatum",
        img: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque ea eveniethic " +
            "in minima minus quis rerum similique. Assumenda dolor dolorum eveniet explicabo nesciunt nobis pariatur" +
            "saepe, voluptatum",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate doloremque ea eveniethic " +
            "in minima minus quis rerum similique. Assumenda dolor dolorum eveniet explicabo nesciunt nobis pariatur" +
            "saepe, voluptatum",
        img: require('../assets/mosh.jpg')
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(InitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        img={item.img}
                        onPress={()=> console.log("Item selected:", item.id)}
                        renderRightActions={()=>
                            <ListItemDeleteAction onPress={()=> handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={()=> {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            img: require('../assets/mosh.jpg')
                        },
                    ])
                }}
            />
        </Screen>
    );
}

export default MessagesScreen;