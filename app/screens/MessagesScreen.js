import React, { useState } from 'react';
import {FlatList, View} from "react-native";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import colors from "../config/Colors";

const InitialMessages = [
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