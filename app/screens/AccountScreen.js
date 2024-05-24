import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native'
import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/Icon";
import colors from "../config/colors";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import routes from "../navigation/routes";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary,
        },
        targetScreen: routes.MESSAGES
    }
]

function AccountScreen({navigation}) {

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title={"Name"}
                          subTitle={"email"}
                          img={require("../assets/mosh.jpg")}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({item}) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                            onPress={() => navigation.navigate(item.targetScreen)}
                        />
                    )}
                />
            </View>
            <View style={styles.container}>
                <ListItem
                    title={"Log Out"}
                    IconComponent={
                        <Icon
                            name={"logout"}
                            backgroundColor={colors.yellow}
                        />
                    }
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        flex: 1,
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;